const setup = () => {
  const toonResultaat = () => {
      const isRoker = document.getElementById("Isroker").checked ? "is een roker" : "is geen roker";
      const moedertaalId = document.querySelector('input[name="Moedertaal"]:checked').id;
      const moedertaalLabel = document.querySelector(`label[for="${moedertaalId}"]`).textContent;
      const favorieteBuurland = document.getElementById("Fbuurland").value;
      const bestelling = Array.from(document.querySelectorAll('#bestelling option:checked')).map(option => option.value).join(' ');

      console.log(`${isRoker}`);
      console.log(`moedertaal is ${moedertaalLabel}`);
      console.log(`favoriete buurland is ${favorieteBuurland}`);
      console.log(`bestelling bestaat uit ${bestelling}`);
  };

  window.toonResultaat = toonResultaat; // Maak de functie toegankelijk voor de HTML
};

window.addEventListener("load", setup);

