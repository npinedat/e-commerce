import logo from "../Img/logo.png"

function Footer(props) {
    return (
        <footer className="bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-3 d-flex align-items-center">
                        <a className="text-reset text-uppercase" href="/">
                            <img src={logo} alt="Logo of the website" className="img-logo" width="30" height="24" />LOGO
                        </a>
                    </div>
                    <div className="col-3 list-unstyled my-3">
                        <li className="font-weight-bold text-uppercase">Resource</li>
                        <li><a href="none" className="text-reset">Link1</a></li>
                        <li><a href="none" className="text-reset">Link1</a></li>
                        <li><a href="none" className="text-reset">Link1</a></li>
                    </div>
                    <div className="col-3 list-unstyled my-3">
                        <li className="font-weight-bold text-uppercase">Quick Links</li>
                        <li><a href="none" className="text-reset">Link1</a></li>
                        <li><a href="none" className="text-reset">Link1</a></li>
                        <li><a href="none" className="text-reset">Link1</a></li>
                    </div>
                    <div className="col-3 list-unstyled my-3 d-flex justify-content-between">
                        <li className="font-weight-bold text-uppercase">Redes Sociales</li>
                        <a href="none" className="text-reset">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="none" className="text-reset">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="none" className="text-reset">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;