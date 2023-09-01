// Función para obtener el puntaje desde el almacenamiento local
function obtenerPuntaje() {
    const puntajeGuardado = localStorage.getItem('puntaje');
    return puntajeGuardado ? parseInt(puntajeGuardado) : 0;
}

//Guardar el puntaje 
function guardarPuntaje(puntaje) {
    localStorage.setItem('puntaje', puntaje.toString());
}

//DOM
function mostrarPuntaje() {
    const puntajeSpan = document.getElementById('puntaje');
    puntajeSpan.textContent = obtenerPuntaje();
}

const buttons = document.querySelectorAll('.realize-button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const puntajeActual = obtenerPuntaje();
        const nuevoPuntaje = puntajeActual + 1;
        guardarPuntaje(nuevoPuntaje);
    });
});

document.getElementById('verificar-puntaje').addEventListener('click', () => {
    const puntajeContainer = document.getElementById('puntaje-container');
    puntajeContainer.style.display = 'block';
    mostrarPuntaje();
});

// Confites
function crearConfite() {
    const confite = document.createElement('div');
    confite.classList.add('confite');
    confite.style.left = Math.random() * 100 + 'vw'; 
    confite.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`; // Color aleatorio
    document.getElementById('confites-container').appendChild(confite);
    setTimeout(() => {
        confite.remove(); 
    }, 3000); 
}

document.getElementById('verificar-puntaje').addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        crearConfite();
    }
});

