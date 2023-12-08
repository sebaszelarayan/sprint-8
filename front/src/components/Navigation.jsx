import { Link } from "react-router-dom"

export function Navigation() {
    return (


        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <Link className="navbar-brand" to="http://127.0.0.1:8000/">Inicio</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/ClientesPage">Lista de Clientes</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/ClientesForms">Modificar Clientes</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/BranchList">Lista de Sucursales</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}