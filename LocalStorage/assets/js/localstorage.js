// Variables
const formulario = document.querySelector('#formulario');

// Event Listeners
function eventListeners() {
    formulario.addEventListener('submit', iniciarSesion);
}

// Funciones
async function iniciarSesion(e) {
    e.preventDefault();

    // Obtener el valor de los campos
    const usuario = document.querySelector('#usuario').value;
    const contrasena = document.querySelector('#contrasena').value;

    // Validar campos vacíos
    if (usuario === '' || contrasena === '') {
        mostrarError('Por favor, completa todos los campos.');
        return;
    }

    // Realizar la autenticación
    const autenticado = await autenticarUsuario(usuario, contrasena);

    if (autenticado) {
        // Almacenar credenciales en Local Storage
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('contrasena', contrasena);
        // Redireccionar al usuario al panel de Control
        window.location.href = './index.html';
    } else {
        mostrarError('Usuario o contraseña incorrectos.');
    }
}

async function autenticarUsuario(usuario, contrasena) {
    try {
        // Realizar la solicitud al servidor JSON
        const response = await fetch('http://localhost:4000/usuarios');
        const usuarios = await response.json();

        // Validar el inicio de sesión
        const autenticado = usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);
        return autenticado;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        return false;
    }
}

function mostrarError(error) {
    // Crear elemento
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error', 'alert-danger', 'border', 'border-danger', 'text-danger', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

    // Insertar contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Desaparecer alerta
    setTimeout(() => {
        mensajeError.remove();
    }, 2000);
}

// Llamar a la función eventListeners para inicializar los event listeners
eventListeners();
