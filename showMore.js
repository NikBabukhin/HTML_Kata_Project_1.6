const brandsWrapper = document.getElementById('brands-wrapper-except-mobile')
const buttonShowMore = document.getElementById('add-brands')

const showMoreClickHandler = (showElement) => {
    showElement.classList.toggle('show')
}

buttonShowMore.addEventListener('click', ()=>showMoreClickHandler(brandsWrapper))