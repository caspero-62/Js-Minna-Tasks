let logo = document.querySelector('.logo')
let nav = document.querySelector('nav')
let hamburger = document.querySelector('.hamburger')
let links = document.querySelector('ul')

hamburger.addEventListener('click', () => {
    links.classList.toggle('open');
    setTimeout(() => {
        nav.classList.toggle('none');
    }, 100)
    setTimeout(() => {
        logo.classList.toggle('none');
    }, 300)
})