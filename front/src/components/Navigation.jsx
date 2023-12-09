import { Link } from "react-router-dom"

export function Navigation() {
    return (


        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <Link className="navbar-brand" to="http://127.0.0.1:8000/">Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item ">
                            <Link className="nav-link" to="/BranchList">Lista de Sucursales</Link>
                        </li>

                        <li className="nav-item ">
                            <Link className="nav-link" to="/DireccionesList">Lista de Direcciones</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}