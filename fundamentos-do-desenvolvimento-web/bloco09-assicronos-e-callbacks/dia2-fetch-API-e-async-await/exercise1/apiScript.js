// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
let piada = document.getElementById('piada')

const fetchJoke = () => {
    const obj ={
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };
  fetch(API_URL,obj)
  .then(response => response.json())
  .then(data => piada.innerHTML = data.joke)
};

window.onload = () => fetchJoke();