// Maak een array met namen van familieleden
let familieleden = ["Mustapha", "Aicha", "Mohammed", "Ismail", "Khadija"];

// Schrijf naar de console hoeveel elementen de array bevat
console.log("De array bevat " + familieleden.length + " elementen.");

// Schrijf het eerste, derde en vijfde element uit de array naar de console
console.log("Het eerste element is: " + familieleden[0]);
console.log("Het derde element is: " + familieleden[2]);
console.log("Het vijfde element is: " + familieleden[4]);

// Definieer een functie om een naam toe te voegen aan de array
function VoegNaamToe(arr, naam) {
  arr.push(naam);
}

// Vraag met prompt() een extra naam op en voeg deze toe aan de Array
let nieuweNaam = prompt("Voer een nieuwe naam in:");
VoegNaamToe(familieleden, nieuweNaam);

// Schrijf het resultaat naar de console
console.log("De nieuwe array met namen is: " + familieleden);

// Converteer de array naar een string en toon deze op de console
console.log("De array als string is: " + familieleden.toString());