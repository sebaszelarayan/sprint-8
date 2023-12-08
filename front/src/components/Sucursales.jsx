import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllSucursal,getAllDirecciones } from "../api/Clientes.api";
export function BranchList() {
  const [Sucursal, setSucursal] = useState([]);
  const [Direcciones, setDirecciones] = useState([]);

  useEffect(() => {
    async function LoadClientes() {

      const suc = await getAllSucursal();
      setSucursal(suc.data);

      const dir = await getAllDirecciones();
      setDirecciones(dir.data);
   
    }
    LoadClientes();
  }, []);
  return (
    
    <div className="container">
      <table className="table table-bordered table-sm text-center table-striped table-hover">
        <thead>
        <h1>Sucursales</h1>

        <tr>
            <th>Nombre de Sucursal</th>
            <th>Numero de sucursal</th>
            <th>Pais</th>
            <th>Provincia</th>
            <th>Ciudad</th>
            <th>Calle</th>
            <th>Numero</th>
        </tr>
        </thead>
        {Sucursal.map((sucursales) => (
          <tbody>
            <tr key={sucursales.branch_id}>
                <td>{sucursales.branch_name}</td>
                <td>{sucursales.branch_number}</td>
                <td>{Direcciones.map((direcciones)=>direcciones.direccion_id==sucursales.direccion && direcciones.pais)}</td>
                <td>{Direcciones.map((direcciones)=>direcciones.direccion_id==sucursales.direccion && direcciones.provincia)}</td>
                <td>{Direcciones.map((direcciones)=>direcciones.direccion_id==sucursales.direccion && direcciones.ciudad)}</td>
                <td>{Direcciones.map((direcciones)=>direcciones.direccion_id==sucursales.direccion && direcciones.calle)}</td>
                <td>{Direcciones.map((direcciones)=>direcciones.direccion_id==sucursales.direccion && direcciones.numero)}</td>
            </tr>
            </tbody>
            
        
        ))}
      </table>
      </div>
    
  );
}