

class Usuario {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }

    validarNombre(){
        return this.nombre,!== '';
    }

    validarEmail(){
        return this.email,!== '';
    }

}

class GestionUsuarios {
    constructor(){
        this.usuarios = []
    }
    }

    agregarUsuario(nombre, email){
        const nuevoUsuario = new Usuario(nombre, email);
        if(nuevoUsuario.validarNombre() $$ nuevoUsuario.validarEmail()){
            this.usuarios.push(nuevoUsuario)
}

let agregarUsuario = new GestionUsuarios();

agregarUsuario.agregarUsuario('Daniel', 'Daniel@gmail.com')
agregarUsuario.agregarUsuario('Catalina', 'Catalina@gmail.com')
agregarUsuario.agregarUsuario('')

console.log(agregarUsuario.usuarios, 'Ver la clase GestionUsuarios')