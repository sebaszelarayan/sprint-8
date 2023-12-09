import axios from 'axios'

const ClientesApi = axios.create({ baseURL:'http://127.0.0.1:8000/Serializer/api/ClienteCliente/'})

export const getAllClientes = () =>  ClientesApi.get('/');

export const createClientes = (data) => ClientesApi.post('/', data);


export const getAllDirecciones = () => {
    return axios.get('http://127.0.0.1:8000/Serializer/api/ClienteDirecciones/')
};

export const getDirecciones = (id) => {
    return axios.get('http://127.0.0.1:8000/Serializer/api/ClienteDirecciones/'+id+'/')
};
export const createDirecciones = (direcciones) => {
    return axios.post('http://127.0.0.1:8000/Serializer/api/ClienteDirecciones/',direcciones)
};

export const EliminarDirecciones = (id) => {
    return axios.delete('http://127.0.0.1:8000/Serializer/api/ClienteDirecciones/'+id)
};

export const ActualizarDirecciones = (id,direcciones) => {
    return axios.put('http://127.0.0.1:8000/Serializer/api/ClienteDirecciones/'+id+'/', direcciones)
};

export const getAllSucursal = () => {
    return axios.get('http://127.0.0.1:8000/Serializer/api/ClienteSucursal/')
};
export const getAllTipoCliente = () => {
    return axios.get('http://127.0.0.1:8000/Serializer/api/ClienteTipoCliente/')
};