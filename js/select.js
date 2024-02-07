const select = document.querySelector('.catalog__sort-select')
const selectList = document.querySelector('.catalog__sort-select-list')
const catalogSelectActive = document.querySelector('.catalog__sort-select-active')

select.addEventListener('click', () => {
    selectList.classList.toggle('catalog__sort-select-list-active')
})

selectList.addEventListener('click', (e) => {
    catalogSelectActive.innerText = e.target.innerText
})
