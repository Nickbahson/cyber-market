(async () => {
    const menuItems = document.querySelectorAll('#main-menu li')

    menuItems.forEach( menuItem => {
        menuItem.addEventListener('click', () => {
            //alert('You clicked me, please link me to a page so I can display it\'s contents instead!')
        })
    })
})()