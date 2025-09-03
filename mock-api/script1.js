let endpoint = 'https://68b7bb2173b3ec66cec55e92.mockapi.io/users';
let editId;

const input = document.getElementById('name');
const mail = document.getElementById('mail');
const address = document.getElementById('address');
const pin = document.getElementById('pin');

const createbtn = document.getElementById('create');
const form = document.getElementById('form');
const table = document.getElementById('table-body');
const cancel = document.getElementById('cancel');

async function collectuser() {
  let collect = await fetch(endpoint);
  let user = await collect.json();
  table.innerHTML = "";
  user.forEach((user, index) => {
    renderUseritem(user, index);
  });
}

async function renderUseritem(users, index) {
  let row = `<tr>
  <td>${index + 1}</td>
  <td>${users.id}</td>
  <td>${users.name}</td>
  <td>${users.mail}</td>
  <td>${users.address}</td>
  <td>${users.pin}</td>
  <td style="display:flex;justify-content:space-around";>
    <button class="btn-edit" style="color:red" onclick="editfun(${users.id})">Edit</button>
    <button class="btn-dele" onclick="editdel(${users.id})">Delete</button>
  </td>
  </tr>`;

  table.innerHTML += row;
}

form.onsubmit = async (e) => {
  e.preventDefault();

  const userData = {
    name: input.value,
    mail: mail.value,
    address: address.value,
    pin: pin.value
  };

  try {
    if (editId) {
    
      await fetch(`${endpoint}/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
    } else {
      
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
    }

    reset();
    collectuser();
  } catch (err) {
    console.error('Error:', err);
  }
};

async function editfun(users) {
  let res = await fetch(`${endpoint}/${users}`);
  let user = await res.json();
  input.value = user.name;
  mail.value = user.mail;
  address.value = user.address;
  pin.value = user.pin;

  cancel.style.display = "inline-block";
  createbtn.innerHTML = "Update";
  editId = user.id;
}

async function editdel(id) {
  if (!confirm('confirm delete?')) return;
  await fetch(`${endpoint}/${id}`, { method: 'DELETE' });
  collectuser();
}

collectuser();

function reset() {
  form.reset();
  createbtn.innerHTML = 'Create';
  cancel.style.display = "none";
  editId = null;
}

cancel.addEventListener("click", () => {
  reset();
});
