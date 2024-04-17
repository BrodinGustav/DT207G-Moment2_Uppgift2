
// Funktionen för att visa felmeddelanden
function displayErrors(errors) {
    const errorList = document.getElementById('error-list');
    errorList.innerHTML = ""; // Rensa befintlig lista
  
    errors.forEach(error => {
        const li = document.createElement('li');
        li.textContent = error;
        errorList.appendChild(li); // Lägg till felmeddelande i listan
    });
  }

 // Array för att lagra felmeddelanden
 let errors = [];

         // Kontrollera om något av fälten är tomt. Lägg till felmeddelande i array
         if (!companyname) {
            errors.push("Company name is required");
        }
        if (!jobtitle) {
            errors.push("Job title is required");
        }
        if (!location) {
            errors.push("Location is required");
        }
  
    // Om det finns fel, visa dem och avbryt formulärinsändningen
    if (errors.length > 0) {
      displayErrors(errors);
      return;
  }

// Funktion för att hämta data och uppdatera listan med arbetslivserfarenheter
async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    const ul = document.getElementById('cv-list');
    if (!ul) {
      console.error("UL element not found");
      return;
    }
   
    ul.innerHTML = "";                          //Rensar listan
    data.forEach(work => {
      const li = document.createElement('li');  //Skapar <li>-element
  
      const companySpan = createSpanWithText(`Company: ${work.companyname}`);
      const jobTitleSpan = createSpanWithText(`Job Title: ${work.jobtitle}`);
      const locationSpan = createSpanWithText(`Location: ${work.location}`);
  
      // Skapa delete-knapp
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', async () => {
        await deleteWork(url, work.id);          // Anropa deleteWork med URL och ID för arbetslivserfarenhet
        await getData(url);                      // Uppdatera listan efter borttagning av data
      });
  
      // Lägg till spans och delete-knapp i <li>-elementet
      li.appendChild(companySpan);
      li.appendChild(jobTitleSpan);
      li.appendChild(locationSpan);
      li.appendChild(deleteBtn);
  
      ul.appendChild(li);                       //Lägger till <li>-element till <ul>
    });
  }  

  // Skapar <span> med angiven text och fetstil
function createSpanWithText(text) {
    const span = document.createElement('span');
    span.textContent = text;
    span.style.fontWeight = 'bold';
    return span;
  }
  

