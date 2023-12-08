import axios from 'axios'

export const getAllClientes = () => {
    return axios.get('http://127.0.0.1:8000/Serializer/api/ClienteCliente/')
}
export const getAllDirecciones = () => {
    return axios.get('http://127.0.0.1:8000/Serializer/api/ClienteDirecciones/')
}
export const getAllSucursal = () => {
    return axios.get('http://127.0.0.1:8000/Serializer/api/ClienteSucursal/')
}
export const getAllTipoCliente = () => {
    return axios.get('http://127.0.0.1:8000/Serializer/api/ClienteTipoCliente/')
}