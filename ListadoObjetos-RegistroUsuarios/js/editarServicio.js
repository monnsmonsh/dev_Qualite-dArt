import { obtenerServicio, editarServicio } from './API.js';
import { mostrarAlerta } from './funciones.js';

(function () {
  const nombreInput = document.querySelector('#nombre');
  const telefonoInput = document.querySelector('#telefono');
  const eventoInput = document.querySelector('#evento');
  const direccionInput = document.querySelector('#direccion');
  const fechaInput = document.querySelector('#fecha');
  const horarioDesdeInput = document.querySelector('#horarioDesde');
  const horarioHastaInput = document.querySelector('#horarioHasta');
  const comentarioInput = document.querySelector('#comentario');
  const estatusInput = document.querySelector('#estatus');
  const idInput = document.querySelector('#id');

  document.addEventListener('DOMContentLoaded', async () => {
    // Verificar si el servicio existe
    const parametrosURL = new URLSearchParams(window.location.search);
    const idServicio = parseInt(parametrosURL.get('id'));

    const servicio = await obtenerServicio(idServicio);
    mostrarServicio(servicio);

    // Registra el formulario
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarServicio);
  });

  function mostrarServicio(servicio) {
    const { nombre, telefono, evento, direccion, fecha, horarioDesde, horarioHasta, comentario, estatus, id } = servicio;

    nombreInput.value = nombre;
    telefonoInput.value = telefono;
    eventoInput.value = evento;
    direccionInput.value = direccion;
    fechaInput.value = fecha;
    horarioDesdeInput.value = horarioDesde;
    horarioHastaInput.value = horarioHasta;
    comentarioInput.value = comentario;
    estatusInput.value = estatus;
    idInput.value = id;
  }

  async function validarServicio(e) {
    e.preventDefault();
    const servicio = {
      nombre: nombreInput.value,
      telefono: telefonoInput.value,
      evento: eventoInput.value,
      direccion: direccionInput.value,
      fecha: fechaInput.value,
      horarioDesde: horarioDesdeInput.value,
      horarioHasta: horarioHastaInput.value,
      comentario: comentarioInput.value,
      estatus: estatusInput.value,
      id: parseInt(idInput.value),
    };
    if (validar(servicio)) {
      mostrarAlerta('Todos los campos son obligatorios');
      return;
    }

    await editarServicio(servicio);
    window.location.href = 'index.html';
  }

  function validar(obj) {
    return !Object.values(obj).every((element) => element !== '');
  }
})();
