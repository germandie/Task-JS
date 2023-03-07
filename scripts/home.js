console.log([document])




let parentElement = document.querySelector("article");

// Recorrer los elementos del array "events" con un bucle "for"
let fragment = document.createDocumentFragment()

for (let i = 0; i < data.events.length; i++) {
  

  //Crear un nuevo elemento "div"
  let newDivElement = document.createElement("div");
  newDivElement.classList.add("card_1", "mx-4", "p-2", "mt-5", "border", "border-light-subtle", "rounded-2");
  newDivElement.style.width = "15rem"; 

  

 

  //Agregar la imagen del evento al nuevo elemento "div"
  let newImgElement = document.createElement("img");
  newImgElement.src = data.events[i].image;
  newImgElement.width = "280";
  newImgElement.height = "150";
  newImgElement.classList.add("card-img-top");
  newImgElement.alt = "...";
  newDivElement.appendChild(newImgElement);

 


  // Agregar el título del evento al nuevo elemento "div"
  let newTitleElement = document.createElement("h5");
  newTitleElement.classList.add("card-title", "d-flex", "justify-content-center");
  newTitleElement.textContent = data.events[i].name;
  newDivElement.appendChild(newTitleElement);

 


  // Agregar la descripción del evento al nuevo elemento "div"
  let newDescElement = document.createElement("p");
  newDescElement.classList.add("card-text", "d-flex", "justify-content-center");
  newDescElement.textContent = data.events[i].description;
  newDivElement.appendChild(newDescElement);

  


  // Agregar el precio y el botón de "See more" al nuevo elemento "div"
  let newVypElement = document.createElement("div");
  newVypElement.classList.add("vyp");
  let newPrecioElement = document.createElement("p");
  newPrecioElement.classList.add("precio");
  newPrecioElement.textContent = "Price $" + data.events[i].price;
  newVypElement.appendChild(newPrecioElement);
  let newLinkElement = document.createElement("a");
  newLinkElement.href = `./details.html?id=${data.events[i]._id}`;
  newLinkElement.classList.add("btn", "btn-primary");
  newLinkElement.textContent = "See more";
  newVypElement.appendChild(newLinkElement);
  newDivElement.appendChild(newVypElement);
  
  

  newDivElement.setAttribute('data-category', data.events[i].category);

  // Agregar el nuevo elemento "div" al elemento "padre"
  fragment.appendChild(newDivElement);
}
parentElement.appendChild(fragment)

/////////////////////////////////////////////////////////////////////////

