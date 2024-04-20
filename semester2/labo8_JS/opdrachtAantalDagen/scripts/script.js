const setup = () => {
    const geboortedatum = new Date('2000-03-03');
    const vandaag = new Date();
       
    const tijdVerschill = vandaag.getTime() - geboortedatum.getTime(); // in milliseconds
       
    const eenDag = 1000 * 60 * 60 * 24; //milliseconds in één dag
       
    const aantalDagen = Math.floor(tijdVerschill / eenDag);
       
    console.log(`Er zijn ${aantalDagen} dagen tussen mijn verjaardag en de huidige datum.`);

  };


window.addEventListener("load", setup);