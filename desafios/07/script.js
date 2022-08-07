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

/* background squares */

const ulSquares = document.querySelector("ul.squares");

for(let i =0; i < 11; i++){
    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 120));
    const position = random(1,99);
    const delay = random(5, 0.1);
    const duration = random(24 , 12);


    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;

    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    ulSquares.appendChild(li);
}