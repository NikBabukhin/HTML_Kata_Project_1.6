import {showMoreClickHandler} from "./showMore";
import {blurArea, burgerCloseButton, burgerMenu, burgerOpenButton, closeBurger, openBurger} from "./burger";
import '/styles/style.scss';

const brandsWrapper = document.getElementById('brands-wrapper')
const buttonShowMoreBrands = document.getElementById('add-brands')

const servicesWrapper = document.getElementById('service-wrapper')
const buttonShowMoreServices = document.getElementById('add-services')


buttonShowMoreBrands.addEventListener('click', () => showMoreClickHandler(brandsWrapper, buttonShowMoreBrands))
buttonShowMoreServices.addEventListener('click', () => showMoreClickHandler(servicesWrapper, buttonShowMoreServices))


burgerMenu.addEventListener('click', (e) => {
    e.stopPropagation()
})
burgerCloseButton.addEventListener('click', closeBurger)
burgerOpenButton.addEventListener('click', openBurger)
blurArea.addEventListener('click', () => closeBurger())



