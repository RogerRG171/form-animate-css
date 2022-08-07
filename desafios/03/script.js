const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", (event)=>{

    event.preventDefault();// impede a ação padrão do botão de submit (enviar)
    form.classList.add("form-hide");

});
