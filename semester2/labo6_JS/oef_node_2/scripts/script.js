const setup = () => {
    const nicknameElement = document.querySelector('#nickname');
    const favoritesElement = document.querySelector('#favorites');
    const hometownElement = document.querySelector('#hometown');

    nicknameElement.textContent = 'Fatima';
    favoritesElement.textContent = 'Traveling, cooking..';
    hometownElement.textContent = 'Aklim';


    const liElements = document.querySelectorAll('li');
    for (let i = 0; i < liElements.length; i++) {
        liElements[i].classList.add('listitem');
        liElements[i].style.color = 'red';
    }

    const spanElements = document.querySelectorAll('span');
    for (let i = 0; i < spanElements.length; i++) {
        spanElements[i].classList.add('spanitem');
        spanElements[i].style.color = 'black';
    }

    const imgElement = document.createElement('img');
    imgElement.src = './images/download.jpg';
    imgElement.alt = 'from pinterest';
    imgElement.width = '200';
    document.body.appendChild(imgElement);
};
window.addEventListener("load", setup);