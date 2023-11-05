const btnMenu = document.getElementById('btn-menu')
const menu = document.getElementById('menu')

btnMenu.addEventListener('click', ()=> {
    btnMenu.classList.toggle('toggleBtnMenu')

    if(btnMenu.classList.contains('toggleBtnMenu')) {
        btnMenu.innerHTML = '<i class="fa-solid fa-x"></i>';
    }else {
        btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
    
    menu.classList.toggle('toggleMenu')
})