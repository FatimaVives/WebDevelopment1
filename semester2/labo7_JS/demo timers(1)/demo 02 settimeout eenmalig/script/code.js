// Functie om te initialiseren, wordt aangeroepen wanneer het venster is geladen.
const initialize = () => {
    // Referentie naar het HTML-element met de id "btnOpnieuw" ophalen.
    let btnOpnieuw = document.getElementById("btnOpnieuw");
    // Event listener toevoegen aan de knop "btnOpnieuw", zodat de herstartTimer-functie wordt aangeroepen wanneer erop wordt geklikt.
    btnOpnieuw.addEventListener("click", herstartTimer);
    // Eenmalige timer instellen die na 1000 milliseconden de timerTick-functie aanroept.
    setTimeout(timerTick, 1000);
}

// Functie die wordt aangeroepen bij elke tik van de timer.
const timerTick = () => {
    // Referentie naar het HTML-element met de id "output" ophalen.
    let output = document.getElementById("output");
    // "tick" toevoegen aan de innerHTML van het "output"-element.
    output.innerHTML += " tick";
}

// Functie die wordt aangeroepen wanneer de herstartknop wordt geklikt.
const herstartTimer = () => {
    // Eenmalige timer instellen die na 1000 milliseconden de timerTick-functie aanroept.
    setTimeout(timerTick, 1000);
}

// Event listener toevoegen aan het venster, zodat de initialize-functie wordt aangeroepen wanneer de HTML-pagina volledig is geladen.
window.addEventListener("load", initialize);
