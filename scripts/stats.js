// Obtener la tabla y su cuerpo
 /* const tabla = document.querySelector('table');
const cuerpoTabla = tabla.querySelector('tbody');

// Datos que deseas agregar debajo de la primera fila
const datosFila1 = [
  { evento: 'Evento 1', asistencia: '90%', capacidad: '1000' },
  { evento: 'Evento 2', asistencia: '50%', capacidad: '500' },
  { evento: 'Evento 3', asistencia: '75%', capacidad: '800' }
];

// Crear una nueva fila
const nuevaFila = document.createElement('tr');

// Iterar sobre los datos y crear los elementos <td>
for (let i = 0; i < datosFila1.length; i++) {
  const celda = document.createElement('td');
  celda.textContent = datosFila1[i];
  nuevaFila.appendChild(celda);
}

// Insertar la nueva fila debajo de la primera
cuerpoTabla.insertBefore(nuevaFila, cuerpoTabla.children[2]); 




// Datos que deseas agregar a la tabla
 const datos = [
  { evento: 'Evento 1', asistencia: '90%', capacidad: '1000' },
  { evento: 'Evento 2', asistencia: '50%', capacidad: '500' },
  { evento: 'Evento 3', asistencia: '75%', capacidad: '800' }
];

// Iterar sobre los datos y crear los elementos <tr> y <td>


for (let i = 0; i < datos.length; i++) {
  const fila = document.createElement('tr');
  const celdaEvento = document.createElement('td');
  const celdaAsistencia = document.createElement('td');
  const celdaCapacidad = document.createElement('td');

  celdaEvento.textContent = datos[i].evento;
  celdaAsistencia.textContent = datos[i].asistencia;
  celdaCapacidad.textContent = datos[i].capacidad;

  fila.appendChild(celdaEvento);
  fila.appendChild(celdaAsistencia);
  fila.appendChild(celdaCapacidad);
  cuerpoTabla.appendChild(fila); 
}  */



// Seleccionar los elementos HTML donde se insertarán los datos dinámicamente



// Obtener el elemento de la tabla
/* var table = document.getElementsByTagName('table')[0];

// Obtener la celda correspondiente a "Events with the highest percentage of attendance"
var cell = table.rows[2].cells[0];

// Ordenar los eventos por porcentaje de asistencia de mayor a menor
var sortedEvents = data.events.sort(function(a, b) {
    return b.attendancePercentage - a.attendancePercentage;
});

// Crear una cadena con los nombres de los eventos con mayor porcentaje de asistencia
var topEvents = '';
for (var i = 0; i < data.events.length; i++) {
    if (i < sortedEvents.length) {
        topEvents += sortedEvents[i].name + '<br>';
    }
}

// Asignar la cadena a la celda correspondiente
cell.innerHTML = topEvents; */
////////////////////////////////////////////////////////


        


/* // Ordenar los eventos por porcentaje de asistencia
data.events.sort((a, b) => b.assistance / b.capacity - a.assistance / a.capacity);

// Obtener el elemento de la tabla donde se agregarán las celdas
const tableBody = document.querySelector('tbody');

// Crear una celda dinámicamente para cada evento
data.events.forEach(event => {
  const percentage = ((event.assistance / event.capacity) * 100).toFixed(1);
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.textContent = `${event.name} (${percentage}%)`; // concatenar el porcentaje con el nombre del evento
  const percentageCell = document.createElement('td');
  nameCell.textContent = event.name;
  percentageCell.textContent = `${percentage}%`;
  row.appendChild(nameCell);
  row.appendChild(percentageCell);
  tableBody.appendChild(row);
});
 */

