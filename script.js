const apiKey = 'k3Z6TXPNkSfDiCZT9u1wD6tyMJzvWbXcUDJWFbr4XJo'

const unsplash_root = 'https://api.unsplash.com'

const gridContainer = document.querySelector('.grid-container')
const inptSearch = document.getElementById('inptSearch')
const btnSearch = document.getElementById('btnSearch')
const btnClose = document.getElementById('btnClose')

async function getData() {
    const res = await fetch(`${unsplash_root}/search/photos?page=1&per_page=3&query=${inptSearch.value}&orientation=portrait&client_id=${apiKey}`);

    const data = await res.json();

    for (let pic = 0; pic < 3; pic++) {
        const card = document.createElement('div')
        const img = document.createElement('img')
        card.classList.add('picture-card');
        card.classList.add('stacked');
        img.src = data.results[pic].urls.small
        card.appendChild(img)
        gridContainer.appendChild(card)
    }
  }
  btnSearch.addEventListener('click',()=>{getData()})

  function inputClear(){
    inptSearch.value = ''
  }

  btnClose.addEventListener('click',()=>{inputClear()})
