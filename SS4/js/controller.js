const controller = {};

controller.register = (data) => {
  // Kiểm tra những lỗi gì??

  if (data.firstName == "") {
    document.getElementById("first-name-error").
      innerText = `Please input first name`;
  }
  else {
    document.getElementById("first-name-error").
      innerText = ``;
  }

  if (data.lastName == "") {
    document.getElementById("last-name-error").
      innerText = `Please input last name`;
  }
  else {
    document.getElementById("last-name-error").
      innerText = ``;
  }


  if (data.email == "") {
    document.getElementById("email-error").
      innerText = `Please input email`;
  }
  else {
    document.getElementById("email-error").
      innerText = ``;
  }

  if (data.password == "") {
    document.getElementById("password-error").
      innerText = `Please input password`;
  }
  else {
    document.getElementById("password-error").
      innerText = ``;
  }


  if (data.confirmPassword == "") {
    document.getElementById("confirm-password-error").
      innerText = `Please input  confirm password`;
  }
  else {
    document.getElementById("confirm-password-error").
      innerText = ``;
  }



/**
 * toán tử ba ngôi giống if else 
 */

  data.password !== data.confirmPassword?
  document.getElementById("confirm-password-error").innerText=`confirm password is error`:
  document.getElementById("confirm-password-error").innerText=''

//// taonj usseer
if (data.firstName!== "" && data.lastName!=="" &&
data.email!= "" &&
data.password!="" &&
data.confirmPassword !=""&&
data.password== data.confirmPassword

){
    model.register(data);
}




}


controller.login=(dataLogin)=>{
  if(dataLogin.email ===""){
    document.getElementById("email-error").innerText="please in input email"
  }
  else{
    document.getElementById("email-error").innerText=""
  }
  if(dataLogin.password ===""){
    document.getElementById("password-error").innerText="please in input password"
  }
  else{
    document.getElementById("password-error").innerText=""
  
}
if(dataLogin.email !=="" && dataLogin.password !==""){
  model.login(dataLogin);
}
}
