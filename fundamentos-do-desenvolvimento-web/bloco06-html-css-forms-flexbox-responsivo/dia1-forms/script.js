let estados = ["RS", "SP", "SC","PR","AM","RJ"];
let botao = document.getElementById("input-estado");
for (let i = 0; i < estados.length; i++) {
  let opcoes = document.createElement("option");
  opcoes.innerText = estados[i];
  botao.appendChild(opcoes);
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
  event.preventDefault();
});

let input = document.getElementsByTagName("input");
for (let i = 0; i < input.length; i++) {
  input[i].setAttribute("required", "");
}

let nome = document.getElementById("name");
nome.setAttribute("maxlength", "40");

let email = document.getElementById("em");
email.setAttribute("maxlength", "50");

let cpf = document.getElementById("cpf");
cpf.setAttribute("maxlength", "11");

let adress = document.getElementById("adress");
adress.setAttribute("maxlength", "200");

let city = document.getElementById("city");
city.setAttribute("maxlength", "28");

let textArea = document.getElementById("resumo");
textArea.setAttribute("maxlength", "1000");

let cargo = document.getElementById("cargo");
cargo.setAttribute("maxlength", "40");

let descricao = document.getElementById("descricao");
descricao.setAttribute("maxlength", "500");

let secao = document.getElementById("todasDiv");
btn.addEventListener("click", function () {
  for (let i = 0; i < input.length; i++) {
    let div = document.createElement("div");
    div.innerText = input[i].value;
    secao.appendChild(div);
  }
});

