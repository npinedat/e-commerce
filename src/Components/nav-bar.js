import logo from "../Img/logo.png";

function NavBar({ handleNavClicks, navOptions }) {

    let options;

    if(typeof navOptions !== "undefined" && navOptions > 0) {
        options = navOptions.map( option => {
            return <li><a className="dropdown-item" href={option.href}>{option.name}</a></li>
        });
    }else {
        options = <li><a className="dropdown-item" href="#">No hay opciones disponibles</a></li>
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark border-3 border-bottom border-primary">
            <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo of the website" width="30" height="24" />Tienda
                </a>
                <div className="d-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#" id="HomePage" onClick={handleNavClicks}>Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="RecommendedList" onClick={handleNavClicks}>Recomendados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="DiscountsList" onClick={handleNavClicks}>Descuentos</a>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                                <a className="nav-link dropdown-toggle" href="none" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    {options}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <form className="container-fluid" style={{ maxWidth: "600px" }}>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </form>
                <button className="btn btn-sm btn-outline-primary me-2" type="button" id="ShoppingCart" onClick={handleNavClicks}>
                    <i className="fa-solid fa-cart-shopping"></i>Carrito
                </button>
                <div>
                    <button className="btn btn-sm btn-outline-success mx-1" type="button" id="SignIn" onClick={handleNavClicks}>Ingresar</button>
                    <button className="btn btn-sm btn-outline-secondary" type="button" id="SignUp" onClick={handleNavClicks}>Registrarse</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;