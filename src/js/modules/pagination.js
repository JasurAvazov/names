export function paginationFn() {
    const categoryPagination = document.querySelectorAll('.category .pagination__box-item')
    const alphabetPagination = document.querySelectorAll('.alphabet .pagination__box-item')

    for (let i = 0; i < categoryPagination.length; i++) {
        categoryPagination[i]?.addEventListener('click', function () {
            for (let j = 0; j < categoryPagination.length; j++) {
                categoryPagination[j].classList.remove('active')
            }
            categoryPagination[i].classList.add('active')
        })
    }

    for (let i = 0; i < alphabetPagination.length; i++) {
        alphabetPagination[i]?.addEventListener('click', function () {
            for (let j = 0; j < alphabetPagination.length; j++) {
                alphabetPagination[j].classList.remove('active')
            }
            alphabetPagination[i].classList.add('active')
        })
    }

}