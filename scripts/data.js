

let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing";


fetch(urlAPI)
    .then(response => response.json())
    .then(datos => crearCards(datos))
    .catch(error => console.log(error)) 
     
