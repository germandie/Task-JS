const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")



function crearCards(datos){

const tarjeta = datos.events.find(event => event._id == id);


console.log(tarjeta.name);





//Creación de los elementos la tarjeta
const tarjetaElement = document.querySelector(".article");
tarjetaElement.classList.add("box", "d-flex", "justify-content-center", "border", "border-dark-subtle","rounded");

const contenedorElement = document.createElement("div");
contenedorElement.classList.add("d-flex", "align-items-center");

const imagenElement = document.createElement("img");
imagenElement.classList.add("foto","flex-shrink-0","rounded-start");
imagenElement.src = tarjeta.image;
imagenElement.width = "470";
imagenElement.height = "410";
imagenElement.alt = tarjeta.name;

const contenidoElement = document.createElement("div");
contenidoElement.classList.add("flex-grow-1", "ms-1", "border", "border-dark-subtle","rounded-end");

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
}




