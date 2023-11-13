const closeBurger = () => {
    burgerMenu.classList.remove('burger-open')
    blurArea.classList.remove('aside--open')
}
const openBurger = () => {
    burgerMenu.classList.add('burger-open')
    blurArea.classList.add('aside--open')
}


const blurArea = document.querySelector('.aside')
const burgerMenu = document.getElementById("burger_menu")
const burgerCloseButton = document.getElementById("burger_close")
const burgerOpenButton = document.getElementById("burger_open")


burgerMenu.addEventListener('click', (e) => {
    e.stopPropagation()
})
burgerCloseButton.addEventListener('click', closeBurger)
burgerOpenButton.addEventListener('click', openBurger)
blurArea.addEventListener('click', () => closeBurger())





