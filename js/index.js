const selectCategoriesTitle = document.querySelector('.filter-bar__categories-title')
const selectCategories = document.getElementById('select')

// to open categories selection in the filter-bar
selectCategoriesTitle.addEventListener('click', () => {
    console.log("Clicked");
    selectCategories.classList.toggle('d-none')
})

const nav = document.getElementsByTagName('nav')

window.addEventListener('scroll', () => {
    let pageY = window.pageYOffset
    if(pageY > 100 && pageY < 500){
        nav[0].classList.add('nav--closed')
    }else if(pageY > 500){
        nav[0].classList.remove('nav--closed')
        nav[0].classList.add('nav--scroll')
    }else{
        nav[0].classList.remove('nav--closed')
        nav[0].classList.remove('nav--scroll')
    }
})