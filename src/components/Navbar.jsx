import {Link} from "react-router-dom";

function Navbar (props){
    return (
<nav class="navbar navbar-expand-md navbar-primary bg-primary" aria-label="Fourth navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Los Campesinos APP</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        
      </button>

      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
          <Link to={"/"} className="nav-link active" href="#"> Inicio </Link>
          </li>
          <li class="nav-item">
          <Link to={"/nosotros"} className="nav-link" href="#"> Nosotros </Link>
          </li>
          <li class="nav-item">
          <Link to={"/contactenos"} className="nav-link" href="#">Contactenos</Link>
          </li>
         
        </ul>
        </div>
    </div>
  </nav>
    )
}

export default Navbar;
