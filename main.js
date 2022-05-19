
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





const form = document.getElementById("form");
const email = document.getElementById("email");
const vorname = document.getElementById("vorname");
const nachname = document.getElementById("nachname");
const radio = document.getElementById("radio");
const radioGender1 = document.getElementById("radio-gender1");
const radioGender2 = document.getElementById("radio-gender2");
const alarm = document.getElementById("alarm");

//window.location.href="/....html";

form.addEventListener('submit', (e) => {
  e.preventDefault();
   
  if (checkInputs()){
    var vorname = document.getElementById("vorname");
    var nachname = document.getElementById("nachname");
    document.open();
    document.write("<h1 class = 'vorname'>");
    document.write("Willkommen " + vorname.value + " " + nachname.value);
    document.write("</h1>")
    document.write("<link rel ='stylesheet' href='style.css' />");
    document.write("</style>");
    document.close();   
  }
});
function checkInputs() {
  
  let isEmailValid = false;
  let isVornameValid = false;
  let isNachnameValid = false;
  let isRadioValid = false;
  let isRadioGenderValid = false;

  const emailValue = email.value.trim();
  const vornameValue = vorname.value.trim();
  const nachnameValue = nachname.value.trim();

  if(emailValue === ''){
    setErrorFor(email);
  }
  else if(!isEmail(emailValue)) {
    setErrorFor(email);
  }
  else {
    setSuccessFor(email);
    isEmailValid =true;
  }
  if(vornameValue === ''){
    setErrorFor(vorname);
  }
  else {
    setSuccessFor(vorname);
    isVornameValid =true;
  }
  if(nachnameValue === ''){
    setErrorFor(nachname);
  }
  else {
    setSuccessFor(nachname);
    isNachnameValid =true;
  }
  if(!document.getElementById('radio').checked){
    isRadioValid =false;  
  }
  else {  
    isRadioValid =true;
  }
  if(!(document.getElementById('radio-gender2').checked ||document.getElementById('radio-gender1').checked )){
    isRadioGenderValid =false;
    alarm.style.display="block";
    }
  else {
    
    isRadioGenderValid =true; 
  }
  return isEmailValid && isNachnameValid && isVornameValid && isRadioValid && isRadioGenderValid;
}
function setErrorFor(input,message){
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error"
}
function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
function isEmail(email){
  return email.includes("@");
}




