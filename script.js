var slides = document.querySelectorAll('#slides .slide');
var current = 0;
setInterval(move, 8000);
var prev = document.getElementById('prev');
var next = document.getElementById('next');


function move() {

    slides[current].className='slide';
    current = (current+1) % slides.length;
    slides[current].className='slide show';

    prev.onclick = function () {
        slides[current].className='slide';
        current=current-1;
        if(current<0){
            current=slides.length-1;
        }
        slides[current].className='slide show';
    };
    
    next.onclick = function () {
        slides[current].className='slide';
        current=current+1;
        if(current>=slides.length){
            current=0;
        }
        slides[current].className='slide show';
    }
}

