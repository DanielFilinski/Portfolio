let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let owl = document.getElementById('owl');
let mountains_behind = document.getElementById('mountains_behind');
let main_text = document.getElementById('main_text');
let main_btn = document.getElementById('main_btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    console.log('value', value)

    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    // owl.style.height = 200 + 'px';
    // owl.style.width = 500 + 'px';


    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    //main_text.style.marginTop = value * 0.5 + 'px';
    //main_btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';

})