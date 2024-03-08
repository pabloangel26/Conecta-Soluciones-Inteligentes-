class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    validarNombre() {
        return this.nombre !== '';
    }

    validarEmail() {
        return this.email !== '';
    }
}

class GestionUsuarios {
    constructor() {
        this.usuarios = [];
    }

    agregarUsuario(nombre, email) {
        const nuevoUsuario = new Usuario(nombre, email);
        if (nuevoUsuario.validarNombre() && nuevoUsuario.validarEmail()) {
            this.usuarios.push(nuevoUsuario);
        }
    }
}

let gestionUsuarios = new GestionUsuarios();

gestionUsuarios.agregarUsuario('Daniel', 'Daniel@gmail.com');
gestionUsuarios.agregarUsuario('Catalina', 'Catalina@gmail.com');
/*gestionUsuarios.agregarUsuario('', '');  // Se puede agregar un usuario con nombre y correo vacíos*/

console.log(gestionUsuarios.usuarios, 'Ver la clase GestionUsuarios');