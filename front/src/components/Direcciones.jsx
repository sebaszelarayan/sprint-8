import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllDirecciones } from "../api/Clientes.api";
import { DireccionesForms } from "./DireccionesForm";
import { Navigate, useNavigate, useNavigationType } from 'react-router-dom';

export function DireccionesList() {
  const [Direcciones, setDirecciones] = useState([]);

  useEffect(() => {
    async function LoadClientes() {

      const dir = await getAllDirecciones();
      setDirecciones(dir.data);
   
    }
    LoadClientes();
  }, []);
  const navigate = useNavigate()
  return (
    
    <div className="container">
      <table className="table table-bordered table-sm text-center table-striped table-hover">
        <thead>
        <h1>Direcciones</h1>

        <tr>
            <th>Calle</th>
            <th>Numero</th>
            <th>Ciudad</th>
            <th>Provincia</th>
            <th>Pais</th>
        </tr>
        </thead>
        {Direcciones.map((direcciones) => (
          <tbody>
            <tr key={direcciones.direccion_id} onClick={()=>{navigate("/Direcciones/"+ direcciones.direccion_id )}}>
                <td>{direcciones.calle}</td>
                <td>{direcciones.numero}</td>
                <td>{direcciones.provincia}</td>
                <td>{direcciones.ciudad}</td>
                <td>{direcciones.pais}</td>
                <td className="col-sm-1" ><img src="../../img/editar.png" alt="editar" className="col-sm-4 mx-auto" /></td>

            </tr>
            </tbody>
            
        
        ))}
      </table>
      <DireccionesForms/>
      </div>
    
  );
}