import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            {/* INÍCIO DA BARRA DE NAVEGAÇÃO */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        CRUD
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/" className="nav-link active">
                                    Home
                                </a>
                            </li>
                            {/* INÍCIO DO DROPDOWN*/}
                            <li className="nav-item dropdown">
                                <a
                                    href="http://www.bootstrap.com/"
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Professor
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="professores/listar">
                                            Listar Professor
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="professores/criar">
                                            Criar Professor
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="professores/editar">
                                            Editar Professor
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    href="http://www.bootstrap.com/"
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Aluno
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="alunos/listar">
                                            Listar Aluno
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="alunos/criar">
                                            Criar Aluno
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="alunos/editar">
                                            Editar Aluno
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="alunos/por-curso">
                                            Alunos por Curso
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="alunos/destacados">
                                            Alunos Destacados
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* FIM DO DROPDOWN */}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* FIM DA BARRA DE NAVEGAÇÃO */}

            {/* INÍCIO DO CONTEÚDO DO SITE */}
            <Outlet />
            {/* FIM DO CONTEÚDO DO SITE */}

        </div>
    );
};

export default Home;

/*<h1>Home</h1>
<Link to="/professores/criar" style={{margin:"10px"}}>Criar</Link>
<Link to="/professores/editar" style={{margin:"10px"}}>Editar</Link>
<Link to="/professores/listar" style={{margin:"10px"}}>Listar</Link>
<hr />
<Outlet />*/