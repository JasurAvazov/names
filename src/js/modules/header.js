export function headerFn() {
    const shareBtn = document.querySelector('.header__share-btn');
    const shareList = document.querySelector('.header__share-list');
    const menuBtn = document.querySelector('.header__menu-btn')
    const menuList = document.querySelector('.header__menu-more')
    const filter = document.querySelector('.filter');

    shareBtn.addEventListener('click', function () {
        shareList.classList.toggle('active');
        filter.classList.toggle('active')
    })

    menuBtn.addEventListener('click', function () {
        menuList.classList.toggle('active');
        filter.classList.toggle('active')
    })


    filter.addEventListener('click', function () {
        shareList.classList.remove('active')
        menuList.classList.remove('active')
        filter.classList.remove('active')
    })

}