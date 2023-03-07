const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")




const tarjeta = data.events.find(event => event._id == id);


console.log(tarjeta.name);




/* const tarjetaElement = document.querySelector(".article");

const imagenElement = document.createElement("img");
imagenElement.src = tarjeta.image;
imagenElement.width = "410";
imagenElement.height = "410";

const tituloElement = document.createElement("h2");
tituloElement.textContent = tarjeta.name;

const fechaElement = document.createElement("p");
fechaElement.textContent = "Date: " + tarjeta.date;

const lugarElement = document.createElement("p");
lugarElement.textContent = "Location: " + tarjeta.place;

const descripcionElement = document.createElement("p");
descripcionElement.textContent = tarjeta.description;

const precioElement = document.createElement("p");
precioElement.textContent = "Price: $" + tarjeta.price;



// Agregar los elementos creados a la tarjeta
tarjetaElement.appendChild(imagenElement);
tarjetaElement.appendChild(tituloElement);
tarjetaElement.appendChild(fechaElement);
tarjetaElement.appendChild(lugarElement);
tarjetaElement.appendChild(descripcionElement);
tarjetaElement.appendChild(precioElement); 


tarjetaElement.classList.add("box","d-flex", "justify-content-center", "border", "border-dark-subtle");

imagenElement.classList.add("box","d-flex", "justify-content-center","align-items-center", "flex-shrink-0")

tituloElement.classList.add()
fechaElement.classList.add()
lugarElement.classList.add()
descripcionElement.classList.add()
precioElement.classList.add()  */

////////////////////////////////////////////////////////////////////////////
//Prueba 2

/* const tarjetaElement = document.querySelector(".article");

const imagenElement = document.createElement("img");
imagenElement.src = tarjeta.image;
imagenElement.width = "410";
imagenElement.height = "410";

const tituloElement = document.createElement("h2");
tituloElement.textContent = tarjeta.name;
tituloElement.classList.add("box","d-flex", "justify-content-center","flex-grow-1", "ms-3", "border", "border-dark-subtle","box2");

const contenedorElement = document.createElement("div");
contenedorElement.classList.add("flex-grow-1", "ms-3");

const fechaElement = document.createElement("p");
fechaElement.textContent = "Date: " + tarjeta.date;
fechaElement.classList.add("box3", "mb-0");

const lugarElement = document.createElement("p");
lugarElement.textContent = "Location: " + tarjeta.place;
lugarElement.classList.add("box3", "mb-0");

const descripcionElement = document.createElement("p");
descripcionElement.textContent = tarjeta.description;
descripcionElement.classList.add("box3", "mb-0");

const precioElement = document.createElement("p");
precioElement.textContent = "Price: $" + tarjeta.price;
precioElement.classList.add("box3", "mb-0");

// Agregar los elementos creados a la tarjeta
tarjetaElement.appendChild(imagenElement);
contenedorElement.appendChild(fechaElement);
contenedorElement.appendChild(lugarElement);
contenedorElement.appendChild(descripcionElement);
contenedorElement.appendChild(precioElement);

tarjetaElement.appendChild(tituloElement);
tarjetaElement.appendChild(contenedorElement); */

///////////////////Prueba 3/////////////////////////




const tarjetaElement = document.querySelector(".article");
tarjetaElement.classList.add("box", "d-flex", "justify-content-center", "border", "border-dark-subtle");

const contenedorElement = document.createElement("div");
contenedorElement.classList.add("d-flex", "align-items-center");

const imagenElement = document.createElement("img");
imagenElement.classList.add("foto","flex-shrink-0");
imagenElement.src = tarjeta.image;
imagenElement.width = "470";
imagenElement.height = "410";
imagenElement.alt = tarjeta.name;

const contenidoElement = document.createElement("div");
contenidoElement.classList.add("flex-grow-1", "ms-1", "border", "border-dark-subtle");

const tituloElement = document.createElement("h2");
tituloElement.classList.add("box2");
tituloElement.textContent = tarjeta.name;

const fechaElement = document.createElement("p");
fechaElement.classList.add("box3", "mb-0");
fechaElement.textContent = `Date: ${tarjeta.date}`;

const lugarElement = document.createElement("p");
lugarElement.classList.add("box3", "mb-0");
lugarElement.textContent = `Location: ${tarjeta.place}`;

const descripcionElement = document.createElement("p");
descripcionElement.classList.add("box3", "mb-0");
descripcionElement.textContent = tarjeta.description;

const precioElement = document.createElement("p");
precioElement.classList.add("box3", "mb-0");
precioElement.textContent = `Price: $${tarjeta.price}`;


const volverElement = document.createElement("a");
volverElement.textContent = "Return home";
volverElement.href = "./index.html"; 
volverElement.classList.add("box3", "mb-0")

contenidoElement.appendChild(tituloElement);
contenidoElement.appendChild(fechaElement);
contenidoElement.appendChild(lugarElement);
contenidoElement.appendChild(descripcionElement);
contenidoElement.appendChild(precioElement);

contenidoElement.appendChild(volverElement);

contenedorElement.appendChild(imagenElement);
contenedorElement.appendChild(contenidoElement);

tarjetaElement.appendChild(contenedorElement);

// Agregar la tarjeta creada al DOM
const contenedorTarjeta = document.querySelector("#contenedor-tarjeta");
contenedorTarjeta.appendChild(tarjetaElement);




