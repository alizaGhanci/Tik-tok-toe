let form = document.querySelector("#registration");
let firstInput = document.querySelector(".firstname");
let secondInput = document.querySelector(" .lastname");
let emailInput = document.querySelector("#email");
let resultElement = document.querySelector("#result");
let passwordInput = document.querySelector(".password");
let button = document.querySelector(".btn");
let p = document.querySelector(".para");
let genderarray = document.querySelectorAll(".Gendervalue");

let gender = "";



function check() {
  if (
    passwordInput.value.match(/[A-Z]/) &&
    passwordInput.value.match(/[a-z]/) &&
    passwordInput.value.match(/[0-9]/) &&
    passwordInput.value.match(/[!/@/#/$/-]/) &&
    passwordInput.value.length > 8 &&
    passwordInput.value.length < 12
  ) {
    p.style.color = "green";
     p.textContent = "please enter A-z , a-z , 0-9, and special characters"
  
   
  } else {
    p.style.color = "red";
    p.textContent = "please enter A-z , a-z , 0-9, and special characters"
    
    return;
  }
}


passwordInput.addEventListener("keyup", check);
emailInput.addEventListener("keyup", emailcheck);


function emailcheck(){
  let emailInput = document.getElementById('email').value.trim();
  let resultElement = document.getElementById('result');
  let getemail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


 if (getemail.test(emailInput)) {
      resultElement.textContent = "valid  Gmail address";
      resultElement.style.color = "green";
  }
  else{
    resultElement.textContent = "valid  Gmail address"
    resultElement.style.color = "red";
  }
  

}

genderarray.forEach((radio) => {
  radio.addEventListener("click", () => {
    gender = radio.value;
  });
});


button.addEventListener("click", (event) => {
  event.preventDefault();

  firstname = firstInput.value;
  lastname = secondInput.value;
  emailvalue = emailInput.value;
  passwordvalue = passwordInput.value;
  gendervalue = gender;
 

  if 
    (firstname!== "" &&
    lastname !== "" &&
    emailvalue !== "" &&
      passwordvalue!== "" &&  gendervalue !== "") 
  
{
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("secondname", lastname);
     localStorage.setItem("email", emailvalue);
   
    localStorage.setItem("Gender", gendervalue);
  
    
    localStorage.setItem("userpass",btoa(passwordvalue) );
    resetInput();

}
    
  else {
    alert("Please fill all fields and select a gender.");
  }
});

function resetInput() {
  firstInput.value = "";
  secondInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
   genderarray.forEach(radio =>{
     radio.checked = false;
   })
   gendervalue = "";
    location.href= "TIK TAK TOE/login.html";
 }

