import { useForm } from "react-hook-form"
import { createDirecciones ,EliminarDirecciones,ActualizarDirecciones ,getDirecciones } from "../api/Clientes.api"
import { useNavigate,useParams } from "react-router-dom";
import { useEffect } from "react";

export function DireccionesForms(){
    const {register,handleSubmit,formState:{errors},setValue} = useForm();

    const navigate = useNavigate();

    const params  = useParams();

    const oneSubmit = handleSubmit(async (data) =>{
    if (params.id) { 
        await ActualizarDirecciones(params.id,data)
    }else{
        await createDirecciones(data); 
    }
    navigate("/DireccionesList");
});
useEffect(()=>{
    async function LoadDir(){
        if (params.id) { 
            const {data:{calle,numero,ciudad,provincia,pais}} = await getDirecciones(params.id);
            setValue('calle',calle)
            setValue('numero',numero)
            setValue('ciudad',ciudad)
            setValue('provincia',provincia)
            setValue('pais',pais)
    }
}
LoadDir();
},[])
    return(
        <form onSubmit={oneSubmit}>
            <div className="card col-md-5 mx-auto" >
                <div className="card-body">
                
                    <h4 className="card-title">Agregar Direccion</h4>
                    <div className="mb-3">
                        <label for="nam" className="form-label">Calle:</label>
                        <input type="text" className="form-control" name="calle" id="nam" placeholder="Calle" {...register("calle",{required:true})} />
                        {errors.calle && <span className="text-danger">Calle es requerido</span>}
                    </div>

                    <div className="mb-3">
                        <label for="ape" className="form-label">Numero:</label>
                        <input type="number" className="form-control" name="numero" id="ape" placeholder="Numero" {...register("numero",{required:true})} />
                        {errors.numero && <span className="text-danger">Numero es requerido</span>}
                    </div>

                    <div className="mb-3">
                        <label for="do" className="form-label">Ciudad:</label>
                        <input type="text" className="form-control" name="ciudad" id="do" {...register("ciudad",{required:true})} />
                        {errors.ciudad && <span className="text-danger">Ciudad requerido</span>}
                    </div>

                    <div className="mb-3">
                        <label for="dni" className="form-label">Provincia:</label>
                        <input type="text" className="form-control" name="provincia" id="dni" placeholder="Provincia" {...register("provincia",{required:true})} />
                    </div>
        
                    <div className="mb-3"><label for="suc" className="form-label">Pais:</label>
                    <input type="text" className="form-control" name="pais" id="suc" placeholder="Pais" {...register("pais",{required:true})} />
                    {errors.pais && <span className="text-danger">pais es requerido</span>}
                    </div>

                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" >Agregar</button>

                        {params.id && <button onClick={ async ()=> {const aceptado = window.confirm('Esta seguro de eliminar')
                        if (aceptado) { await EliminarDirecciones(params.id);
                           navigate('/DireccionesList');
                        }}} className="btn btn-danger" >Eliminar</button>}
                        
                    </div>
                </div>
                
            </div>
    </form>
    )
}