let categorias = [];
data.events.forEach(event => {
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



////////////////////////////////////////////////////////////////////////
/* Prueba 1 */


/* function mostrarTarjetasPorCategoria(categoria) {
  const tarjetas = document.querySelectorAll('.tarjeta');
  tarjetas.forEach(tarjeta => {
    if (tarjeta.dataset.categoria === categoria) {
      tarjeta.style.display = 'block';
    } else {
      tarjeta.style.display = 'none';
    }
  });
}
 */


/* const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    const categoria = checkbox.value;
    const tarjetas = document.querySelectorAll(`[data-categoria="${categoria}"]`);
    
    tarjetas.forEach(tarjeta => {
      tarjeta.classList.toggle('hidden');
    });
  });
});


/////////////////////////////////////////////////
PRUEBA 2

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(listItem => listItem.onclick = ()=>{
  let htmlResultados = "";
  let category = listItem.value;
  data.events.filter(tarjeta => tarjeta.category == category).forEach
  (tarjeta => htmlResultados +=)
}) */

////////////////////////////////////////////////////////////////////
/* PRUEBA 3 */

/* const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    const category = checkbox.value;
    const filteredEvents = data.events.filter(event => event.category === category);
    let htmlResultados = "";
    filteredEvents.forEach(tarjeta => {
      htmlResultados += `
        <div class="tarjeta" data-categoria="${tarjeta.category}">
          <img src="${tarjeta.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${tarjeta.name}</h5>
            <p class="card-text">${tarjeta.description}</p>
            <div class="vyp">
              <p class="precio">Price $${tarjeta.price}</p>
              <a href="#" class="btn btn-primary">See more</a>
            </div>
          </div>
        </div>
      `;
    });
    document.querySelector("article").innerHTML = htmlResultados;
  });
});
 */
/////////////////////////////////////////////////////////////
/* PRUEBA 4 */

/* const checkboxes = document.querySelectorAll('input[type="checkbox"]');

//Función que se ejecuta al hacer clic en un checkbox
function mostrarTarjetasPorCategoria() {
  // Filtrar los eventos según la categoría seleccionada
  const categoriasSeleccionadas = [...checkboxes].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

  const allCards = document.querySelectorAll('.card_1');

 

  if (categoriasSeleccionadas.length === 0) {
    allCards.forEach(card => {
      card.style.display = "block";
    });
    return;
  }


  let checked = false;
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checked = true;
    }
  });
  
  if (!checked) {
    allCards.forEach(function(card) {
      card.style.display = "block";
    });
  }
 
  
  const eventosFiltrados = data.events.filter(evento => categoriasSeleccionadas.includes(evento.category));
  
  // Generar el HTML de las tarjetas filtradas
     let htmlResultados = "";
  eventosFiltrados.forEach(evento => {
    //Crear un nuevo elemento "div"
    let newDivElement = document.createElement("div");
    newDivElement.classList.add("card_1", "mx-4", "p-2", "mt-5", "border", "border-light-subtle", "rounded-2");
    newDivElement.style.width = "15rem"; 

    //Agregar la imagen del evento al nuevo elemento "div"
    let newImgElement = document.createElement("img");
    newImgElement.src = evento.image;
    newImgElement.width = "280";
    newImgElement.height = "150";
    newImgElement.classList.add("card-img-top");
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
    newLinkElement.href = "#";
    newLinkElement.classList.add("btn", "btn-primary");
    newLinkElement.textContent = "See more";
    newVypElement.appendChild(newLinkElement);
    newDivElement.appendChild(newVypElement);

    htmlResultados += newDivElement.outerHTML;
  });

  // Reemplazar el HTML de las tarjetas con el HTML generado
  parentElement.innerHTML = htmlResultados;

} 



// Agregar el listener a cada checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', mostrarTarjetasPorCategoria);



});  */



const checkboxes = document.querySelectorAll('input[type=checkbox]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filterCards);
});

function filterCards() {
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
  filterCards();
});







/////////////////////////////////////////////////////////////////////
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


//Código para filtrar la búsquda

// Obtener el valor de búsqueda del usuario
/* let searchTerm = buscador.value.toLowerCase();

// Filtrar los eventos que coinciden con el término de búsqueda
let filteredEvents = data.events.filter(event => {
  let name = event.name.toLowerCase();
  let description = event.description.toLowerCase();
  return name.includes(searchTerm) || description.includes(searchTerm);
}); */

// Mostrar solo los eventos filtrados
// Código para mostrar los eventos en la página web



/* button.addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que se recargue la página

  let keyword = buscador.value.toLowerCase(); // Obtener la palabra clave ingresada por el usuario y convertirla a minúsculas

  let cards = document.querySelectorAll(".card_1"); // Obtener todas las tarjetas

  for (let i = 0; i < cards.length; i++) {
    let name = cards[i].querySelector(".card-title").textContent.toLowerCase(); // Obtener el nombre del evento de la tarjeta y convertirlo a minúsculas
    let description = cards[i].querySelector(".card-text").textContent.toLowerCase(); // Obtener la descripción del evento de la tarjeta y convertirla a minúsculas

    if (name.includes(keyword) || description.includes(keyword)) { // Verificar si la palabra clave está incluida en el nombre o descripción del evento
      cards[i].style.display = "block"; // Mostrar la tarjeta
    } else {
      cards[i].style.display = "none"; // Ocultar la tarjeta
    }
  }
}); */






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












