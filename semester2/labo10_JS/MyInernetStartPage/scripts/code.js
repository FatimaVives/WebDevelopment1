const setup = () => {
    const searchForm = document.querySelector('form');
    const searchInput = document.querySelector('#search');
    const button = document.querySelector('#button');
    const historyList = document.querySelector('#history');
  
    const prefixToUrl = {
      'g': 'https://www.google.com/search?q=',
      'y': 'https://www.youtube.com/results?search_query=',
      't': 'https://twitter.com/hashtag/',
      'i': 'https://www.instagram.com/explore/tags/'
    };
  
    const prefixToColor = {
      'g': '#4285f4',
      'y': '#ff0000',
      't': '#1da1f2',
      'i': '#c32aa3'
    };

    const prefixToTitle = {
        'g': 'Google',
        'y': 'YouTube',
        't': 'Twitter',
        'i': 'Instagram'
      }; 

    let history = JSON.parse(sessionStorage.getItem('history')) || [];
  
    let currentPrefix = '';

const handleSearch = (event) => {
  event.preventDefault();
  const value = searchInput.value.trim();
  if (value.length === 0 || !value.startsWith('/')) {
    alert('Ongeldig commando!');
    return;
  }
  const prefix = value[1];
  if (!(prefix in prefixToUrl)) {
    alert(`Onbekende prefix ${prefix}`);
    return;
  }
  const searchQuery = encodeURIComponent(value.substring(2));
  const url = `${prefixToUrl[prefix]}${searchQuery}`;
  window.open(url, '_blank');
  const item = {
    title: prefixToTitle[prefix],
    text: searchQuery,
    url: url,
    prefix: prefix 
  };
  currentPrefix = prefix;
  history.push(item);
  sessionStorage.setItem('history', JSON.stringify(history));
  renderHistory();
  searchInput.value = '';
};

const renderHistory = () => {
  historyList.innerHTML = '';

  let rowDiv = document.createElement('div');
  rowDiv.classList.add('row');

  let cardCount = 0;

  for (let i = 0; i < history.length && i < 6; i++) {
    const item = history[i];

    const card = document.createElement('div');
    card.classList.add('card', 'col-md-4');
    
    if (item.prefix === 'y') {
      card.classList.add('card-youtube');
    }
    if (item.prefix === 'i') {
      card.classList.add('card-instagram');
    }
    if (item.prefix === 't') {
      card.classList.add('card-twitter');
    }
    if (item.prefix === 'g') {
      card.classList.add('card-google');
    }


    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.style.backgroundColor = prefixToColor[item.prefix];
    cardHeader.innerText = item.title;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.innerText = decodeURIComponent(item.text);

    const cardLink = document.createElement('a');
    cardLink.classList.add('btn', 'btn-primary');
    cardLink.innerText = 'Go!';
    cardLink.href = item.url;
    cardLink.target = '_blank';

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    cardFooter.appendChild(cardLink);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    rowDiv.appendChild(card);

    cardCount++;

    if (cardCount === 3) {
      historyList.appendChild(rowDiv);
      rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      cardCount = 0;
    }
  }

  if (cardCount > 0) {
    historyList.appendChild(rowDiv);
  }
};


  
    button.addEventListener('click', handleSearch);
  
    renderHistory();
  };
  
  window.addEventListener('load', setup);
  
  