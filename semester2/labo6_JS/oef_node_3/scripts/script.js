const setup = () => {
    const addButton = document.getElementById("ButtonToevoegen");
    const div = document.getElementById("myDIV");
    
    addButton.addEventListener("click", () => {
      const p = document.createElement("p");
      const text = document.createTextNode("New paragraph....");
      p.appendChild(text);
      div.appendChild(p);
    });
  };
  
  setup();