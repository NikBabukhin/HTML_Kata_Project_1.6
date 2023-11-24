export const showMoreClickHandler = (showElement, buttonElement, showClassName, buttonText) => {
    const buttonSpan = buttonElement.querySelector('span')
    buttonSpan.innerText = buttonSpan.innerText === 'Скрыть' ? buttonText : 'Скрыть';
    buttonElement.querySelector('.show-more__button-image').classList.toggle('show-more__button-image-reverse');
    showElement.classList.toggle(showClassName)
}