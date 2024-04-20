//programma1
let student1 = {
    voornaam: "Jan",
    familienaam: "Janssens",
    geboorteDatum: new Date("1993-12-31"),
    adres: {
        straat: "Kerkstraat 13",
        postcode: "8500",
        gemeente: "Kortrijk"
    },
    isIngeschreven: true,
    namenVanExen: ["Sofie", "Berta", "Philip", "Albertoooo"],
    aantalAutos: 2
};
let jsonTekst = JSON.stringify(student1);
console.log(jsonTekst);

//programma2
let jsonTekst2 = '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}';
let student2 = JSON.parse(jsonTekst2);
console.log(student2.voornaam);