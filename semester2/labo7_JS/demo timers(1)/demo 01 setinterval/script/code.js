// Initialiseren van een variabele timerId met de waarde 0.
let timerId = 0;

// Functie om te initialiseren, wordt aangeroepen wanneer het venster is geladen.
const initialize = () => {
    // Referentie naar het HTML-element met de id "btnStop" ophalen.
    let btnStop = document.getElementById("btnStop");
    // Event listener toevoegen aan de knop "btnStop", zodat de stopTimer-functie wordt aangeroepen wanneer erop wordt geklikt.
    btnStop.addEventListener("click", stopTimer);
    // Interval timer starten die elke 1000 milliseconden de functie timerTick aanroept.
    timerId = setInterval(timerTick, 1000);
}

// Functie die wordt aangeroepen bij elke tik van de timer.
const timerTick = () => {
    // Referentie naar het HTML-element met de id "output" ophalen.
    let output = document.getElementById("output");
    // "tick" toevoegen aan de innerHTML van het "output"-element.
    output.innerHTML += " tick";
}

// Functie die wordt aangeroepen wanneer de stopknop wordt geklikt.
const stopTimer = () => {
    // Interval timer stoppen door de timerId te gebruiken.
    clearInterval(timerId);
}

// Event listener toevoegen aan het venster, zodat de initialize-functie wordt aangeroepen wanneer de HTML-pagina volledig is geladen.
window.addEventListener("load", initialize);
