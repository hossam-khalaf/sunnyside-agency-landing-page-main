const bars = document.querySelector('.header__menu')
const nav = document.querySelector('.header__nav')

bars.addEventListener('click', () => {
	nav.classList.toggle('show')
})
