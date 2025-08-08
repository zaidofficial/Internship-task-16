//Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 200) {
        backToTop.style.display = 'block';
    }
    else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', ()=>{
    window.scrollTo({ top:0,behavior:'smooth'})
});

// Fade-in effect on scroll
const items = document.querySelectorAll('.timeline-item');

function showItems(){
    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if(itemTop < window.innerHeight - 100)
        {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)"
        }
    })
}

items.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = "translateY(30px)";
    item.style.transition = "all 0.6s ease";
});

window.addEventListener('scroll', showItems);
showItems();