var nome
var senha

function cadastrar() {
    nome = document.getElementById('emailC').value
    senha = document.getElementById('senhaC').value

    localStorage.setItem(nome, senha)
    alert("Cadastrou")

}

function entrar() {

    nome = document.getElementById('email').value
    senha = document.getElementById('senha').value

    alert(nome)

    if(senha == localStorage.getItem(nome)) {
        window.location.href = "index3.html"
    } else {
        window.location.href = "index2.html"
    }

    //if (localStorage.getItem("nome") == localStorage.getItem("Cnome") && localStorage.getItem("senha") == localStorage.getItem("Csenha")) {
       // window.location.href = "index3.html";
   // }
    //else{
     //   window.location.href = "index2.html";
   // }

}


