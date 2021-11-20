const wakeUp = () => {
  return "Acordando!!";
};

const breakfest = () => {
  return "Bora tomaar café!!";
};

const sleep = () => {
  return "Partiu dormir!!";
};

const doingThings = (func) => {
  return func();
};

console.log(doingThings(breakfest));
