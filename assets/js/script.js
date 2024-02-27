const form = document.getElementById("form");
const iuser = document.getElementById("iuser");
const ipwd = document.getElementById("ipwd");

form.addEventListener("submit",(event) =>{
  event.preventDefault(); //Evita que a pagina seja recarregada por padrao. 
  checkForm();
})

iuser.addEventListener("blur", () => {
  checkInputUsername();
})

ipwd.addEventListener("blur", () => {
  checkInputPassword();
})

function checkInputUsername(){
  const usernameValue = iuser.value;

  if (usernameValue === ""){
    errorInput(iuser, "Preencha um username!")
  }else{
    const formItem = iuser.parentElement;
    formItem.className = "campo"
  }
 console.log(iuser.value)
}

function checkInputPassword(){
  const passwordValue = ipwd.value;

  if ((passwordValue === "" || passwordValue.length < 8)){
    errorInput(ipwd, "Preencha uma senha valida!")
  }else{
    const formItem = ipwd.parentElement;
    formItem.className = "campo"
  }
 console.log(ipwd.value)
}

function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "campo error"

}

function checkForm(){
  checkInputUsername();
  checkInputPassword();
  
  const formItems = form.querySelectorAll(".campo")

  const isValid = [...formItems].every((item) => {
    return item.className === "campo"
  })

  if (isValid){
    alert("LOGIN EFETUADO COM SUCESSO!")
  }
}
    