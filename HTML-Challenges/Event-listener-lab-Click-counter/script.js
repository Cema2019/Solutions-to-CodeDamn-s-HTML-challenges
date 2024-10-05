// Attach event listeners and update counter here

const counterButton = document.getElementById('counterButton');
const clickCounter = document.getElementById('clickCounter');
let count = 0;

counterButton.addEventListener('click', () => { 
        count += 1;
        clickCounter.textContent = count;
    });
