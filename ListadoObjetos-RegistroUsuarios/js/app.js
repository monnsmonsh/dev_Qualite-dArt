import { obtenerServicios, eliminarServicio } from './API.js';

(function () {
  const listado = document.querySelector('#listado-servicios');
  listado.addEventListener('click', confirmarEliminar);

  document.addEventListener('DOMContentLoaded', mostrarServicios);

  async function mostrarServicios() {
    const servicios = await obtenerServicios();

    servicios.forEach((servicio) => {
      const { nombre, telefono, evento, direccion, fecha, horarioDesde, horarioHasta, comentario, estatus, id } = servicio;
      const row = document.createElement('tr');

      row.innerHTML += `
                <td class="px-6 py-4 border-bottom">${nombre}</td>
                <td class="px-6 py-4 border-bottom">${telefono}</td>
                <td class="px-6 py-4 border-bottom">${evento}</td>
                <td class="px-6 py-4 border-bottom">${direccion}</td>
                <td class="px-6 py-4 border-bottom">${fecha}</td>
                <td class="px-6 py-4 border-bottom">${horarioDesde} - ${horarioHasta}</td>
                <td class="px-6 py-4 border-bottom">${comentario}</td>
                <td class="px-6 py-4 border-bottom">${estatus}</td>
                <td class="px-6 py-4 border-bottom">
                    <a href="editar-servicio.html?id=${id}" class="text-primary mr-3">Editar</a>
                    <a href="#" data-servicio="${id}" class="text-danger eliminar">Eliminar</a>
                </td>
            `;

      listado.appendChild(row);
    });
  }

  async function confirmarEliminar(e) {
    if (e.target.classList.contains('eliminar')) {
      const servicioId = parseInt(e.target.dataset.servicio);
      console.log(servicioId);
      const confirmar = confirm('¿Deseas eliminar este servicio?');

      if (confirmar) {
        await eliminarServicio(servicioId);
      }
    }
  }
})();
