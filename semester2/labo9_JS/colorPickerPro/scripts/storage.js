

const storeSliderValues = () => {
    localStorage.setItem('redValue', document.getElementById('sldRed').value);
    localStorage.setItem('greenValue', document.getElementById('sldGreen').value);
    localStorage.setItem('blueValue', document.getElementById('sldBlue').value);

};

const restoreSliderValues = () => {
    const redValue = localStorage.getItem('redValue');
    const greenValue = localStorage.getItem('greenValue');
    const blueValue = localStorage.getItem('blueValue');
    if (redValue && greenValue && blueValue) {
        document.getElementById('sldRed').value = redValue;
        document.getElementById('lblRed').innerHTML = redValue;
        document.getElementById('sldGreen').value = greenValue;
        document.getElementById('lblGreen').innerHTML = greenValue;
        document.getElementById('sldBlue').value = blueValue;
        document.getElementById('lblBlue').innerHTML = blueValue;
    }
};

const storeSwatches = () => {
    // bouwt een array met kleurinfo objecten
    const swatches = Array.from(document.getElementsByClassName('swatch')).map((swatch) => ({
        red: swatch.getAttribute('data-red'),
        green: swatch.getAttribute('data-green'),
        blue: swatch.getAttribute('data-blue'),
    }));
    localStorage.setItem('swatches', JSON.stringify(swatches));
};

const restoreSwatches = () => {
    const swatches = JSON.parse(localStorage.getItem('swatches'));
    if (swatches && swatches.length > 0) {
        const swatchComponents = document.getElementById('swatchComponents');
        for (let i = 0; i < swatches.length; i++) {
            const { red, green, blue } = swatches[i];
            if (red !== null && green !== null && blue !== null) {
                const swatch = buildSwatchComponent(red, green, blue);
                swatchComponents.appendChild(swatch);
            }
        }
    }
};

