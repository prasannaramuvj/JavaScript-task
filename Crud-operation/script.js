
let form = document.getElementById("myForm");
let imgInput = document.querySelector(".img");
let file = document.getElementById("imgInput");
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
  // imgInput.src ="./image/Profile Icon.webp"

  form.reset()


 document.querySelectorAll('.error').forEach(spans=> spans.innerHTML = "");

 document.querySelectorAll('.line').forEach(lines=>lines.style.border="");
  imgInput.src = "img/Profile Icon.webp";

})



file.onchange=function(){

  if(file.files[0].size<1000000){
    let fileReader = new FileReader();

    fileReader.onload=function(e){
      imgUrl = e.target.result;
      imgInput.src=imgUrl
    }

    fileReader.readAsDataURL(file.files[0])
  }
  else{
    alert('file size is high');
  }
}


function showInfo(){


 userInfo.innerHTML = ""
  getData.forEach((element,index) =>{
    let CreateElement = `<tr class = "employeeDetails">
    <td>${index+1}</td>
    <td><img src = "${element.picture}" width="50" height="50"></td>
    <td>${element.employeeName}</td>
    <td>${element.employeeAge}</td>
    <td>${element.employeeCity}</td>
    <td>${element.employeeEmail}</td>
    <td>${element.employeePhone}</td>
    <td>${element.employeePost}</td>
    <td>${element.startDate}</td>

    <td>
    <button class="btn btn-success" onclick="readInfo('${element.picture}','${element.employeeName}','${element.employeeAge}','${element.employeeCity}','${element.employeeEmail}','${element.employeePhone}','${element.employeePost}','${element.startDate}')" data-bs-toggle="modal" data-bs-target="#readData">
    <i class="bi bi-eye"></i>
    </button>

    <button class="btn btn-primary" onclick="editInfo(${index},'${element.picture}','${element.employeeName}','${element.employeeAge}','${element.employeeCity}','${element.employeeEmail}','${element.employeePhone}','${element.employeePost}','${element.startDate}')" data-bs-toggle="modal" data-bs-target="#useForm">
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

function readInfo( pic,name, age, city, email, phone, post, Sdate){
    document.querySelector('#showImg').src = pic;
    document.querySelector('#showName').value = name;
    document.querySelector("#showAge").value = age;
    document.querySelector("#showCity").value = city;
    document.querySelector("#showEmail").value = email;
    document.querySelector("#showPhone").value = phone;
    document.querySelector("#showPost").value = post;
    document.querySelector("#showsDate").value = Sdate;

}

function editInfo(index,pic, name, Age, City, Email, Phone, Post, Sdate){
    isEdit = true            
    editId = index           
    imgInput.src = pic       
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
   

let isFormvalid = checkValidation(userName)

if(isFormvalid){
  const information = {
    picture:imgInput.src == undefined ? "img/Profile Icon.webp" :imgInput.src,
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


      imgInput.src = "img/Profile Icon.webp";




}



})



function checkValidation(userName){
  
let isValid = true;

  if(userName.value.trim() === "" || /\d/.test(userName.value.trim())){
    isValid = false;
    userName.style.border = "1px solid red";
    document.querySelector('#nameerrorid').innerHTML= "Name is required";
    
  
  }
  else{
    document.querySelector('#nameerrorid').innerHTML= "";
        userName.style.border = "";

  }
//-------------------------------------------------------------------------------------------//
  
  if(age.value.trim() === ""){
    isValid = false;
    age.style.border = "1px solid red";
    document.querySelector('#ageerrorid').innerHTML = "Age is required";
  }
  else if(age.value.trim()<18){
    document.querySelector('#ageerrorid').innerHTML = " Age must be above 18";
    isValid = false;
    age.style.border = "1px solid red";

  }
  else{
    document.querySelector('#ageerrorid').innerHTML = "";
    age.style.border = "";


  }
//-----------------------------------------------------------------------------------------------//

 if(city.value.trim() === "" || /\d/.test(city.value.trim())){
    isValid = false;
    city.style.border = "1px solid red";
    document.querySelector('#cityerrorid').innerHTML = "City is required";
  }
  else{
    document.querySelector('#cityerrorid').innerHTML = "";
    city.style.border = "";


  }
//-----------------------------------------------------------------------------------------//

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if(email.value.trim() === ""){
    isValid = false;
    email.style.border = "1px solid red";

    document.querySelector('#emailerrorid').innerHTML = "Email is required";
  }

  else if(!emailPattern.test(email.value.trim())){
    isValid = false;
    email.style.border = "1px solid red";

    document.querySelector('#emailerrorid').innerHTML = " Enter the valid format of Email id";


  }
  else{
    email.style.border = "";

    document.querySelector('#emailerrorid').innerHTML = "";

  }

  //--------------------------------------------------------------------------------//
    const phonePattern = /^\d{10}$/;

   if(phone.value.trim() === "" ||!phonePattern.test(phone.value.trim())){
    isValid = false;
    phone.style.border = "1px solid red";

    document.querySelector('#phoneerrorid').innerHTML = "phone no is required number must be in 10 digit";
  }
  else{
    document.querySelector('#phoneerrorid').innerHTML = "";
    phone.style.border = "";


  }
  //-----------------------------------------------------------------------------------//
    const postPattern = /^\d{6}$/;

   if(post.value.trim() === "" || !postPattern.test(post.value.trim())){
    isValid = false;
    post.style.border = "1px solid red";

    document.querySelector('#posterrorid').innerHTML = "post is required number must be in six digit";
  }
  else{
    document.querySelector('#posterrorid').innerHTML = "";
    post.style.border = "";


  }

  //----------------------------------------------------------------------------------------//
   if(sDate.value.trim() === ""){
    isValid = false;
    sDate.style.border = "1px solid red";

    document.querySelector('#sDateerrorid').innerHTML = "starting date  is required";
  }
  else{
    document.querySelector('#sDateerrorid').innerHTML = "";
    sDate.style.border = "";


  }

//---------------------------------------------------------//
  return isValid
}