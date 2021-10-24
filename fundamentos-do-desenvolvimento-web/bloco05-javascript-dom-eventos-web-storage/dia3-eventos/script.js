function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


//EXERCICIO 1
let ul = document.querySelector('#days');

for(let index = 0; index < dezDaysList.length; index++){
  let li =  document.createElement('li');
  li.innerText = dezDaysList[index];
  li.className = 'day';
  ul.appendChild(li);

  if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
    li.className += ' holiday';
  }
  if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
    li.className += ' friday'
  }  
}


//EXERCÍCIO 2
function buttonHoliday (){
  let botao = document.createElement('button');
  botao.innerText = 'Feriados';
  botao.id = "btn-holiday";
  document.querySelector('.buttons-container').appendChild(botao);
} buttonHoliday('feriados')

//EXERCÍCIO 3
function feriadu() {
  let mudaCor = false;
  let botao = document.querySelector('#btn-holiday');
  botao.addEventListener('click', function() {
    let holidays = document.getElementsByClassName('holiday');
    if(!mudaCor){
      for(let i = 0; i < holidays.length ; i ++) {
        holidays[i].setAttribute('style', 'background-color: green')
      }
      mudaCor = true;
    } else {
      for(let i = 0; i < holidays.length ; i ++) {
        holidays[i].setAttribute('style', 'background-color: rgb(238,238,238)')
      }
      mudaCor = false;
    }
  }
  )
} feriadu()

//EXERCÍCIO 4
function sextou(){
  let botao = document.createElement('button');
  botao.innerText = 'Sexta-feira';
  botao.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(botao);
} sextou('sexta-feira')

//EXERCÍCIO 5
function buttonFriday (){
  let mudaTexto = false;
  let sextas = [];
  let botao = document.querySelector('#btn-friday');
  botao.addEventListener('click', function(){
    let sextou = document.getElementsByClassName('friday');
    if(!mudaTexto){
      for(let i = 0; i < sextou.length; i++) {
        sextas.push(sextou[i].textContent);
        sextou[i].innerText = 'SEXTOU!';
      } mudaTexto =true;
    } else {
      for(let i = 0; i < sextou.length; i++) {
        sextou[i].innerText = sextas[i];
      } mudaTexto = false;
    }
  })
} buttonFriday()

//EXERCÍCIO 6
function zoom1(){
  let dias = document.getElementsByClassName('day')
  for(let i = 0; i < dias.length; i ++){
    dias[i].addEventListener('mouseover', function(){
      dias[i].setAttribute('style', 'font-size: 30px')
  })}
}zoom1()

function zoom2(){
  let dias = document.getElementsByClassName('day')
  for(let i = 0; i < dias.length; i ++){
    dias[i].addEventListener('mouseout', function(){
      dias[i].setAttribute('style', 'font-size: 20px')
  })}
}zoom2()

//EXERCÍCIO 7
function task(tarefa){
  let span = document.createElement('span');
  span.innerText = tarefa;
  let myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(span);
} task('Estudar')

//EXERCÍCIO 8
let colorir = ''
let seleciona = false

function color(cor){
  let div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = cor;
  let myTasks = document.querySelector('.my-tasks');
  colorir = cor
  myTasks.appendChild(div)
}color('red')
  
//EXERCÍCIO 9
function clique(){
let div = document.querySelector('.task');
div.addEventListener('click',function(){
  if(div.className === 'task'){
    div.className = 'task selected';
    seleciona = true;
  }else{
    div.className = 'task';
    seleciona = false;
  }
}
)
} clique()

//EXERCICIO 10
function day(){
let dia = document.querySelectorAll('.day')[1];
 dia.addEventListener('click',function(){
 if(seleciona){
    dia.style.color = colorir
  }  
}
)
}day()