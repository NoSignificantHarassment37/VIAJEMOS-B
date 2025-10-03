const boton = document.getElementById('enviar');
const input = document.getElementById('input-nombre');

async function Enviar(url, obj) {

    try {
        const response = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        return response;

    } catch(error) {
        console.log(`Error: ${error}`);
    }
}

boton.addEventListener('click', () => {
    const valor = input.value.trim();
    if (valor === null || valor === '') {
        alert('Introduce algo.');
        return;
    }
    if (valor.length < 5 || valor.length > 50) {
        alert(`Tu nombre debe tener mas de 5 caracteres y menos de 50.`)
        return;
    }

    const url = "Usuarios/Introducir";
    const obj = {
        name: valor
    }

    const response = Enviar(url, obj);

    console.log(response);
})