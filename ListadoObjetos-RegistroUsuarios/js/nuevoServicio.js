import { nuevoServicio } from './API.js';
import { mostrarAlerta } from './funciones.js';

(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarServicio);

    async function validarServicio(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const telefono = document.querySelector('#telefono').value;
        const evento = document.querySelector('#evento').value;
        const direccion = document.querySelector('#direccion').value;
        const fecha = document.querySelector('#fecha').value;
        const horarioDesde = document.querySelector('#horarioDesde').value;
        const horarioHasta = document.querySelector('#horarioHasta').value;
        const comentario = document.querySelector('#comentario').value;
        const estatus = document.querySelector('#estatus').value;

        const servicio = {
            nombre, 
            telefono, 
            evento,
            direccion,
            fecha,
            horarioDesde,
            horarioHasta,
            comentario,
            estatus
        }

        if( validar(servicio) ) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        await nuevoServicio(servicio);
        window.location.href = 'index.html';
    }

    function validar(obj) {
        return !Object.values(obj).every(element => element !== '');
    }
})();
