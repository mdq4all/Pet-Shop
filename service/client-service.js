
const listaClientes = () => fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
    return fetch('http://localhost:3000/perfil',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, email, id: uuid.v4()})
    });
};

const eliminarCliente = (id) => {
      return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'DELETE',
    })
};

const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, email})
    });
}

const detalleCliente = (id) => fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
}


