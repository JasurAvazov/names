export function likeFn() {
    const noliked = document.querySelector('.detail .noliked');
    const liked = document.querySelector('.detail .liked');

    noliked?.addEventListener('click', function () {
        noliked.classList.remove('active')
        liked.classList.add('active')
    })

    liked?.addEventListener('click', function () {
        liked.classList.remove('active')
        noliked.classList.add('active')
    })


    const nolikedCategory = document.querySelectorAll('.category .noliked');
    const likedCategory = document.querySelectorAll('.category .liked');

    for (let i = 0; i < nolikedCategory.length; i++) {
        nolikedCategory[i]?.addEventListener('click', function () {
            nolikedCategory[i].classList.remove('active')
            likedCategory[i].classList.add('active')
        })
        likedCategory[i]?.addEventListener('click', function () {
            likedCategory[i].classList.remove('active')
            nolikedCategory[i].classList.add('active')
        })
    }

}
