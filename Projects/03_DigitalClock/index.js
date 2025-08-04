const clock =  document.querySelector('#clock');

// Get the current date and time

setInterval(function(){
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString(); // Display the time in 12-hour format
}, 1000); 