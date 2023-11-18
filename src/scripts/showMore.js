export const showMoreClickHandler = (showElement, buttonElement, showClassName, buttonText) => {
    const buttonSpan = buttonElement.querySelector('.show-more__button-text')
    buttonSpan.textContent = buttonSpan.textContent === 'Скрыть' ? buttonText : 'Скрыть';
    buttonElement.querySelector('.show-more__button-image').classList.toggle('show-more__button-image-reverse');
    showElement.classList.toggle(showClassName)
}