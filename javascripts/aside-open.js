
// Script to make nav link color yellow on active
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
document.querySelector('.plus1').addEventListener('click',()=>{
document.querySelector('.aside-2-1').classList.toggle('aside-open');
})
document.querySelector('.plus2').addEventListener('click',()=>{
document.querySelector('.aside-2-2').classList.toggle('aside-open');
})
document.querySelector('.plus3').addEventListener('click',()=>{
document.querySelector('.aside-2-3').classList.toggle('aside-open');
})
document.querySelector('.plus4').addEventListener('click',()=>{
document.querySelector('.aside-2-4').classList.toggle('aside-open');
})
// Common function to handle the click event
const handlePlusClick = (e) => {
const target = e.target;
if (target.classList.contains('fa-plus')) {
target.classList.remove('fa-plus');
target.classList.add('fa-minus');
target.parentElement.style.backgroundColor = 'yellow';
target.parentElement.querySelector('h4').style.color = 'black';
target.style.color = 'black';
} else if (target.classList.contains('fa-minus')) {
target.classList.remove('fa-minus');
target.classList.add('fa-plus');
target.parentElement.style.backgroundColor = 'black';
target.parentElement.querySelector('h4').style.color = 'yellow';
target.style.color = 'white';
}
};

document.querySelectorAll('.fa-plus, .fa-minus').forEach((icon) => {
icon.addEventListener('click', handlePlusClick);
});


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