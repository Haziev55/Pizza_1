const filterBox = document.querySelectorAll('.tovar, h1');
const filter = document.querySelector('.filteres'); 

filter.addEventListener('click', event => {
    if(event.target.tagName !== 'LI') return false;
    filter.classList.add('active');
    let filterClass = event.target.dataset['color'];

    filterBox.forEach(elem =>{
        elem.style.display = "flex";
        if(!elem.classList.contains(filterClass)){
            elem.style.display = "none";
        }
    });
});