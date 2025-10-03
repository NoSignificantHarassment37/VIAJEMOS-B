const form = document.getElementById("page-form");

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const datos = new FormData(this);
    const [nombre,edad,fecha] = [datos.get("name"),datos.get("edad"),datos.get("date")];
    const obj = {
        nombre: nombre,
        edad: edad,
        fechaDeNacimiento:fecha
    };
    console.log(obj);
    const objToJson = await JSON.stringify(obj);
    console.log(objToJson);
});