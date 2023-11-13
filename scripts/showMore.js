export const brandsWrapper = document.getElementById('brands-wrapper-except-mobile')
export const buttonShowMore = document.getElementById('add-brands')

export const showMoreClickHandler = (showElement) => {
    const buttonSpan = buttonShowMore.querySelector('.show-more__button-text')
    buttonSpan.textContent = buttonSpan.textContent === 'Скрыть' ? 'Показать все' : 'Скрыть';
    showElement.classList.toggle('show')
}