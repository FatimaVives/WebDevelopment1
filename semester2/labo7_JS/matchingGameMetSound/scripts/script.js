const setup = () => {
    const card = document.querySelectorAll('.cell')
    const front = document.querySelectorAll('.front')
    const container = document.querySelector('.container')
    const score = document.querySelector('.score span')
    const flipSound = new Audio("./audio/flip.mp3");
    const matchSound = new Audio("./audio/match.mp3");
    const missSound = new Audio("./audio/miss.mp3");
    const numCards = card.length;
    const numMatches = 6;
    let flippedCards = [];
    let matchesFound = 0;
    let clicksDisabled = false;
  
    suffleCards();
    clicking();
  
    function suffleCards() {
      card.forEach(c => {
        const num = [...Array(numCards).keys()]
        const random = Math.floor(Math.random() * numCards)
        c.style.order = num[random]
      })
    }
  
    function clicking() {
      for (let i = 0; i < numCards; i++) {
        front[i].classList.add('show')
        setTimeout(() => {
          front[i].classList.remove('show')
        }, 2000);
  
        card[i].addEventListener('click', () => {
          if (clicksDisabled) return;
          flipCard(i);
          if (flippedCards.length === 2) {
            clicksDisabled = true;
            setTimeout(() => {
              checkMatch();
            }, 1000);
          }
        })
      }
    }
  
    function flipCard(index) {
      front[index].classList.add('flip');
      flippedCards.push(index);
      flipSound.play();
    }
  
    function checkMatch() {
      const index1 = flippedCards[0];
      const index2 = flippedCards[1];
      if (front[index1].dataset.index === front[index2].dataset.index) {
        matchesFound++;
        score.textContent = matchesFound;
        front[index1].classList.remove('flip');
        front[index2].classList.remove('flip');
        front[index1].classList.add('match');
        front[index2].classList.add('match');
        flippedCards = [];
        matchesFound === numMatches ? endGame() : clicksDisabled = false;
        matchSound.play();
      } else {
        missSound.play();
        setTimeout(() => {
          front[index1].classList.remove('flip');
          front[index2].classList.remove('flip');
          flippedCards = [];
          clicksDisabled = false;
        }, 1000);
      }
    }
  
    function endGame() {
      alert('Gefeliciteerd, je hebt gewonnen!');
    }
  }
  
  window.addEventListener("load", setup);
  