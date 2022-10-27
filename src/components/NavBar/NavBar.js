import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-secondary bg-gradient">
        <div className="container-fluid d-flex">
          <div>
            <a className="navbar-brand fs-2 fw-normal " href="#">LA BARTOLA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item fw-semibold">
                  <a className="nav-link" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="#">Tienda</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="#">Ayuda</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link fw-semibold" aria-current="page" href="#">Sign in</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="#">Registrer</a>
                </li>
              </ul>
              <div className="cart">
                 <AiOutlineShoppingCart /> 
              </div>
              <div>
                <div className="badge">
                  <span class="position-absolute top-50 start-60 translate-middle badge rounded-pill bg-danger">
                    2
                  </span>
                </div>


              </div>
            </div>
          </div>
        </div>
      </nav>
    
    
    </>
    )
}

export default NavBar;