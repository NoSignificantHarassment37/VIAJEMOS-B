const paquetesVacacionales = document.getElementById('paquetes-vacacionales');
const hoteles = document.getElementById('hoteles');
const circuitosTours = document.getElementById('circuitos-y-grandes-tours');
const vuelosHotel = document.getElementById('vuelos-hotel');

const paquetesVacacionalesForm = document.getElementById('table__form-1-container');
const hotelesForm = document.getElementById('table__form-2-container');
const circuitosToursForm = document.getElementById('table__form-3-container');
const vuelosHotelForm = document.getElementById('table__form-4-container');

const tableNav = document.querySelector(`.table__navigation-container`);
const tableHeaderElements = Array.from(tableNav.children);

function showOnly(a, b) {
    [paquetesVacacionalesForm, hotelesForm, circuitosToursForm, vuelosHotelForm].forEach(form => form.style.display = form === a ? 'block' : 'none');
    [paquetesVacacionales, hoteles, circuitosTours, vuelosHotel].forEach(btn => {
        btn.style.backgroundColor = btn === b ? `#004d80` : `#3399ff`;
        btn.style.transform = btn === b ? `scale(1.1)` : `scale(1.0)`
    });
}

paquetesVacacionales.addEventListener('click', () => {
    showOnly(paquetesVacacionalesForm, paquetesVacacionales);
});

hoteles.addEventListener('click', () => {
    showOnly(hotelesForm, hoteles);
});

circuitosTours.addEventListener('click', () => {
    showOnly(circuitosToursForm, circuitosTours);
});

vuelosHotel.addEventListener('click', () => {
    showOnly(vuelosHotelForm, vuelosHotel);
});