const setup = () => {
    const tekst = "De man van An geeft geen hand aan ambetante verwanten";
        const zoekTerm = "an";
        let teller = 0;
        let index = tekst.lastIndexOf(zoekTerm);
        
        while (index !== -1) {
            teller++;
            index = tekst.lastIndexOf(zoekTerm, index - 1);
        }
        console.log("Het aantal keer dat 'an' voorkomt: ", teller);
};
window.addEventListener("load", setup);