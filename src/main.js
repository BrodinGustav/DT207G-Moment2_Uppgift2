
// displayErrors() funktionen för att visa felmeddelanden
function displayErrors(errors) {
    const errorList = document.getElementById('error-list');
    errorList.innerHTML = ""; // Rensa befintlig lista
  
    errors.forEach(error => {
        const li = document.createElement('li');
        li.textContent = error;
        errorList.appendChild(li); // Lägg till felmeddelande i listan
    });
  }

 // Skapa en array för att lagra felmeddelanden
 let errors = [];