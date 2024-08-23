const NavLinks = document.querySelector(".navLinks")
const ButtonMenu = document.getElementById('menu')
const ButtonClose = document.getElementById('close')


ButtonMenu.addEventListener('click', () => {
    NavLinks.classList.add("mobile")
})

ButtonClose.addEventListener('click', ()=> {
    NavLinks.classList.remove("mobile")
})