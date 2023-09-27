const images = document.querySelectorAll('[role="image"]')
const inptSearch = document.getElementById('inptSearch')
const btnSearch = document.getElementById('btnSearch')

async function getData() {
    const res = await fetch(`https://api.unsplash.com/photos?per_page=3&query=${String(inptSearch.value).trim}&orientation=portrait&client_id=k3Z6TXPNkSfDiCZT9u1wD6tyMJzvWbXcUDJWFbr4XJo`);
    const data = await res.json();
    for (let pic = 0; pic < 3; pic++) {
        images[pic].src = data[pic].urls.small
    }
  }
  btnSearch.addEventListener('click',()=>{getData()})
