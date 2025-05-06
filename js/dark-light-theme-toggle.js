// dark light theme configure

const rootElm = document.documentElement
rootElm.classList.add('light')
const darkLightToggle = document.querySelector('.dark-light-toggle')


darkLightToggle.addEventListener('mousedown', () => {
  changeTheme()
})



function changeTheme() {
  let buttonText = ''
  if (rootElm.className === 'light') {
    rootElm.classList.remove('light')
    rootElm.classList.add('dark')
    buttonText = 'light'
  } else {
    rootElm.classList.remove('dark')
    rootElm.classList.add('light')
    buttonText = 'dark'
  }

  // change the text of button in with it
  darkLightToggle.textContent = buttonText
}