const wrapper = document.getElementById('brands-wrapper-except-mobile')
const wrapperChild = wrapper.children
const buttonAdd = document.getElementById('add')
const buttonDelete = document.getElementById('delete')
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
    if (currentLength>=allProductsLength) {
        return showLess(initialSlidesLength, allProductsLength)
    } else {
        return showMore(initialSlidesLength, allProductsLength, wrapper)
    }
}

for (let i=0;i<initialSlidesLength;i++) {
    createNewCard(wrapper, imagesArr[randomIndex(imagesArr.length)])
}


buttonAdd.addEventListener('click', () => onClickHandler(initialSlidesLength, allProductsLength))
