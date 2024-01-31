export function mostrarAlerta(mensaje) {
    const alerta = document.querySelector('.alert-danger');
    if (!alerta) {
      const alerta = document.createElement('div');
  
      alerta.classList.add('alert', 'alert-danger', 'border', 'border-danger', 'text-danger', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
  
      alerta.innerHTML = `
              <strong class="font-bold">Error!</strong>
              <span class="d-block d-sm-inline">${mensaje}</span>
          `;
  
      const contenedor = document.querySelector('#miContenedor');
      contenedor.appendChild(alerta);
  
      setTimeout(() => {
        alerta.remove();
      }, 3000);
    }
  }
  