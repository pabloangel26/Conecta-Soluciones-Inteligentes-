function mostrarDatos() {
    // Obtener valores del formulario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value.toLowerCase();
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validar longitud de los campos
    if (nombre.length > 60 || asunto.length > 60 || mensaje.length > 200) {
alert("Por favor, verifica la longitud de los campos.");
return;
    }

    // Mostrar datos ingresados por el usuario
    var mensajeDatos = `Nombre: ${nombre}\nCorreo electrónico: ${correo}\nAsunto: ${asunto}\nMensaje: ${mensaje}`;
    alert(mensajeDatos);
}