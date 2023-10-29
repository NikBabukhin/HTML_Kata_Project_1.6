const closeBurger = () => {
    burgerMenu.classList.remove('burger-open')
}

const openBurger = () => {
    burgerMenu.classList.add('burger-open')
}

const burgerMenu = document.getElementById("burger_menu")
const burgerCloseButton = document.getElementById("burger_close")
const burgerOpenButton = document.getElementById("burger_open")

burgerCloseButton.addEventListener('click', closeBurger)
burgerOpenButton.addEventListener('click', openBurger)




