// Agrega un "escuchador de eventos" al botón con id 'mostrarMensaje' que se activa al hacer clic
document.getElementById('mostrarMensaje').addEventListener('click', function(){ // Obtiene el elemento con id 'mensaje
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = 'Gracias por visualizar mi Hoja de Vida';// Cambia el contenido del elemento a un mensaje de agradecimiento
    mensaje.style.opacity = 1;  
// Después de 3 segundos, vuelve a ocultar el mensaje reduciendo la opacidad a 0
    setTimeout(() => {
        mensaje.style.opacity = 0;
    }, 3000);
});

// Función para alternar la visibilidad del menú en pantallas pequeñas
  function toggleMenu() { // Obtiene el elemento del menú por su id
    const menu = document.getElementById("menu");
    menu.classList.toggle("show"); // Alterna la clase "show" para mostrar o ocultar el menú
}

  function mostrarMensajeBienvenida(nombre) {
    const contenedor = document.getElementById("mensaje-bienvenida");
    contenedor.textContent = `¡Hola, ${nombre}! Bienvenido a mi Hoja de Vida.`;
  }
  mostrarMensajeBienvenida("Visitante");

  document.body.classList.add("modo-claro"); // Agrega la clase "modo-claro" al <body> por defecto para iniciar con tema claro
    // Función para cambiar entre modo claro y modo oscuro
  function cambiarModo() {
    document.body.classList.toggle("modo-claro");  // Alterna la clase "modo-claro" en el <body>
    document.body.classList.toggle("modo-oscuro"); // Alterna la clase "modo-oscuro" en el <body>
    }
