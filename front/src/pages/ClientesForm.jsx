import { useForm } from "react-hook-form"
import { createClientes } from "../api/Clientes.api"
import { useNavigate } from "react-router-dom";
export function ClientesForms(){
    const {register,handleSubmit,formState:{errors}} = useForm();

    const navigate = useNavigate();

    const oneSubmit = handleSubmit(async (data) =>{await createClientes(data); navigate("/ClientesList"); });
    return(
        <form onSubmit={oneSubmit}>
            <div className="card col-md-5 mx-auto" >
                <div className="card-body">
                
                    <h4 className="card-title">Agregar Cliente</h4>
                    <div className="mb-3">
                        <label for="nam" className="form-label">Nombre:</label>
                        <input type="text" className="form-control" name="customer_name" id="nam" placeholder="Nombre" {...register("customer_name",{required:true})} />
                        {errors.customer_name && <span className="text-danger">Nombre es requerido</span>}
                    </div>

                    <div className="mb-3">
                        <label for="ape" className="form-label">Apellido:</label>
                        <input type="text" className="form-control" name="customer_surname" id="ape" placeholder="Apellido" {...register("customer_surname",{required:true})} />
                        {errors.customer_surname && <span className="text-danger">Apellido es requerido</span>}
                    </div>

                    <div className="mb-3">
                        <label for="do" className="form-label">Fecha de Nacimiento:</label>
                        <input type="date" className="form-control" name="dob" id="do" min="1955-01-01" max="2005-12-31" {...register("dob",{required:true})} />
                        {errors.dob && <span className="text-danger">Fecha de Nacimientoes requerido</span>}
                    </div>

                    <div className="mb-3">
                        <label for="dni" className="form-label">DNI:</label>
                        <input type="number" className="form-control" name="customer_DNI" id="dni" placeholder="Ingresar cuando tenga el id de usuario" {...register("customer_DNI",{required:true})} />
                    </div>
        
                    <div className="mb-3"><label for="suc" className="form-label">Sucursal:</label>
                    <input type="number" className="form-control" name="branch" id="suc" placeholder="Sucursal" {...register("branch",{required:true})} />
                    {errors.branch && <span className="text-danger">Sucursal es requerido</span>}
                    </div>

                    <div className="mb-3"><label for="dir" className="form-label">Direccion:</label>
                    <input type="number" className="form-control" name="direccion" id="dir" placeholder="Direccion" {...register("direccion",{required:true})} />
                    {errors.direccion && <span className="text-danger">Direccion es requerido</span>}
                    </div>
        
                    <div className="mb-3"><label for="tcl" className="form-label">Tipo de Cliente:</label>
                    <input type="number" className="form-control" name="tipo_cliente" id="tcl" placeholder="Tipo de Cliente" {...register("tipo_cliente",{required:true})} />
                    {errors.tipo_cliente && <span className="text-danger">Tipo de Cliente es requerido</span>}
                    </div>

                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" >Agregar</button>
                    </div>
                </div>
                
            </div>
    </form>
    )
}