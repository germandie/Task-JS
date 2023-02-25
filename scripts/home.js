let parentElement = document.querySelector("article");

// Recorrer los elementos del array "events" con un bucle "for"
let fragment = document.createDocumentFragment()

for (let i = 0; i < data.events.length; i++) {


  //Crear un nuevo elemento "div"
  let newDivElement = document.createElement("div");
  newDivElement.classList.add("card_1", "mx-2", "p-2", "mt-5", "border", "border-light-subtle", "rounded-2");
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

  // Agregar el precio y el botón de "Ver más" al nuevo elemento "div"
  let newVypElement = document.createElement("div");
  newVypElement.classList.add("vyp");
  let newPrecioElement = document.createElement("p");
  newPrecioElement.classList.add("precio");
  newPrecioElement.textContent = "Price $" + data.events[i].price;
  newVypElement.appendChild(newPrecioElement);
  let newLinkElement = document.createElement("a");
  newLinkElement.href = "#";
  newLinkElement.classList.add("btn", "btn-primary");
  newLinkElement.textContent = "See more";
  newVypElement.appendChild(newLinkElement);
  newDivElement.appendChild(newVypElement);
  

  // Agregar el nuevo elemento "div" al elemento "padre"
  fragment.appendChild(newDivElement);
}
parentElement.appendChild(fragment)



let currentDate = new Date(data.currentDate)
let pastEvents = [];
let upcomingEvents = [];

for (let i = 0; i < data.events.length; i++) {
  
  const event = data.events[i];
  const eventDate = new Date(event.date);

  if (eventDate < currentDate) {
      pastEvents.push(event)

    
  } else { upcomingEvents.push(event)
    
  }

  
} 

console.log(pastEvents)
console.log(upcomingEvents)

