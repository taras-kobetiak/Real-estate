//swiper
const swiper = new Swiper('.slider-main-block', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.tabs-deals__item')

document.addEventListener('click', function (elem) {
    const targetElement = elem.target;

    if (targetElement.closest('.tabs-deals__button')) {
        tabNavItems.forEach((elem, index) => {
            if (elem === targetElement) {
                elem.classList.add('active');
                tabItems[index].classList.add('active')
            } else {
                elem.classList.remove('active');
                tabItems[index].classList.remove('active');
            }
        })
    }
})


