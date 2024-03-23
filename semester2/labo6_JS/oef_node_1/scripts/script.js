const setup = () => {
    let elements = document.querySelectorAll('p');
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = 'Good Job!';
    }
};
window.addEventListener("load", setup);