export function headerFn() {
    const shareBtn = document.querySelector('.header__share-btn');
    const shareList = document.querySelector('.header__share-list');
    const filter = document.querySelector('.filter');

    const langBtn = document.querySelector('#langBtn')
    const lang = document.querySelector('.lang')



    shareBtn.addEventListener('click', function () {
        shareList.classList.toggle('active');
        filter.classList.toggle('active')
    })

    filter.addEventListener('click', function () {
        shareList.classList.remove('active')
        filter.classList.remove('active')
        lang.classList.remove('active')
    })


    langBtn.addEventListener('click', function(){
        lang.classList.toggle('active')
        filter.classList.toggle('active')
    })
}