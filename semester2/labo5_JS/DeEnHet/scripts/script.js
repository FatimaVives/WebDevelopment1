const setup = () => {

    const tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    const woorden = tekst.split(' ');
    for (let i = 0; i < woorden.length; i++) {
        if (woorden[i].toLowerCase() === 'de') {
            woorden[i] = 'het';
        }
    }
    const resultaat = woorden.join(' ');
    console.log(resultaat);



    

};

window.addEventListener("load", setup);