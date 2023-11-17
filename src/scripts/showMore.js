export const showMoreClickHandler = (showElement, buttonElement) => {
    const buttonSpan = buttonElement.querySelector('.show-more__button-text')
    buttonSpan.textContent = buttonSpan.textContent === 'Скрыть' ? 'Показать все' : 'Скрыть';
    buttonElement.querySelector('.show-more__button-image').classList.toggle('show-more__button-image-reverse');
    showElement.classList.toggle('show')
}