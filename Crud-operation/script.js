
let form = document.getElementById("myForm");
// let imgInput = document.querySelector(".img");
// let file = document.getElementById("imgInput");
let userName = document.getElementById("name");
let age = document.getElementById("age");
let city =document.getElementById("city");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let post = document.getElementById("post");
let sDate = document.getElementById("sDate");
let submitBtn = document.querySelector(".submit");
let userInfo = document.getElementById("data");
let modal = document.getElementById('useForm');
let modalTitle = document.querySelector("#useForm .modal-title");
let newUserBtn = document.querySelector(".newUser");



let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')):[]




let isEdit = false;
let editId;


// showInfo()


newUserBtn.addEventListener('click',()=>{
  submitBtn.innerText = "submit"
  modalTitle.innerText = "Fill the Form"
  isEdit = false
  form.reset()
})


function showInfo(){

 userInfo.innerHTML = ""
  getData.forEach((element,index) =>{
    let CreateElement = `<tr class = "employeeDetails">
    <td>${index+1}</td>
    <td>${element.employeeName}</td>
    <td>${element.employeeAge}</td>
    <td>${element.employeeCity}</td>
    <td>${element.employeeEmail}</td>
    <td>${element.employeePhone}</td>
    <td>${element.employeePost}</td>
    <td>${element.startDate}</td>

    <td>
    <button class="btn btn-success" onclick="readInfo('${element.employeeName}','${element.employeeAge}','${element.employeeCity}','${element.employeeEmail}','${element.employeePhone}','${element.employeePost}','${element.startDate}')" data-bs-toggle="modal" data-bs-target="#readData">
    <i class="bi bi-eye"></i>
    </button>

    <button class="btn btn-primary" onclick="editInfo(${index},'${element.employeeName}','${element.employeeAge}','${element.employeeCity}','${element.employeeEmail}','${element.employeePhone}','${element.employeePost}','${element.startDate}')" data-bs-toggle="modal" data-bs-target="#useForm">
    <i class="bi bi-pencil-square"></i>
    </button>

    <button class="btn btn-danger" onclick="deleteInfo(${index})">
    <i class="bi bi-trash"></i>
    </button>
    </td>
    <tr>`


    userInfo.innerHTML += CreateElement

  })

  }

  showInfo()

function readInfo(name, age, city, email, phone, post, Sdate){
    document.querySelector('#showName').value = name;
    document.querySelector("#showAge").value = age;
    document.querySelector("#showCity").value = city;
    document.querySelector("#showEmail").value = email;
    document.querySelector("#showPhone").value = phone;
    document.querySelector("#showPost").value = post;
    document.querySelector("#showsDate").value = Sdate;

}

function editInfo(index, name, Age, City, Email, Phone, Post, Sdate){
    isEdit = true            
    editId = index           
    // imgInput.src = pic       
    userName.value = name    
    age.value = Age
    city.value = City
    email.value = Email
    phone.value = Phone
    post.value = Post
    sDate.value = Sdate

    submitBtn.innerText = "Update"      
    modalTitle.innerText = "Update The Form" 
}


function deleteInfo(index){
  if(confirm("are you sure")){
    getData.splice(index,1)
    localStorage.setItem("userProfile",JSON.stringify(getData))
    showInfo()
  }

}


form.addEventListener('submit' ,(e)=>{
  e.preventDefault()


  const information = {
    employeeName:userName.value,
    employeeAge:age.value,
    employeeCity:city.value,
    employeeEmail:email.value,
    employeePhone:phone.value,
    employeePost:post.value,
    startDate: sDate.value
  }




  if(!isEdit){
    getData.push(information)
  }
  else{
    isEdit = false
    getData[editId]=information
  }

      localStorage.setItem('userProfile', JSON.stringify(getData))
         submitBtn.innerText = "Submit"
    modalTitle.innerHTML = "Fill The Form"
    showInfo()
    form.reset()



})