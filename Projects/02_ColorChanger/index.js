const selectButton = document.querySelectorAll('.button');
const body = document.querySelector('body');

selectButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(event); // This will log the event object
        console.log(event.target); // This will log the button element that was clicked

        if(event.target.id === 'grey'){body.style.backgroundColor = event.target.id}
        if(event.target.id === 'white'){body.style.backgroundColor = event.target.id}
        if(event.target.id === 'blue'){body.style.backgroundColor = event.target.id}
        if(event.target.id === 'yellow'){body.style.backgroundColor = event.target.id}
        
    });
})