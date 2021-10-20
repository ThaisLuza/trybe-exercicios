let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//EXERCICIO 1
//console.log('Bem-vinda ' + info.personagem);


//EXERCICIO 2
info['recorrente']='Sim';
//console.log(info)


//EXERCICIO 3
// for(keys in info){
//  console.log(keys)
// }


//EXERCICIO 4
// for(keys in info){
//  //console.log(info[keys])
// }

//EXERCICIO 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

//CONCATENANDO
// console.log(info.personagem + ' e '+ info2.personagem)
// console.log(info.origem + ' e ' + info2.origem)
// console.log(info.nota +' e ' + info2.nota)
// if(info.recorrente === info2.recorrente){
//   console.log('Ambos recorrentes')
// }


//FUNÇÃO
// function text(text1, text2){
//   console.log(text1 + ' e ' + text2)
// }

// text(info.personagem, info2.personagem);
// text(info.origem, info2.origem);
// text(info.nota, info2.nota)
// if(info.recorrente === info2.recorrente){
//    console.log('Ambos recorrentes')
//  }


//FOR/IN
console.log('Bem vinda, ' + info.personagem);
console.log('------------');
for(let key in info) {
  console.log(key);
}
console.log('------------');
for (let key in info) {
  console.log(info[key]);
}
console.log('------------');
info.recorrente = 'Ambas recorrentes';
//delete info2.recorrente;
for (let index in info, info2){
  console.log(info[index] + ' e ' + info2[index]);
}
console.log('------------');

