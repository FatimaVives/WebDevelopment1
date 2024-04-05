const setup = () => {
    let playField = document.querySelector("#playField");
    let score = document.querySelector("#score");
  
    const IMAGE_COUNT = 5;
    const IMAGE_SIZE = 48;
    const IMAGE_PATH_PREFIX = "images/";
    const IMAGE_PATH_SUFFIX = ".png";
    const MOVE_DELAY = 1000;
  
    let timeoutId = 0;
    let image = null;
    let scoreValue = 0;
  
    // Toont een nieuwe afbeelding en positioneert deze binnen het kader
    const showImage = () => {
      // Verwijder eerst de vorige afbeelding als deze bestaat
      if (image) {
        playField.removeChild(image);
      }
  
      // Kies een willekeurige afbeelding
      let index = Math.floor(Math.random() * IMAGE_COUNT);
      let imagePath = IMAGE_PATH_PREFIX + index + IMAGE_PATH_SUFFIX;
  
      // Maak een nieuw afbeeldingselement aan en voeg een click event listener toe
      image = document.createElement("img");
      image.setAttribute("src", imagePath);
      image.setAttribute("width", IMAGE_SIZE);
      image.setAttribute("height", IMAGE_SIZE);
      image.style.position = "absolute";
      image.addEventListener("click", () => {
        // Als de speler op de 0.png afbeelding klikt, beëindig dan het spel en toon een alert met de score
        if (imagePath === "images/0.png") {
          clearTimeout(timeoutId);
          alert("Game over!");
        } else {
          // Verhoog de score en update het score-element
          scoreValue++;
          score.textContent = scoreValue;
        }
      });
  
      // Positioneer de afbeelding binnen het kader
      let maxX = playField.clientWidth - IMAGE_SIZE;
      let maxY = playField.clientHeight - IMAGE_SIZE;
      let x = Math.floor(Math.random() * maxX);
      let y = Math.floor(Math.random() * maxY);
      image.style.left = x + "px";
      image.style.top = y + "px";
  
      // Voeg de afbeelding toe aan het speelveld
      playField.appendChild(image);
    };
  
    // Beweeg de afbeelding elke MOVE_DELAY milliseconden
    const moveImage = () => {
      showImage();
      timeoutId = setTimeout(moveImage, MOVE_DELAY);
    };

    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', function() {
    moveImage();
    });

  };
  
  window.addEventListener("load", setup);
  