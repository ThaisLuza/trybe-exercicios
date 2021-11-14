const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//1
const turno = (lesson, key, value) => {
  lesson[key] = value;
};
turno(lesson2, "turno", "noite");

//2
const lista = (object) => {
  console.log(Object.keys(object));
};

//3
const tam = (object) => {
  console.log(Object.keys(object).length);
};

//4
const valor = (object) => {
  console.log(Object.values(object));
};

//5
const allLessons = {};
Object.assign(allLessons, { lesson1, lesson2, lesson3 });
//console.log(allLessons);

//6
const students = () => {
  let soma = (allLessons.lesson1.numeroEstudantes) + (allLessons.lesson2.numeroEstudantes) + (allLessons.lesson3.numeroEstudantes)
  return soma
} 
students()

//7
const getValueByNumber = (object,index) => 
Object.values(object)[index];

//8
const verificarPar = (obj, key, value) => {
  if(obj[key] && obj[key] === value){
    return true
  }
  return false
}

