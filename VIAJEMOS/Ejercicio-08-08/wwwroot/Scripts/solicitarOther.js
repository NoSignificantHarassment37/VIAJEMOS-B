async function solicitar() {
    const response = await fetch("Usuarios/ObtenerUsuarios");

    const datos = await response.json();

    return datos;
}

const button = document.getElementById('boton');

const ul = document.getElementById('otherUl');

button.addEventListener('click', async () => {
    const response = await solicitar();

    console.log(Array.isArray(response));

    ul.replaceChildren();

    response.forEach((user) => {
        const li = document.createElement('li');
        li.textContent = user.name;

        ul.appendChild(li);
    })
});