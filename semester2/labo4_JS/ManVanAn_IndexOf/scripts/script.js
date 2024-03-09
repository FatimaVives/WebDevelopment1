const setup = () => {
    const tekst = "De man van An geeft geen hand aan ambetante verwanten";
        const zoekTerm = "an";
        let teller = 0;
        let index = tekst.indexOf(zoekTerm);
        while (index !== -1) {
            teller++;
            index = tekst.indexOf(zoekTerm, index + 1);
        }
        console.log("Het aantal keer dat 'an' voorkomt: ", teller);
    };
window.addEventListener("load", setup);
