const setup = () => {
    // Plaats de focus op het veld "First Name" bij het laden van de pagina
    const firstNameInput = document.getElementById("Fname");
    firstNameInput.focus();
        
        const handleSubmit = (event) => {
            event.preventDefault(); // Voorkom standaardgedrag van het formulier
    
          
            if (validateForm()) {
                
                processData();
            } else {
                // Toon een foutmelding of neem andere acties voor ongeldige gegevens
                alert("Please fill in all required fields.");
            }
        };
    
        
        const form = document.querySelector("form");
        form.addEventListener("submit", handleSubmit);
    };
    
    // Valideer het formulier
    const validateForm = () => {
        const requiredInputs = document.querySelectorAll("input[required]");
        for (const input of requiredInputs) {
            if (!input.value) {
                return false; // Geef onmiddellijk false terug als een vereist veld leeg is
            }
        }
        return true; 
    };
    
    
    const processData = () => {
        
        alert("Form submitted successfully!");
    };


window.addEventListener("load", setup);
