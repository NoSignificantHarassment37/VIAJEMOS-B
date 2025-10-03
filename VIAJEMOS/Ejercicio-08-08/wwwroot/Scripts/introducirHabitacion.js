const ubicacion = document.getElementById('ubicacion');
const numeroNinos = document.getElementById('ninos');
const numeroAdultos = document.getElementById('adultos');

const form = document.getElementById('form');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    if (formData.get('ubicacion').length > 50) {
        alert("La ubicacion es demasiado larga, considere disminuir la longitud.");
        return;
    }
    if (formData.get('ninos') < 0) {
        alert("La cantidad de niños no puede ser negativa.")
    }
    if (formData.get('adultos') < 1) {
        alert("La cantidad de adultos no puede ser menor a 1.")
    }
    const obj = {
        ubicacion: {
            direccion: formData.get('ubicacion'),
        },
        ninos: formData.get('ninos'),
        adultos: formData.get('adultos')
    }

    let response
    let result;

    try {
        const url = "https://localhost:7036/Habitaciones/IntroducirHabitacion";
        response = await fetch(url, {
            method: "POST",
            body: formData
        })
    } catch (error) {
        console.log(`Error: ${error}`);
    }
        result = await response.json();
        console.log(result.message);
    
});