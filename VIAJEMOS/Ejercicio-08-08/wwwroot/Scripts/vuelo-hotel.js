document.getElementById('calcForm').addEventListener('submit', e => {
    e.preventDefault();
    const flight = parseFloat(document.getElementById('flightCost').value) || 0;
    const hotel = parseFloat(document.getElementById('hotelCost').value) || 0;
    const separado = flight + hotel;
    const ahorro = separado * 0.20; 
    const paquete = separado - ahorro;
    document.getElementById('calcResult').textContent =
        `Reservando Vuelo + Hotel pagarías $${paquete} (ahorras $${ahorro}).`;
});

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".featured-packages .btn-primary");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("¡Tu paquete Vuelo + Hotel ha sido seleccionado! 🚀 Te redirigiremos al proceso de reserva.");
            // Aquí podrías redirigir a otra página o abrir un modal
        });
    });
});