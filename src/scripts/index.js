import {brandsWrapper, buttonShowMore, showMoreClickHandler} from "./showMore";
import {blurArea, burgerCloseButton, burgerMenu, burgerOpenButton, closeBurger, openBurger} from "./burger";
import '/styles/style.scss';


buttonShowMore.addEventListener('click', ()=>showMoreClickHandler(brandsWrapper))


burgerMenu.addEventListener('click', (e) => {
    e.stopPropagation()
})
burgerCloseButton.addEventListener('click', closeBurger)
burgerOpenButton.addEventListener('click', openBurger)
blurArea.addEventListener('click', () => closeBurger())



