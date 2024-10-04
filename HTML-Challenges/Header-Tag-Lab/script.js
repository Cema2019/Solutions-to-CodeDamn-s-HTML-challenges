const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
        const header = document.getElementById('header');
        
        header.style.fontSize === '16px' 
            ? header.style.fontSize = '32px'
            : header.style.fontSize = '16px'
    });
