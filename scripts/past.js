
function crearCards(datos){

  let currentDate = new Date(datos.currentDate)
  let pastEvents = [];
  let upcomingEvents = [];
  
  for (let i = 0; i < datos.events.length; i++) {
    
    let event = datos.events[i];
    let eventDate = new Date(event.date);
  
    if (eventDate > currentDate) {
        pastEvents.push(event)
  
      
    } else { upcomingEvents.push(event)
      
    }
    
  } 
  
  console.log(currentDate);

for(let evento of upcomingEvents){

    let newDivElement = document.createElement("div");
  newDivElement.classList.add("card_1", "mx-2", "p-2", "mt-5", "border", "border-light-subtle", "rounded-2");
  newDivElement.style.width = "13rem"; 

  //Agregar la imagen del evento al nuevo elemento "div"
  let newImgElement = document.createElement("img");
  newImgElement.src =  evento.image;
  newImgElement.width = "190";
  newImgElement.height = "120";
  newImgElement.classList.add("card-img-top","rounded-top");
  newImgElement.alt = "...";
  newDivElement.appendChild(newImgElement);

  // Agregar el título del evento al nuevo elemento "div"
  let newTitleElement = document.createElement("h5");
  newTitleElement.classList.add("card-title", "d-flex", "justify-content-center");
  newTitleElement.textContent = evento.name;
  newDivElement.appendChild(newTitleElement);

  // Agregar la descripción del evento al nuevo elemento "div"
  let newDescElement = document.createElement("p");
  newDescElement.classList.add("card-text", "d-flex", "justify-content-center");
  newDescElement.textContent = evento.description;
  newDivElement.appendChild(newDescElement);

  // Agregar el precio y el botón de "Ver más" al nuevo elemento "div"
  let newVypElement = document.createElement("div");
  newVypElement.classList.add("vyp");
  let newPrecioElement = document.createElement("p");
  newPrecioElement.classList.add("precio");
  newPrecioElement.textContent = "Price $" + evento.price;
  newVypElement.appendChild(newPrecioElement);
  let newLinkElement = document.createElement("a");
  newLinkElement.href =  `./details.html?id=${evento._id}`;
  newLinkElement.classList.add("btn", "btn-primary");
  newLinkElement.textContent = "See more";
  newVypElement.appendChild(newLinkElement);
  newDivElement.appendChild(newVypElement);

  newDivElement.setAttribute('data-category', evento.category);

  
  let eventContainer = document.getElementById("event-container"); 
  eventContainer.appendChild(newDivElement);


}

//Creación de los checkbox

let categorias = [];
datos.events.forEach(event => {
 if(!categorias.includes(event.category)){
  categorias.push(event.category)
 }

});

console.log(categorias);


const categoriasContainer = document.getElementById('categorias-container');

// Crear un checkbox para cada categoría y agregarlo al contenedor
categorias.forEach(categoria => {
  

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = categoria;
  checkbox.id = `categoria-${categoria}`;

  const label = document.createElement('label');
  label.setAttribute('for', `categoria-${categoria}`);
  label.textContent = categoria;

  categoriasContainer.appendChild(checkbox);
  categoriasContainer.appendChild(label);


  
  
  
});

//Funcionalidad de los checkbox

const checkboxes = document.querySelectorAll('input[type=checkbox]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filtrarFuturas);
});

function filtrarFuturas() {
  const checkedCategories = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  const cards = document.querySelectorAll('.card_1');
  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (checkedCategories.length === 0 || checkedCategories.includes(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  filtrarFuturas();
});

}
/////////////////////////////////////////////////////////////////////
/* BUSCADOR Y BOTÓN SEARCH */

// Obtener el contenedor
let buscadorContainer = document.querySelector(".input-button");

// Crear el campo de entrada de búsqueda
let buscador = document.createElement("input");
buscador.type = "search";
buscador.placeholder = "Search";
buscador.setAttribute("aria-label", "Search");
buscador.classList.add("form-control", "me-2");

// Crear el botón de búsqueda
let button = document.createElement("button");
button.type = "submit";
button.textContent = "Search";
button.classList.add("btn", "btn-outline-success");

// Agregar el campo de entrada de búsqueda y el botón al contenedor
let form = document.createElement("form");
form.classList.add("d-flex");
form.setAttribute("role", "search");
form.appendChild(buscador);
form.appendChild(button);
buscadorContainer.appendChild(form);




button.addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que se recargue la página

  let keyword = buscador.value.toLowerCase(); // Obtener la palabra clave ingresada por el usuario y convertirla a minúsculas

  let cards = document.querySelectorAll(".card_1"); // Obtener todas las tarjetas
  
  let foundMatch = false; // Variable para verificar si se ha encontrado alguna coincidencia
  
  for (let i = 0; i < cards.length; i++) {
    let name = cards[i].querySelector(".card-title").textContent.toLowerCase(); // Obtener el nombre del evento de la tarjeta y convertirlo a minúsculas
    let description = cards[i].querySelector(".card-text").textContent.toLowerCase(); // Obtener la descripción del evento de la tarjeta y convertirla a minúsculas

    if (name.includes(keyword) || description.includes(keyword)) { // Verificar si la palabra clave está incluida en el nombre o descripción del evento
      cards[i].style.display = "block"; // Mostrar la tarjeta
      foundMatch = true; // Establecer la variable como verdadera si se encuentra una coincidencia
    } else {
      cards[i].style.display = "none"; // Ocultar la tarjeta
    }
  }
  
  if (!foundMatch) { // Mostrar mensaje de alerta si no se encuentra ninguna coincidencia
    alert("No se encontró ninguna coincidencia, intente modificando los filtros");
  }
});
