import {showMoreClickHandler} from "./showMore";
import {blurArea, burgerCloseButton, burgerMenu, burgerOpenButton, closeBurger, openBurger} from "./burger";
import '/styles/style.scss';
import {closeModalWindow, openModalWindow} from "./modal";


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


const modalFeedback = document.getElementById('modal-feedback');
const modalCall = document.getElementById('modal-call');
const openCallArrayButtons = document.querySelectorAll('.call-background')
const openFeedbackArrayButtons = document.querySelectorAll('.chat-background')
const modalCloseCall = document.getElementById('modal-close-call')
const modalCloseFeedback = document.getElementById('modal-close-feedback')
const modalsBlurArray = document.querySelectorAll('.modal')

modalFeedback.addEventListener('click',e=>e.stopPropagation())
modalCall.addEventListener('click',e=>e.stopPropagation())

for (let i=0;i<modalsBlurArray.length;i++) {
    modalsBlurArray[i].querySelector('.modal__content').addEventListener('click',e=>e.stopPropagation())
    modalsBlurArray[i].addEventListener('click', ()=>{
        closeModalWindow(modalsBlurArray[i], 'modal-open')
    })
}

for (let i=0;i<openCallArrayButtons.length;i++) {
    openCallArrayButtons[i].addEventListener('click', ()=> {
        closeBurger()
        openModalWindow(modalCall, 'modal-open')
    })
}
for (let i=0;i<openFeedbackArrayButtons.length;i++) {
    openFeedbackArrayButtons[i].addEventListener('click', ()=> {
        closeBurger()
        openModalWindow(modalFeedback, 'modal-open')
    })
}

modalCloseCall.addEventListener('click', ()=>{
    console.log('close call')
    closeModalWindow(modalCall, 'modal-open')
})
modalCloseFeedback.addEventListener('click', ()=>{
    console.log('close feedback')
    closeModalWindow(modalFeedback, 'modal-open')
})



