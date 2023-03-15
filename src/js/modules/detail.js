export function detailFn() {
    const noliked = document.querySelector('.noliked');
    const liked = document.querySelector('.liked');

    noliked.addEventListener('click', function () {
        noliked.classList.remove('active')
        liked.classList.add('active')
    })

    liked.addEventListener('click', function () {
        liked.classList.remove('active')
        noliked.classList.add('active')
    })
}
