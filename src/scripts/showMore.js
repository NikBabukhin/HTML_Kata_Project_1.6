export const brandsWrapper = document.getElementById('brands-wrapper-except-mobile')
export const buttonShowMore = document.getElementById('add-brands')
export const buttonShowMoreImage = buttonShowMore.querySelector('.show-more__button-image')

export const showMoreClickHandler = (showElement) => {
    const buttonSpan = buttonShowMore.querySelector('.show-more__button-text')
    buttonSpan.textContent = buttonSpan.textContent === 'Скрыть' ? 'Показать все' : 'Скрыть';
    buttonShowMoreImage.classList.toggle('show-more__button-image-reverse')
    console.log('toggled')
    showElement.classList.toggle('show')
}