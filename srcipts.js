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




