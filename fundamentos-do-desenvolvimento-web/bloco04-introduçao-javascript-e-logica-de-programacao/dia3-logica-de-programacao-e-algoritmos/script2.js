function calcular (base, altura){
 let area = base * altura;
 let perimetro = (2 * base) + (2 * altura);
 return {area:area, perimetro:perimetro}
}

//console.log(calcular(5,10));


let x = ['2', '7', '12', '38', '77'] 
let y = [78, 90, 6, 45, 3, 21]


function numbers(n){
  let pares = []
  let impares =[]
  for(let index = 0; index < n.length; index++){
    if(n[index]%2===0){
      pares.push(n[index]);
    }else{
      impares.push(n[index]);
    }
    }
    return {pares:pares.length, impares:impares.length}
  }
  console.log(numbers(x))
  console.log(numbers(y))
