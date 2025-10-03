const form = document.getElementById('form');
const ul = document.getElementById('resultados');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const obj = Object.fromEntries(formData.entries());

    try {
        const url = `Usuarios/Introducir`;

        const response = await fetch(url, {
            method: `POST`,
            headers: {
                "Content-type": `application/json`
            },
            body: JSON.stringify(obj)
        });

        const resultado = await response.json();

        const li = document.createElement('li');
        li.textContent = `Respuesta: ${resultado.mensaje}`;

        ul.appendChild(li);
    } catch (error) {
        const li = document.createElement('li');
        li.textContent = `Error: ${error}`;

        ul.appendChild(li);
    }
})