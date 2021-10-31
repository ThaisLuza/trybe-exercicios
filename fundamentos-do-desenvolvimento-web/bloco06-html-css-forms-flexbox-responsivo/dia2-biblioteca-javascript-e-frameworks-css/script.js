let estados = ["RS", "SP", "SC","PR","AM","RJ"];
let botao = document.getElementById("input-estado");
for (let i = 0; i < estados.length; i++) {
  let opcoes = document.createElement("option");
  opcoes.innerText = estados[i];
  botao.appendChild(opcoes);
}


document.getElementById('dataInicio').DatePickerX.init({format:'dd/mm/yyyy'});
document.getElementById('dataSaida').DatePickerX.init({format:'dd/mm/yyyy'});


validation.init("form");





