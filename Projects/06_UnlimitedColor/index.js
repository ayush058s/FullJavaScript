const randomColor = function() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

console.log(randomColor());

const start = document.getElementById('start');
const stop = document.getElementById('stop');

let startInterval;

start.addEventListener('click', () => {
    if(!startInterval){ // 
    startInterval = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    },1000)
    }
})

stop.addEventListener('click', () => {
    clearInterval(startInterval);
    startInterval = null;// clear the interval and set it to null
})