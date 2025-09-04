let endpoint = 'https://68b7bb2173b3ec66cec55e92.mockapi.io/users';
const table = document.getElementById('table-body');



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
  <td style="display:flex;justify-content:space-around;outline:none";>
    <button class="btn-edit" style="color:red" onclick="editUser(${users.id})">Edit</button>
    <button class="btn-dele" onclick="deleteUser(${users.id})">Delete</button>
  </td>
  </tr>`;

  table.innerHTML += row;
}

  function editUser(id) {
      window.location.href = `api.html?id=${id}`;
    }

     function deleteUser(id) {
      if (confirm("Are you sure you want to delete this user?")){

      fetch(`${endpoint}/${id}`, { method: "DELETE" })
      .then(()=>{collectuser();
      });
    }
  }

collectuser();