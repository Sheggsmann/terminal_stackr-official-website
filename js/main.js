function toggleNavigation() {
    const navBar = document.querySelector('.nav')
    const navLinks = navBar.querySelectorAll('a')
    const navToggle = document.querySelector('.nav-toggle')
    navToggle.addEventListener('click', () => {
        navBar.classList.toggle('show')
    })
    navLinks.forEach(link => link.addEventListener('click', () => {
        navBar.classList.remove('show')
    }))
}

toggleNavigation()


function stickyNav() {
    const navBar = document.querySelector('#nav-fix')
    window.addEventListener('scroll', () => {
        let vY = window.scrollY
        if (vY > 100) {
            navBar.classList.add('sticky-area')
        } else if (vY < 40) {
            navBar.classList.remove('sticky-area')
        }
    })
}

stickyNav()