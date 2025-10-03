function esNumeroValido(number){
    return typeof number === "number" && Number.isFinite(number);
}
class Persona{
    constructor(nombre,edad,nroTelefono,email){
        if(typeof nombre !== "string"){
            throw new TypeError("Se esperaba un string como nombre.");   
        }
        if(!nombre.length > 50){
            throw new RangeError("El nombre es demasiado largo.");
        }
        if(!esNumeroValido(edad)){
            throw new TypeError("La edad debe ser un numero valido.");
        }
        if(!esNumeroValido(nroTelefono)){
            throw new TypeError("El numero de telefono debe ser un numero valido.");
        }
        if(typeof email !== "string"){
            throw new TypeError("El email no fue un string.");
        }
        if(!email.length > 100){
            throw new RangeError("El email fue demasiado largo.");
        }
        this.#_nombre = nombre;
        this.#_edad = edad;
        this.#_nroTelefono = nroTelefono;
        this.#_email = email;
    }
    get nombre() {
        return this.#_nombre;
    }
    set nombre(valor) {
        if (typeof valor !== "string") {
            throw new TypeError("El valor a asignar no fue un string.");
        }
        if (valor.length > 50) {
            throw new RangeError("El valor excede los 50 caracteres de longitud.");
        }
        this.#_nombre = valor;
    }
    Saludar(nombre){
        if(typeof nombre !== "string"){
            throw new TypeError("El nombre no fue un string.");
        }
        console.log(`Hola, ${nombre}`);
    }
    #_nombre = "";
    #_edad = 0;
    #_nroTelefono = 0;
    #_email = "";
}