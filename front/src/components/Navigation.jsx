import { Link } from "react-router-dom"

export function Navigation(){
    return(
        

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" to="{% url 'home' %}">Inicio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/ClientesPage">Cliente</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/ClientesForms">Cuentas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Tarjeta</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="">Prestamos</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="">Movimientos</Link>
                        </li>
                        
                    </ul>
                </div>
    </div>
    </nav>


    )
}