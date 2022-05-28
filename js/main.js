function deslogado(){
    let desloga = document.getElementById("logado");
    desloga.classList.add("desativado");
}

function login(){
    let desaparece = document.getElementById("deslogado");

    desaparece.classList.add("desativado");

    let logado = document.getElementById("logado");

    logado.classList.remove("desativado");

    let name = prompt("Qual é o seu nome?", "Digite seu nome")

    if(name == null || name == ""){
        prompt("Por favor, digite seu nome", "Digite seu nome aqui")
    }else{
        alert(`Bem vindo ${name}!`)
    }
}

function deslogar(){
    let sair = document.getElementById("logado");

    sair.classList.add("desativado")

    let login = document.getElementById("deslogado");

    login.classList.remove("desativado");

    let retorno = confirm("Deseja realmente desconectar?")

    if(retorno == true){
        alert("Desconectando...")
    }    
}