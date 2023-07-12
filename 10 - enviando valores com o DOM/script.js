function register(element){

    const username = element.children.username.value
    const password = element.children.password.value
    const passwordconfirmation = element.children.passwordconfirmation.value

    if(password === passwordconfirmation){

        alert("Usuário: " + username + " Registrado!")

    }else{

        alert("senhas não conferem")

    }

}