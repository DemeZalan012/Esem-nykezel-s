const button = document.createElement('button');
button.textContent = 'Változtasd meg a háttérszínt!';
document.body.appendChild(button);

button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.cursor = 'pointer';
button.style.marginTop = '20px';

document.body.style.transition = 'background-color 0.3s ease';

button.addEventListener('click', function() {
    document.body.classList.toggle('yellow-background');
});

const style = document.createElement('style');
style.innerHTML = `
    .yellow-background {
        background-color: yellow;
    }
`;
document.head.appendChild(style);
