//abre e fecha o menu quando clicar no icon
const nav = document.querySelector('#header nav')
const menu = {
    open(){
        document
            .querySelector('nav.container')
            .classList
            .add('show')
    },
    close(){
        document
            .querySelector('nav.container')
            .classList.remove('show')
    }
}

//quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li')
for (const link of links) {
    link.addEventListener('click', function (){
        nav.classList.remove('show')
    })
}

//mudar header da página quando der scroll (adicionar sombra)
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    }else {
        header.classList.remove('scroll')
    }
})

//Testimonials carousel slider, swiper library
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true

})

//Scroll Reveal: Mostrar elementos quando der scroll na pagina ****
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image, 
    #about .image, #about .text, 
    #services .header, #services .card,
    #testimonials h2, #testimonials .testimonials, 
    #contact .text, #contact .contact-links,
    footer .brand, footer .social
    `,
     { interval: 100 }
)

//BACK TO TOP BUTTON//
const arrowUpButton = document.querySelector('.arrow-up')
window.addEventListener('scroll', function() {
    if(window.scrollY >= 460) {
        arrowUpButton.classList.add('show')
    } else {
        arrowUpButton.classList.remove('show')
    }
})
