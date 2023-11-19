export const closeBurger = () => {
    burgerMenu.classList.remove('burger-open')
    blurArea.classList.remove('aside--open')
    document.querySelector('.main-content-wrapper').classList.remove('no-scroll')
    document.querySelector('.main').classList.remove('no-scroll')
    document.querySelector('body').classList.remove('no-scroll')
}
export const openBurger = () => {
    burgerMenu.classList.add('burger-open')
    blurArea.classList.add('aside--open')
    document.querySelector('.main-content-wrapper').classList.add('no-scroll')
    document.querySelector('.main').classList.add('no-scroll')
    document.querySelector('body').classList.add('no-scroll')
}


export const blurArea = document.querySelector('.aside')
export const burgerMenu = document.getElementById("burger_menu")
export const burgerCloseButton = document.getElementById("burger_close")
export const burgerOpenButton = document.getElementById("burger_open")






