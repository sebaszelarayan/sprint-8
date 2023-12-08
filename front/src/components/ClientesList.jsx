import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllClientes,getAllDirecciones,getAllTipoCliente,getAllSucursal } from "../api/Clientes.api";
export function ClientesList() {
  const [Clientes, setClientes] = useState([]);
  const [Direcciones, setDirecciones] = useState([]);
  const [Sucursal, setSucursal] = useState([]);
  const [TipoCliente, setTipoCliente] = useState([]);

  useEffect(() => {
    async function LoadClientes() {
      const cli = await getAllClientes();
      setClientes(cli.data);

      const dir = await getAllDirecciones();
      setDirecciones(dir.data);

      const suc = await getAllSucursal();
      setSucursal(suc.data);

      const tcl = await getAllTipoCliente();
      setTipoCliente(tcl.data);

      
    }
    LoadClientes();
  }, []);
  return (
    
    <div className="container">
      <table className="table table-bordered table-sm text-center table-striped table-hover">
        <thead>
        
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
            <th>DNI</th>
            <th>Branch</th>
            <th>Pais</th>
            <th>Provincia</th>
            <th>Ciudad</th>
            <th>Calle</th>
            <th>Numero</th>
            <th>Tipo de Cliente</th>
        </tr>
        </thead>
        {Clientes.map((Clientes) => 
          Clientes.customer_id<10 && (
          <tbody>
            <tr key={Clientes.customer_id}>
                <td>{Clientes.customer_name}</td>
                <td>{Clientes.customer_surname}</td>
                <td>{Clientes.dob}</td>
                <td>{Clientes.customer_DNI}</td>
                <td>{Sucursal.map((sucursal)=>sucursal.branch_id==Clientes.branch && sucursal.branch_name)}</td>
                <td>{Direcciones.map((direccion)=> direccion.direccion_id==Clientes.direccion && direccion.pais)}</td>
                <td>{Direcciones.map((direccion)=> direccion.direccion_id==Clientes.direccion && direccion.provincia)}</td>
                <td>{Direcciones.map((direccion)=> direccion.direccion_id==Clientes.direccion && direccion.ciudad)}</td>
                <td>{Direcciones.map((direccion)=> direccion.direccion_id==Clientes.direccion && direccion.calle)}</td>
                <td>{Direcciones.map((direccion)=> direccion.direccion_id==Clientes.direccion && direccion.numero)}</td>
                <td>{TipoCliente.map((tipoCliente)=>tipoCliente.tipo_cliente_id==Clientes.tipo_cliente && tipoCliente.tipo_name)}</td>
            </tr>
            </tbody>
            
        
        ))}
      </table>
      </div>
    
  );
}
