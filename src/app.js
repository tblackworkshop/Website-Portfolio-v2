const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const switchElemement = document.querySelector('.switch')
var isDark = true

switchElemement.addEventListener('click', () => {
        var body = document.querySelector('body')
        var landing = document.getElementById("landing")
        var contactMe = document.getElementById("contact-me")
        var about = document.getElementById("about-me")
        var nav = document.getElementById("nav")
        var navList = document.getElementById("nav-list")

        body.classList.toggle('light')
        landing.classList.toggle("light-landing")
        contactMe.classList.toggle("light-contact-me")
        about.classList.toggle("light-about-me")
        nav.classList.toggle("light-nav")
        navList.classList.toggle("light-nav")
        
        toggleIsDark()
        
     })


function toggleButton() {
    navList.classList.toggle('show')
}

function toggleIsDark() {
    isDark = !isDark
}

hamburgerButton.addEventListener('click', toggleButton)

