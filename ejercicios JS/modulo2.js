/*Realizar un programa que permita generar 100 números e imprimir solo los
números pares*/

function imprimirNumerosPares() {
  let numerosPares = [];

  for (let i = 1; i <= 100; i++) {
    // Generar números aleatorios entre 1 y 100
    let numero = Math.floor(Math.random() * 100) + 1;

    // Verificar si el número es par
    if (numero % 2 === 0) {
      numerosPares.push(numero);
    }
  }

  // Mostrar los números pares con alert()
  alert("Números pares generados:\n" + numerosPares.join(", "));
}

// Llamar a la función
imprimirNumerosPares();


//Realizar un programa que permita sumar los 150 primeros números.
function sumarPrimerosNumeros(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
    suma += i;
    }
    return suma;
}
const numeroElementos = 150;
const resultado = sumarPrimerosNumeros(numeroElementos);
console.log(`La suma de los primeros ${numeroElementos} números es: ${resultado}`);

/*Leer 10 precios de productos y calcular cuánto cuestan los 10 productos*/
function leerPrecios() {
  const precios = [];
  for (let i = 1; i <= 10; i++) {
    let precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
    precios.push(precio);
  }
  return precios;
}

// Función para calcular la suma de los precios
function calcularTotal(precios) {
  let total = 0;
  for (const precio of precios) {
    total += precio;
  }
  return total;
}

// Función principal para ejecutar el programa
function main() {
  console.log("Ingrese los precios de los 10 productos:");
  const precios = leerPrecios();
  const total = calcularTotal(precios);
  console.log(`El costo total de los 10 productos es: ${total}`);
}

// Ejecutar el programa
main();


/*Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó,
dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5.*/
function leerNotas() {
  const notas = [];
  for (let i = 1; i <= 12; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota del estudiante ${i}:`));
    notas.push(nota);
  }
  return notas;
}

// Función para contar la cantidad de aprobados y reprobados
function contarAprobadosReprobados(notas) {
  let aprobados = 0;
  let reprobados = 0;

  for (const nota of notas) {
    if (nota >= 0 && nota <= 5) {
      reprobados++;
    } else if (nota > 5 && nota <= 10) {
      aprobados++;
    } else {
      console.log(`La nota ${nota} no está en el rango válido (0-10).`);
    }
  }

  return { aprobados, reprobados };
}

// Función principal para ejecutar el programa
function main() {
  console.log("Ingrese las notas de los 12 estudiantes:");
  const notas = leerNotas();
  const resultados = contarAprobadosReprobados(notas);

  console.log(`Aprobados: ${resultados.aprobados}`);
  console.log(`Reprobados: ${resultados.reprobados}`);
}

// Ejecutar el programa
main();

