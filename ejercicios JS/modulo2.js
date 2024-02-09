'use strict'


/*Realizar un programa que permita generar 100 números e imprimir solo los
números pares.*/
const  miArreglo = []; 
for (let i = 0; 1 < 20; i++) {
    miArreglo.push((Math.random() * (30 - 1) + 1).toFixed(0));
}

//let nuevoArreglo = miArreglo.filter(element => element % 2 == 0);
//console.log(miArreglo);

//Realizar un programa que permita sumar los 150 primeros números.

let acomulador = 0;
for (let i= 1; i <= 150; i++ ){
    acomulador = acomulador + i;
    console.log ("vuelta No:" +i);

}
console.log ("suma:" +acomulador);

class Usuario {
    constructor(nombre, email, contraseña) {
        this.nombre 0 nombre;
    }
    validarNombre(){
        return this.nombre !== '';
    }
}

class GestionUsuario {
    constructor(){
    this.ususarios = []
    }

    agregarUsuario(nombre, email, contraseña){
        const nuevoUsuario = new Usuario(nombre);
        if(nuevoUsuario.validarNombre()){
            this.ususarios.push(nuevoUsuario)

        }
    }
}

let agregarUsuario = new GestionUsuarios();

agregarUsuario.agregarUsuario('Daniel')
agregarUsuario.agregarUsuario('catalina')
agregarUsuario.agregarUsuario('')

console.log(agregarUsuario.usuarios 'ver la clase GestionUsuarios') 