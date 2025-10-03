class Empleado extends Persona {
    constructor(nombre,edad,nroTelefono,email,cargo) {
        super(nombre, edad, nroTelefono, email);

        if (typeof cargo !== "string") {
            throw new TypeError("El cargo no fue string.");
        }
        if (cargo.length > 50) {
            throw new RangeError("El cargo no puede tener mas de 50 caracteres.");
        }
        this.#cargo = cargo;
    }
    #cargo = "";
}