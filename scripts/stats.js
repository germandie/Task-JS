function crearCards(datos){

//Events with the highest percentage of attendance

datos.events.sort((a, b) => b.assistance / b.capacity - a.assistance / a.capacity);

// Obtener el elemento de la tabla donde se agregarán las celdas
const tableBody = document.querySelector('tbody#max-min-values');



// Crear una celda dinámicamente para cada evento
datos.events.forEach((event,index) => {
  if (event.assistance !== undefined) {
  const row = document.createElement('tr');
  const percentage = ((event.assistance / event.capacity) * 100).toFixed(1);
  
  const nameCell = document.createElement('td');
  row.id = "fila" + index;
  nameCell.textContent = `${event.name} (${percentage}%)`; 

  row.appendChild(nameCell);
 
  tableBody.appendChild(row)
  }
});



//Eventos lowest percentage of attendance
datos.events.sort((a, b) => a.assistance / a.capacity - b.assistance / b.capacity);



// Crear una celda dinámicamente para cada evento
datos.events.forEach((event,index) => {
  if (event.assistance !== undefined) {
  const percentage = ((event.assistance / event.capacity) * 100).toFixed(1);
  const row = document.querySelector('tr#fila' + index);
  row.innerHTML += `<td>${event.name} (${percentage}%)</td> `
  
  
  }
  
});




// Ordenar los eventos por capacidad
datos.events.sort((a, b) => b.capacity - a.capacity);

datos.events.slice(0, 18).forEach((event, index) => {

const row = document.querySelector('tr#fila' + index);

row.innerHTML += `<td>${event.name} (${event.capacity} peoples)</td> `
  
});


/////////////////////////////////////////////////////////////////
//Upcoming events statistics by category

let currentDate = new Date(datos.currentDate)
  let pastEvents = [];
  let upcomingEvents = [];
  
  for (let i = 0; i < datos.events.length; i++) {
    
    let event = datos.events[i];
    let eventDate = new Date(event.date);
  
    if (eventDate < currentDate) {
        pastEvents.push(event)
  
      
    } else { upcomingEvents.push(event)
      
    }
  } 


let tablaCategorias = document.getElementById("tabla-categorias");

// Calcular la asistencia por categoría
const estimateByCategory = {};
upcomingEvents.forEach(event => {
  const category = event.category;
  if (!estimateByCategory[category]) {
    estimateByCategory[category] = {
      totalEstimate: event.estimate,
      numEvents: 1
    };
  } else {
    estimateByCategory[category].totalEstimate  += event.estimate;
    estimateByCategory[category].numEvents++;
  }
});

// Crear las filas de la tabla para cada categoría y sus ganancias y porcentaje de asistencia
Object.keys(estimateByCategory).forEach(categoria => {
  let fila = document.createElement("tr");

  // Celda para la categoría
  let celdaCategoria = document.createElement("td");
  celdaCategoria.innerHTML = categoria;
  fila.appendChild(celdaCategoria);

  // Calcular las ganancias de la categoría
  let ganancias = 0;
  upcomingEvents.forEach(event => {
    if (event.category === categoria) {
      ganancias += event.price * event.estimate;
    }
  });

  // Celda para las ganancias de la categoría
  let celdaGanancias = document.createElement("td");
  celdaGanancias.innerHTML = "$" + ganancias;
  fila.appendChild(celdaGanancias);

  
  
  
  
  // Calcular el porcentaje de asistencia de la categoría
  const { totalEstimate, numEvents } = estimateByCategory[categoria];
  const totalCapacity = upcomingEvents
    .filter(event => event.category === categoria)
    .reduce((total, event) => total + event.capacity, 0);
  const percentageAttendance = ((totalEstimate / ( totalCapacity)) * 100).toFixed(2);

  // Celda para el porcentaje de asistencia de la categoría
  let celdaAsistencia = document.createElement("td");
  celdaAsistencia.innerHTML = percentageAttendance + "%";
  fila.appendChild(celdaAsistencia);

  // Agregar la fila a la tabla
  tablaCategorias.appendChild(fila);
});





/////////////////////////////////////////////////////////////////
//Past events statistics by category




let tablaPast = document.getElementById("tabla-past");

// Paso 1: Calcular la asistencia por categoría
const attendanceByCategory = {};
pastEvents.forEach(event => {
  const category = event.category;
  if (!attendanceByCategory[category]) {
    attendanceByCategory[category] = {
      totalAttendance: event.assistance,
      numEvents: 1
    };
  } else {
    attendanceByCategory[category].totalAttendance += event.assistance;
    attendanceByCategory[category].numEvents++;
  }
});

// Paso 2: Crear las filas de la tabla para cada categoría y sus ganancias y porcentaje de asistencia
Object.keys(attendanceByCategory).forEach(categoria => {
  let fila = document.createElement("tr");

  // Celda para la categoría
  let celdaCategoria = document.createElement("td");
  celdaCategoria.innerHTML = categoria;
  fila.appendChild(celdaCategoria);

  // Calcular las ganancias de la categoría
  let ganancias = 0;
  pastEvents.forEach(event => {
    if (event.category === categoria) {
      ganancias += event.price * event.assistance;
    }
  });

  // Celda para las ganancias de la categoría
  let celdaGanancias = document.createElement("td");
  celdaGanancias.innerHTML = "$" + ganancias;
  fila.appendChild(celdaGanancias);

  
  
  
  //Porcentaje de asistencia Past Events
  const { totalAttendance, numEvents } = attendanceByCategory[categoria];
  const totalCapacity = pastEvents
    .filter(event => event.category === categoria)
    .reduce((total, event) => total + event.capacity, 0);
  const percentageAttendance = ((totalAttendance / ( totalCapacity)) * 100).toFixed(2);

  // Celda para el porcentaje de asistencia de la categoría
  let celdaAsistencia = document.createElement("td");
  celdaAsistencia.innerHTML = percentageAttendance + "%";
  fila.appendChild(celdaAsistencia);

  // Agregar la fila a la tabla
  tablaPast.appendChild(fila);
});

}






