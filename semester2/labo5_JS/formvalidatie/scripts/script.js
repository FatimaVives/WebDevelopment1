const setup = () => {
    const form = document.querySelector('form');
    const firstNameInput = document.getElementById('voornaam');
    const lastNameInput = document.getElementById('familienaam');
    const birthdateInput = document.getElementById('geboortedatum');
    const emailInput = document.getElementById('email');
    const childrenInput = document.getElementById('aantal_kinderen');
    const submitButton = document.querySelector('input[type="submit"]');
  
    const validateForm = () => {
      let valid = true;
  
      // Validatie voornaam
      const firstNameValue = firstNameInput.value.trim();
      if (firstNameValue.length > 30) {
        valid = false;
        firstNameInput.classList.add('invalid');
        document.getElementById('voornaamError').textContent = 'Max. 30 karakters';
      } else {
        firstNameInput.classList.remove('invalid');
        document.getElementById('voornaamError').textContent = '';
      }
  
      // Validatie familienaam
      const lastNameValue = lastNameInput.value.trim();
      if (lastNameValue === '') {
        valid = false;
        lastNameInput.classList.add('invalid');
        document.getElementById('familienaamError').textContent = 'Verplicht veld';
      } else if (lastNameValue.length > 50) {
        valid = false;
        lastNameInput.classList.add('invalid');
        document.getElementById('familienaamError').textContent = 'Max. 50 karakters';
      } else {
        lastNameInput.classList.remove('invalid');
        document.getElementById('familienaamError').textContent = '';
      }
  
      // Validatie geboortedatum
      const birthdateValue = birthdateInput.value.trim();
      if (birthdateValue === '') {
        valid = false;
        birthdateInput.classList.add('invalid');
        document.getElementById('geboortedatumError').textContent = 'Verplicht veld';
      } else if (!/^\d{4}-\d{2}-\d{2}$/.test(birthdateValue)) {
        valid = false;
        birthdateInput.classList.add('invalid');
        document.getElementById('geboortedatumError').textContent = 'Formaat is niet jjjj-mm-dd';
      } else {
        birthdateInput.classList.remove('invalid');
        document.getElementById('geboortedatumError').textContent = '';
      }
  
      // Validatie email
      const emailValue = emailInput.value.trim();
      if (emailValue === '') {
        valid = false;
        emailInput.classList.add('invalid');
        document.getElementById('emailError').textContent = 'Verplicht veld';
      } else if (!emailValue.includes('@') || emailValue.indexOf('@') === emailValue.length - 1 || emailValue.indexOf('@') === 0) {
        valid = false;
        emailInput.classList.add('invalid');
        document.getElementById('emailError').textContent = 'Geen geldig e-mailadres';
      } else {
        emailInput.classList.remove('invalid');
        document.getElementById('emailError').textContent = '';
      }
  
      // Validatie #kinderen
      const childrenValue = childrenInput.value.trim();
      if (childrenValue === '' || isNaN(childrenValue) || childrenValue < 0 || childrenValue >= 99) {
        valid = false;
        childrenInput.classList.add('invalid');
        document.getElementById('aantalKinderenError').textContent = 'Ongeldig aantal kinderen';
      } else {
        childrenInput.classList.remove('invalid');
        document.getElementById('aantalKinderenError').textContent = '';
      }
  
      if (valid) {
        alert('Proficiat!');
      }
  
      return false; // Zorg ervoor dat het formulier niet wordt verzonden
    }

    form.onsubmit = validateForm;
}
window.addEventListener("load", setup);
