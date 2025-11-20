let input = document.getElementById('input');
let error = document.getElementById('errorid');
const max = 10;
const min = 1;


const validate = (value)=>{
  

  let a = Math.floor(Math.random()*max)+min;
  
  if(a === value ){
    alert(`you choose ${value}  computer choose ${a} both are same`);
    input.value="";
    
  }
  else{
    alert(`you choose ${value}  computer choose ${a} both are not same`);
    input.value="";

      
  }
  
  }



input.addEventListener("input" , (e)=> {
  e.preventDefault();
     let inputs = Number(input.value);
  if(inputs === "") {
    error.innerText = "Empty";
  }
  else if(inputs < 1 || inputs  > 10) 
    { error.innerText = "Enter valid interval ";
    }
  else
    { error.innerText = "";
      
    }

})


form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let value = Number(input.value);
  if (input.value === "") return;
  if (value < 1 || value > 10) return;

  validate(value)

})



