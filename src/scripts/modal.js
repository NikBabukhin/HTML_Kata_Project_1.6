export const openModalWindow = (modal, openClassName) => {
    modal.classList.add(openClassName)
    document.querySelector('.main-content-wrapper').classList.add('no-scroll')
    document.querySelector('.main').classList.add('no-scroll')
    document.querySelector('body').classList.add('no-scroll')
}

export const closeModalWindow = (modal, openClassName) => {
    modal.classList.remove(openClassName)
    document.querySelector('.main-content-wrapper').classList.remove('no-scroll')
    document.querySelector('.main').classList.remove('no-scroll')
    document.querySelector('body').classList.remove('no-scroll')
}
