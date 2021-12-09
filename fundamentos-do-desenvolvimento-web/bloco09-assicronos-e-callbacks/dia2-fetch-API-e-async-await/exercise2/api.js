
const API_COIN = 'https://api.coincap.io/v2/assets'
const ol = document.getElementById('coins-list')


const arrCoin = () => {
  fetch(API_COIN).then(response => response.json())
  .then(result => {
    result.data.map((item, index)=>{
      const li = document.createElement('li')
      li.innerText = `${item.name} ${(item.symbol)}: ${item.priceUsd}`
      index < 10 && ol.appendChild(li)
  })
})
.catch(err => console.log(`o erro esta aqui ${err}`))
} 

arrCoin()


