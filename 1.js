const button = document.getElementById('helloButton');
        const message = document.getElementById('message');
        const clickCountElem = document.getElementById('clickCount');

        let clickCount = 0;

        button.addEventListener('click', function() {

            message.textContent = 'Szia! Kattintottál a gombra.';
            
            clickCount++;

            clickCountElem.textContent = 'Kattintások száma: ' + clickCount;
        });