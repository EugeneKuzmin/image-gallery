const apiKey = 'k3Z6TXPNkSfDiCZT9u1wD6tyMJzvWbXcUDJWFbr4XJo'

const unsplash_root = 'https://api.unsplash.com'

const images = document.querySelectorAll('[role="image"]')
const inptSearch = document.getElementById('inptSearch')
const btnSearch = document.getElementById('btnSearch')

async function getData() {
    const res = await fetch(`${unsplash_root}/search/photos?page=1&per_page=3&query=${inptSearch.value}&orientation=portrait&client_id=${apiKey}`);
    // const res = await fetch('https://api.unsplash.com/photos?per_page=3&query=water&orientation=portrait&client_id=k3Z6TXPNkSfDiCZT9u1wD6tyMJzvWbXcUDJWFbr4XJo');

    const data = await res.json();

    for (let pic = 0; pic < 3; pic++) {
        images[pic].src = data.results[pic].urls.small
    }
  }
  btnSearch.addEventListener('click',()=>{getData()})
