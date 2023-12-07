import axios from 'axios'

export const getAllClientes = () => {
    return axios.get('http://127.0.0.1:8000/Serializer/api/ClienteCliente/')
}