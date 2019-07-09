// Your code goes here
const logo = document.querySelector('header h1');

logo.addEventListener('mouseover', function(){
    logo.style.color = 'red';
})

logo.addEventListener('dblclick', function(){
    logo.style.color = 'black';
})

logo.addEventListener('select', function(){
    logo.style.color = 'white';
})

document.querySelector('html').addEventListener('keydown', () => {
    document.querySelector('header img').src = 'img/destination.jpg';
});

document.querySelector('header img').addEventListener('click', (event) => {
    document.querySelector('header img').src = 'img/fun-bus.jpg';
    event.stopPropagation()
});

document.querySelector('html').addEventListener('wheel', () => {
    logo.style.color = 'white';
});

document.querySelector('header p').addEventListener('select', () => {
    logo.style.color = 'brown';
});

window.addEventListener('load', function() {
    console.log('my page has loaded');
});

document.querySelector('header p').addEventListener('mouseover', () => {
    document.querySelector('header p').style.color = 'pink';    
}); 

document.querySelector('header img').addEventListener('drag', () => {
    document.querySelector('html').style.display = 'none';
});



const paragraph = document.querySelector('header p')

function windowsize(){
    console.log(window.innerWidth);
}
window.onresize = windowsize;



document.querySelector('html').addEventListener('click', () => {
    document.querySelector('.destination').style.display = 'none';
});

const nav_a = document.querySelectorAll('nav a')

nav_a[0].addEventListener(click, function(e){
    e.preventDefault();
    e.stopPropagation();
})

nav_a[1].addEventListener(click, function(e){
    e.preventDefault();
    e.stopPropagation();
})

nav_a[2].addEventListener(click, function(e){
    e.preventDefault();
    e.stopPropagation();
})

nav_a[3].addEventListener(click, function(e){
    e.preventDefault();
    e.stopPropagation();
})

nav_a[4].addEventListener(click, function(e){
    e.preventDefault();
    e.stopPropagation();
})