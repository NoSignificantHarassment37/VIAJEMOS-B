const ul = document.getElementById('list');

const url = `Usuarios/ObtenerHabitaciones`;

const response = await fetch(url);

const habitaciones = response.json();
console.log(``);

habitaciones.forEach(habitacion => {
    const li = document.createElement('li');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const ulAnidado = document.createElement('ul');
    ul.appendChild(li);
});