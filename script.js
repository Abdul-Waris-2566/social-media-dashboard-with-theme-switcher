const switchInput = document.querySelector('.switch__input')
const switchEl = document.querySelector('.switch__wrapper')
const arrowUp = document.querySelectorAll('.arrow-up')
const arrowDown = document.querySelectorAll('.arrow-down')

// Switch themes
const switchTheme = function (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
}

// Adding event listener for toggling themes
switchInput.addEventListener('change', switchTheme)

// Changing color of the text elements based on the arrows' color
arrowUp.forEach((arrow) => {
  arrow.nextElementSibling.style.color = 'hsl(163, 72%, 41%)'
})
arrowDown.forEach((arrow) => {
  arrow.nextElementSibling.style.color = 'hsl(356, 69%, 56%)'
})

// Setting local Storage for themes

const currentTheme = localStorage.getItem('theme')

console.log(currentTheme)

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)
}

if (currentTheme === 'dark') {
  switchInput.checked = true
}
