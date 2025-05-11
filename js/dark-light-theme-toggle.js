// dark light theme configure

const rootElm = document.documentElement
const darkLightToggle = document.querySelector('.dark-light-toggle')
const icon = document.querySelector('i')

darkLightToggle.addEventListener('mousedown', () => {
  changeTheme()
})

function changeTheme() {
  if (rootElm.className === 'light') {
    rootElm.classList.remove('light')
    rootElm.classList.add('dark')
    icon.classList.remove('fa-sun')
    icon.classList.add('fa-moon')
    console.log('changed to dark theme')
  } else {
    rootElm.classList.add('light')
    rootElm.classList.remove('dark')
    console.log('changed to light theme')
    icon.classList.remove('fa-moon')
    icon.classList.add('fa-sun')
  }
}