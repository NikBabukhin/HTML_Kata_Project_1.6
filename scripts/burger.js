export const closeBurger = () => {
    burgerMenu.classList.remove('burger-open')
    blurArea.classList.remove('aside--open')
}
export const openBurger = () => {
    burgerMenu.classList.add('burger-open')
    blurArea.classList.add('aside--open')
}


export const blurArea = document.querySelector('.aside')
export const burgerMenu = document.getElementById("burger_menu")
export const burgerCloseButton = document.getElementById("burger_close")
export const burgerOpenButton = document.getElementById("burger_open")






