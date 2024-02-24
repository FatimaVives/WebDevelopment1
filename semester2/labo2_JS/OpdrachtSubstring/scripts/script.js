const btnSubstring = document.getElementById("btnSubstring");
      btnSubstring.addEventListener("click", () => {
        const inputText = document.getElementById("inputText").value;
        const inputStart = parseInt(document.getElementById("inputStart").value);
        const inputEnd = parseInt(document.getElementById("inputEnd").value);

        const output = document.getElementById("output");
        if (inputText && !isNaN(inputStart) && !isNaN(inputEnd)) {
          output.textContent = inputText.substring(inputStart, inputEnd);
        } else {
          output.textContent = "Ongeldige invoer.";
        }
      });