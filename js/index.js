const selectCategoriesTitle = document.querySelector('.filter-bar__categories-title')
const selectCategories = document.getElementById('select')

// to open categories selection in the filter-bar
selectCategoriesTitle.addEventListener('click', () => {
    selectCategories.classList.toggle('d-none')
    selectCategoriesTitle.classList.toggle('border-bottom-none')
})

const nav = document.getElementsByTagName('nav')
// Make the nav bar fixed after a certain scroll
window.addEventListener('scroll', () => {
    let pageY = window.pageYOffset
    if(pageY > 100 && pageY < 300){
        nav[0].classList.add('nav--closed')
        nav[0].classList.add('nav--transition')
    }else if(pageY > 300){
        // nav[0].classList.remove('nav--transition')
        nav[0].classList.remove('nav--closed')
        nav[0].classList.add('nav--scroll')
    }else{
        nav[0].classList.remove('nav--transition')
        nav[0].classList.remove('nav--closed')
        nav[0].classList.remove('nav--scroll')
    }
})