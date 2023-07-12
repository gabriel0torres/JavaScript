function register(ev){

    console.log(ev)

    const sectionelement = ev.currentTarget.parentNode
    const username = sectionelement.children.username.value
    const password = sectionelement.children.password.value
    const passwordconfirmation = sectionelement.children.passwordconfirmation.value

    if(password === passwordconfirmation){

        alert("Usuário: " + username + " Registrado!")

    }else{

        alert("senhas não conferem")

    }

}

const botao = document.getElementById("botao")

botao.addEventListener("click", register)

function removelistener(){

    botao.removeEventListener("click", register)
    alert("evento removido")

}

botao.addEventListener("mouseover", function(ev){

    console.log(ev.currentTarget)

})

