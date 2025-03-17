let form = document.querySelector(' #loginregistrations');
let loginemail  = document.querySelector('#email');
let loginpassword = document.querySelector('#password');
let remember = document.querySelector('.remember');
let result = document.querySelector("#result");
let para = document.querySelector(".para");
let button = document.querySelector(".btn")




form .addEventListener('submit' ,(event) => {

    event.preventDefault();

    
   let email = loginemail.value;
   let password = loginpassword.value;
 

  let localemail = localStorage.getItem("email");
  let localpassword = atob(localStorage.getItem("userpass")); 

   if(email === localemail && password === localpassword){
   
          location.href = "index.html";}




else{
    if(email !== localemail){
      
   
      result.textContent = "This email not exists please sign in with your email"
      result.style.color = "red";
     
   }
   
   if(password !== localpassword){
    para.textContent = "Is not a  correct password  you need forget password";
    para.style.color = "red";
} 

          }});