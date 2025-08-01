const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevents the data from being sent to the server

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const bmi =  (weight / Math.pow(height / 100, 2)).toFixed(2); // calculate bmi and round to 2 decimal places
    const result = document.querySelector('#results');

    result.appendChild(document.createTextNode(`${bmi}`));
})