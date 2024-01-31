const url = "http://localhost:4000/servicios";

export const nuevoServicio = async servicio => {
    try {
        await fetch(url, {
            method: 'POST', 
            body: JSON.stringify(servicio), // data puede ser string o un objeto
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export const obtenerServicios = async () => {
    try {
        const resultado = await fetch(url);
        const servicios = await resultado.json();
        return servicios;
    } catch (error) {
        console.log(error);
    }
}

export const obtenerServicio = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const servicio = await resultado.json();
        return servicio;
    } catch (error) {
        console.log(error);
    }
}


export const editarServicio = async servicio => {
    try {
        await fetch(`${url}/${servicio.id}`, {
            method: 'PUT', 
            body: JSON.stringify(servicio), // data puede ser string o un objeto
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export const eliminarServicio = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}