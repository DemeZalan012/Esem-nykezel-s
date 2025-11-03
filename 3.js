const inputField = document.createElement('input');
inputField.id = 'search';
inputField.placeholder = 'Írj és nyomj Entert';
document.body.appendChild(inputField);

const outputParagraph = document.createElement('p');
outputParagraph.id = 'output';
document.body.appendChild(outputParagraph);

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        outputParagraph.textContent = inputField.value;
    } else if (event.key === 'Escape') {
        inputField.value = '';
        outputParagraph.textContent = ''; 
    }
});
