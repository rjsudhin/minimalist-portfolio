// dark light theme configure

const rootElm = document.documentElement
rootElm.classList.add('light')
const darkLightToggle = document.querySelector('.dark-light-toggle')
const icon = document.querySelector('i')

darkLightToggle.addEventListener('mousedown', () => {
  changeTheme()
})

function changeTheme() {
  if (rootElm.className === 'light') {
    rootElm.classList.remove('light')
    rootElm.classList.add('dark')
    icon.classList.remove('fa-moon')
    icon.classList.add('fa-sun')
  } else {
    rootElm.classList.remove('dark')
    rootElm.classList.add('light')
    icon.classList.remove('fa-sun')
    icon.classList.add('fa-moon')
  }
}