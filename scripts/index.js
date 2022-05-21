const icon = document.querySelector('.mobile_menu_icon')
const icon_toggle = document.querySelector('.mobile_menu_toggle')
const mobile_menu = document.querySelector('.nav_menu')

icon.addEventListener('click', ()=>{
    icon_toggle.classList.toggle('active')
    mobile_menu.classList.toggle('active')
})

