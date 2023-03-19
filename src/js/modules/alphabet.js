export function abcFn() {
    const abcItem = document.querySelectorAll('.alphabet__list-item')
    const categoryItem = document.querySelectorAll('.category__list-item')

    for (let i = 0; i < abcItem.length; i++) {
        abcItem[i]?.addEventListener('click', function () {
            for (let j = 0; j < abcItem.length; j++) {
                abcItem[j].classList.remove('active')
            }
            abcItem[i].classList.add('active')
        })
    }

    for (let i = 0; i < categoryItem.length; i++) {
        categoryItem[i]?.addEventListener('click', function () {
            for (let j = 0; j < categoryItem.length; j++) {
                categoryItem[j].classList.remove('active')
            }
            categoryItem[i].classList.add('active')
        })
    }

}