const button = document.getElementById('btn') as HTMLButtonElement;
const body = document.body as HTMLBodyElement;
let isWhite = false;

button?.addEventListener('click', () => {
    if (isWhite) {
        body.style.backgroundColor = '';
        body.style.color = '';
        button.innerText = 'Dark Mode';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        button.innerText = 'Light Mode';
    }
    isWhite = !isWhite;
});