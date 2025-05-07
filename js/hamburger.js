const hamburger = document.querySelector('#hamburger')
const navBar = document.querySelector('#nav-bar')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open') // toggle x icon
  navBar.classList.toggle('active')   // toggle menu
})