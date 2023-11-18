import {showMoreClickHandler} from "./showMore";
import {blurArea, burgerCloseButton, burgerMenu, burgerOpenButton, closeBurger, openBurger} from "./burger";
import '/styles/style.scss';


const brandsWrapper = document.getElementById('brands-wrapper')
const buttonShowMoreBrands = document.getElementById('add-brands')
buttonShowMoreBrands.addEventListener('click', () => showMoreClickHandler(brandsWrapper, buttonShowMoreBrands, 'show', 'Показать все'))

const servicesWrapper = document.getElementById('service-wrapper')
const buttonShowMoreServices = document.getElementById('add-services')
buttonShowMoreServices.addEventListener('click', () => showMoreClickHandler(servicesWrapper, buttonShowMoreServices, 'show', 'Показать все'))


burgerMenu.addEventListener('click', (e) => {
    e.stopPropagation()
})
burgerCloseButton.addEventListener('click', closeBurger)
burgerOpenButton.addEventListener('click', openBurger)
blurArea.addEventListener('click', () => closeBurger())


const textForShowing = document.getElementById('hidden-text')
const buttonShowMoreText = document.getElementById('show-text-id')

buttonShowMoreText.addEventListener('click', ()=>showMoreClickHandler(textForShowing, buttonShowMoreText, 'show-full-text', 'Читать далее'))
