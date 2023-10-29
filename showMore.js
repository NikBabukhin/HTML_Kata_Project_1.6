const wrapper = document.getElementById('brands-wrapper-except-mobile')
const wrapperChild = wrapper.children
const buttonShow = document.getElementById('add-brands')
const imagesArr = ['lenovo', 'samsung', 'apple', 'acer', 'hp', 'Borsch']
const initialSlidesLength = 6;
const allProductsLength = 11;

const randomIndex = (maxLength) => Math.floor(Math.random() * maxLength)

const createNewCard = (element, imageSrc) => {
    const productCard = document.createElement('div')
    productCard.classList.add('company-card')
    productCard.classList.add('company-card--laptop')

    const cardLogo = document.createElement('div')
    cardLogo.classList.add('company-card__logo')
    cardLogo.innerHTML = `<img src="src/brands/${imageSrc}.png" alt="brand image">`

    const cardButton = document.createElement('button')
    cardButton.classList.add('header-button')
    cardButton.classList.add('go-background')
    cardButton.innerHTML = `<a href="https://github.com/NikBabukhin/" target="_blank"></a>`

    productCard.appendChild(cardLogo)
    productCard.appendChild(cardButton)

    element.appendChild(productCard)
}
const deleteNewCard = (element) => {
    const lastElement = element[element.length-1]
    lastElement.remove()
}

const showMore = (initialCount, finalCount, element) => {
    for (let i=initialCount; i<finalCount; i++) {
        createNewCard(element, imagesArr[randomIndex(imagesArr.length)])
    }
}
const showLess = (initialCount, finalCount) => {
    for (let i=0; i<finalCount-initialCount; i++) {
        deleteNewCard(wrapperChild)
    }
}

const onClickHandler = (initialSlidesLength, allProductsLength) => {
    const currentLength = wrapper.children.length;
    const buttonSpan = buttonShow.querySelector('.show-more__button-text')
    if (currentLength>=allProductsLength) {
        buttonSpan.textContent = 'Показать все';
        return showLess(initialSlidesLength, allProductsLength)
    } else {
        buttonSpan.textContent = 'Скрыть';
        return showMore(initialSlidesLength, allProductsLength, wrapper)
    }
}

for (let i=0;i<initialSlidesLength;i++) {
    createNewCard(wrapper, imagesArr[randomIndex(imagesArr.length)])
}


buttonShow.addEventListener('click', () => onClickHandler(initialSlidesLength, allProductsLength))
