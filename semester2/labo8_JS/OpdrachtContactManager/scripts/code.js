let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    let select = document.getElementById("lstPersonen");
    let selected = select.selectedIndex;
    if(selected == -1){
        let persoon = {};
        // nieuwe persoon bewaren
        vulPersoonOpBasisVanUserInterface(persoon);
        personen.push(persoon);
        voegPersoonToeAanLijstInUserInterface(persoon);
    } else{
        let persoon = {};
        vulPersoonOpBasisVanUserInterface(persoon);
        selected.value = JSON.stringify(persoon);
        selected.text = persoon.voornaam + " " + persoon.familienaam;
    }
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    document.getElementById("lstPersonen").selectedIndex = -1;
    /*
    let inputElem = document.querySelectorAll('input[type=text]');
    console.log(inputElem.length);
    inputElem.forEach(  (elem) => {
        elem.value = "";
        }

    )
    */
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const vulPersoonOpBasisVanUserInterface = (persoon) => {
    persoon.voornaam = document.getElementById("txtVoornaam").value.trim();
    persoon.familienaam = document.getElementById("txtFamilienaam").value.trim();
    //persoon.geboortedatum = new Date(document.getElementById("txtGeboorteDatum").value.trim());
    persoon.geboortedatum = document.getElementById("txtGeboorteDatum").value.trim();
    persoon.email = document.getElementById("txtEmail").value.trim();
    persoon.aantalKinderen = document.getElementById("txtAantalKinderen").value.trim();
}

const voegPersoonToeAanLijstInUserInterface = (persoon) => {
    let option = document.createElement("option");
    let select = document.getElementById("lstPersonen");
    option.text = persoon.voornaam + " " + persoon.familienaam;
    document.getElementById("lstPersonen").appendChild(option);
    select.selectedIndex = personen.length - 1;
}
// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonInForm);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

const toonInForm = () => {
    let select = document.getElementById("lstPersonen");
    let index = select.selectedIndex;
    let selected = select.options[index];
    let persoon = personen[index];
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboortedatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
}

window.addEventListener("load", setup);