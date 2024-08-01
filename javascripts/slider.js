document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.href === window.location.href) {
    link.classList.add("active");
    }
    });
    
    document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelector('.nav-2').classList.add('open');
    })
    document.querySelector('.close').addEventListener('click',()=>{
    document.querySelector('.nav-2').classList.remove('open');
    })



let items = document.querySelectorAll('.slider .list .item');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let preview = document.querySelectorAll('.preview .item');

let countItems = items.length;
let itemActive = 0;

 next.onclick = function(){
    itemActive += 1;
    if(itemActive >= countItems){
        itemActive = 0;
    }
    showSlider();
 }
 prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItems - 1;
    }
    showSlider();
 }
 const showSlider = () => {
    let oldItemActive = document.querySelector('.slider .list .item.active');
    let oldPreview = document.querySelector('.preview .item.active');
    oldItemActive.classList.remove('active');
    oldPreview.classList.remove('active');

    items[itemActive].classList.add('active');
    preview[itemActive].classList.add('active');
 }
preview.forEach((prevItem,index)=>{
    prevItem.addEventListener('click',()=>{
        itemActive = index;
        showSlider();
    })
})