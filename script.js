const apiKey = 'k3Z6TXPNkSfDiCZT9u1wD6tyMJzvWbXcUDJWFbr4XJo'

const unsplash_root = 'https://api.unsplash.com'

const container = document.querySelector('.container')
const gridContainer = document.querySelector('.grid-container')
const inptSearch = document.getElementById('inptSearch')
const btnSearch = document.getElementById('btnSearch')
const btnClose = document.getElementById('btnClose')
const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const pictureNumber = document.getElementById('pictureNumber')

let btnCloseHidden = true


async function getData(searchTxt) {
  
  const res = await fetch(`${unsplash_root}/search/photos?page=1&per_page=${pictureNumber.value}&query=${searchTxt}&client_id=${apiKey}`);

  const data = await res.json();
  gridContainer.innerHTML = ''

  for (let pic = 0; pic < pictureNumber.value; pic++) {
      const card = document.createElement('div')
      const img = document.createElement('img')
      card.classList.add('picture-card');
      img.classList.add('picture-class')
      // Math.random()<0.5?card.classList.add('portrait'):card.classList.add('landscape')
      img.src = data.results[pic].urls.regular
      card.appendChild(img)
      gridContainer.appendChild(card)
  }
}

btnSearch.addEventListener('click',()=>{

  getData(inptSearch.value)
})

inptSearch.addEventListener('input',()=>{
  if(inptSearch.value.length&&btnCloseHidden){
    btnCloseHidden = false
    btnClose.classList.remove('hide')
  }else if(!inptSearch.value.length){
    btnClose.classList.add('hide')
    btnCloseHidden = true
  }
})

inptSearch.addEventListener('keydown',(e)=>{
  if(e.code === 'Enter'){
    getData(inptSearch.value)
  }

})

function inputClear(){
  inptSearch.value = ''
  btnCloseHidden = true
  btnClose.classList.add('hide')
}

btnClose.addEventListener('click',()=>{inputClear()})

function initLoad(){
  getData('random')
}

pictureNumber.addEventListener('input',()=>{
  if(pictureNumber.value>20||pictureNumber.value<1){
    pictureNumber.value = 10

  }
})

arrowLeft.addEventListener('click',
()=>{
  if(pictureNumber.value>1) pictureNumber.value--
})

arrowRight.addEventListener('click',
()=>{
  if(pictureNumber.value<20) pictureNumber.value++
})

initLoad()