function crearCards(datos){

//Events with the highest percentage of attendance

datos.events.sort((a, b) => b.assistance / b.capacity - a.assistance / a.capacity);

// Obtener el elemento de la tabla donde se agregarán las celdas
const tableBody = document.querySelector('tbody#max-min-values');

const highestAttendanceTable = document.querySelector('#highest-attendance');



// Crear una celda dinámicamente para cada evento
datos.events.forEach((event,index) => {
  const row = document.createElement('tr');
  const percentage = ((event.assistance / event.capacity) * 100).toFixed(1);
  
  const nameCell = document.createElement('td');
  row.id = "fila" + index;
  nameCell.textContent = `${event.name} (${percentage}%)`; // concatenar el porcentaje con el nombre del evento

  row.appendChild(nameCell);
  //highestAttendanceTable.appendChild(row)
  tableBody.appendChild(row)

});



//Events with the lowest percentage of attendance
datos.events.sort((a, b) => a.assistance / a.capacity - b.assistance / b.capacity);

// Obtener el elemento de la tabla donde se agregarán las celdas
const tBody = document.querySelector('tbody');
const lowestAttendanceTable = document.querySelector('#lowest-attendance');

// Crear una celda dinámicamente para cada evento
datos.events.forEach((event,index) => {
  const percentage = ((event.assistance / event.capacity) * 100).toFixed(1);
  const row = document.querySelector('tr#fila' + index);
  row.innerHTML += `<td>${event.name} (${percentage}% </td> `
  
  
  
  
});



//Evento con mayor capacidad

var mayorEvento = document.getElementById("mayor-evento");

const eventoConMayorCapacidad = datos.events.reduce((acc, event) => {
  if (event.capacity > acc.capacity) {
    return event;
  } else {
    return acc;
  }
});

console.log(eventoConMayorCapacidad);

//const row = document.querySelector('tr#fila1');

mayorEvento = eventoConMayorCapacidad.name + " (" + eventoConMayorCapacidad.capacity + " people)";

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

let categorias = [];
datos.events.forEach(event => {
  if (!categorias.includes(event.category)) {
    categorias.push(event.category);
  }
});

// Crear las filas de la tabla para cada categoría y sus ganancias
categorias.forEach(categoria => {
  let fila = document.createElement("tr");

  // Celda para la categoría
  let celdaCategoria = document.createElement("td");
  celdaCategoria.innerHTML = categoria;
  fila.appendChild(celdaCategoria);
  tablaCategorias.appendChild(fila);

  // Calcular las ganancias de la categoría
  let ganancias = 0;
  upcomingEvents.forEach(event => {
    if (event.category === categoria) {
      ganancias += event.price * event.estimate;
    }
  });

  // Celda para las ganancias
  
 
  
  let celdaGanancias = document.createElement("td");
  celdaGanancias.innerHTML = `$${ganancias}`;
  fila.appendChild(celdaGanancias);

  // Agregar la fila a la tabla
  tablaCategorias.appendChild(fila);
});






/////////////////////////////////////////////////////////////////
//Past events statistics by category

/* let tablaPast = document.getElementById("tabla-past");


datos.events.forEach(event => {
  if (!categorias.includes(event.category)) {
    categorias.push(event.category);
  }
});

// Crear las filas de la tabla para cada categoría y sus ganancias
categorias.forEach(categoria => {
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

  // Celda para las ganancias
  
 
 
  let celdaGanancias = document.createElement("td");
  celdaGanancias.innerHTML = `$${ganancias}`;
  fila.appendChild(celdaGanancias);

  // Agregar la fila a la tabla
  tablaPast.appendChild(fila);


  
}); */




//Porcentaje de asistencia Past Events

// Paso 1
/* const attendanceByCategory = {};
datos.events.forEach(event => {
  const category = event.category;
  if (!attendanceByCategory[category]) {
    attendanceByCategory[category] = event.assistance;
  } else {
    attendanceByCategory[category] += event.assistance;
  }
});

// Paso 2 y 3
for (const category in attendanceByCategory) {
  const totalCapacity = datos.events
    .filter(event => event.category === category)
    .reduce((total, event) => total + event.capacity, 0);
  const totalAttendance = attendanceByCategory[category];
  const percentageAttendance = ((totalAttendance / totalCapacity) * 100).toFixed(2);
  console.log(`${category}: ${percentageAttendance}%`);
} */







//const attendanceByCategory = {};
/* datos.events.forEach(event => {
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

// Paso 2 y 3
for (const category in attendanceByCategory) {
  const { totalAttendance, numEvents } = attendanceByCategory[category];
  const totalCapacity = datos.events
    .filter(event => event.category === category)
    .reduce((total, event) => total + event.capacity, 0);
  const percentageAttendance = ((totalAttendance / (numEvents * totalCapacity)) * 100).toFixed(2);
  console.log(`${category}: ${percentageAttendance}%`);
} */



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

  
  
  
  
  // Calcular el porcentaje de asistencia de la categoría
  const { totalAttendance, numEvents } = attendanceByCategory[categoria];
  const totalCapacity = pastEvents
    .filter(event => event.category === categoria)
    .reduce((total, event) => total + event.capacity, 0);
  const percentageAttendance = ((totalAttendance / (numEvents * totalCapacity)) * 100).toFixed(2);

  // Celda para el porcentaje de asistencia de la categoría
  let celdaAsistencia = document.createElement("td");
  celdaAsistencia.innerHTML = percentageAttendance + "%";
  fila.appendChild(celdaAsistencia);

  // Agregar la fila a la tabla
  tablaPast.appendChild(fila);
});




}






