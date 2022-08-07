const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", (event)=>{

    event.preventDefault();// impede a ação padrão do botão de submit (enviar)
    
    //desconstroi ... document seleciona todos input block, e inseri num array
    const fields = [...document.querySelectorAll(".input-block input")];

    fields.forEach(field =>{
        if(!field.value){
            form.classList.add("validade-error");
        }
    });

    const formError = document.querySelector(".validade-error");
    if(formError){
        formError.addEventListener("",(event)=>{
            if(event.animationName === "nono"){
                formError.classList.remove("validade-error");
            }
        });
    }else{
        form.classList.add("form-hide");
    }
    
   

});

form.addEventListener("animationstart", (event)=>{
    if(event.animationName === "down")
        document.querySelector("body").style.overflow = "hidden";
});

form.addEventListener("animationend", (event)=>{
    if(event.animationName === "down")
        form.style.display = "none";
        document.querySelector("body").style.overflow = "none";
});