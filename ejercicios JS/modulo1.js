'use strict'
//Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onzas

let litro = 5;

const LitrosToCentilitros = litro * 100;

console.log('valor de litros a centilitros', LitrosToCentilitros)

const LitrosToDeclitros = litro * 10;

console.log('valor de litros a decilitros', LitrosToDeclitros)


const LitrosToGalones = litro * 0.264172;

console.log('valor de litros a galones', LitrosToGalones)


const LitrosToOnzas = litro * 33.814;

console.log('valor de litros a onzas', LitrosToOnzas)

//Realizar el algoritmo que realice las 4 operaciones básicas para dos númerosde entrada.
let numero1 = 20;
let numero2 = 4;

const suma =  numero1 + numero2;
console.log('total de la suma de dos nuemros de entrada', suma)

const resta =  numero1 - numero2;
console.log('total de la resta de dos nuemros de entrada', resta)

const multiplicacion =  numero1 * numero2;
console.log('total de la multiplicacion de dos nuemros de entrada', multiplicacion)

const division =  numero1 / numero2;
console.log('total de la division de dos nuemros de entrada', division)

//Realizar el algoritmo que convierta grados centígrados en Fahrenheit y viceversa.









/*Realizar el algoritmo que calcule el valor a pagar por algunos galones de gasolina sisabemos que cada centilitro 
cuesta 25 pesos. Imprimir el valor a pagar y la cantidadde gasolina despachada en litros*/
let galon = 5;

const GalonsToCentilitros = galon * 378.541;

console.log('valor de Galon a centilitros', GalonsToCentilitros)

const valorgasolina = 25;
const valorgalones = GalonsToCentilitros * valorgasolina  ;

console.log('valor a pagar galones de gasolina', valorgalones )








/*Realizar un algoritmo que calcule el salario de un empleado según los siguientes parámetros.
a.Si gana menos de 699.999, Descuento de pensión =2%, y más un Aux. de transporte= 6%.
b. Si gana entre 700.000 y 999.999, Descuento de pensión =4%, Subsidio familiar = 12.000,sino le pagan el mismo salario.
c. Si gana más del millón Descuento de pensión =6%.*/

let descuentopension1, descuentopension2, descuentopension3, auxiliodetransporte, salariototala, subsidiofamiliar, salariototalb, salariototalc;

let sueldo1 = 699999;
let sueldo2 = 700000;
let sueldo3 = 999999;
let sueldo4 = 1000000;
let salarioempleado = 999999;

if (salarioempleado < sueldo1) {
   descuentopension1 = salarioempleado * 0.02
   auxiliodetransporte = salarioempleado * 0.06
    
    
}
else  if ((salarioempleado >= sueldo2) && (salarioempleado <= sueldo3)) { 
    descuentopension2 = salarioempleado * 0.04
    subsidiofamiliar = 12000

}
else  if (salarioempleado > sueldo4) {
    descuentopension3 = salarioempleado * 0.06

}
salariototala = salarioempleado - descuentopension1 + auxiliodetransporte
salariototalb = salarioempleado - descuentopension2 + subsidiofamiliar
salariototalc = salarioempleado - descuentopension3 

console.log('descuento de pension1', descuentopension1)
console.log('descuento de pension2', descuentopension2)
console.log('descuento de pension3', descuentopension3)
console.log('auxilio de transporte', auxiliodetransporte)
console.log('sbsidio familiar', subsidiofamiliar)
console.log('salarioTotal a', salariototala)
console.log('salarioTotal b', salariototalb)
console.log('salarioTotal c', salariototalc)




  
 

    
