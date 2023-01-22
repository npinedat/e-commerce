import productImg from "../Img/Producto1.png";
import logo from "../Img/logo.png"

function ProductPage({ product, handleAddToCart }) {
    return (
        <div className="container-fluid">
            <div className="col-10 my-5 border container bg-dark rounded text-white">
                <div className="row">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                        <img className="h-75 w-100 img-fuid rounded" src={product.img} alt="Product.alt" />
                    </div>

                    <div className="col-6 text-center my-4">
                        <h2 className="display-1">{product.name}</h2>
                        <p className="display-3">${product.price}</p>
                        <p>{product.description}</p>
                        <table className="table table-bordered text-white rounded">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Fabricante: {product.vendor}</td>
                                    <td>Modelo: {product.model}</td>
                                </tr>

                                <tr>
                                    <td>año: {product.year}</td>
                                    <td>Categoría: {product.category}</td>
                                </tr>

                                <tr>
                                    <td>Motor: {product.engine}</td>
                                    <td>Tracción: {product.rear}</td>
                                </tr>

                                <tr>
                                    <td>Peso: {product.weight}</td>
                                    <td>Número de puertas: {product.doors}</td>
                                </tr>

                                <tr>
                                    <td>Color: {product.color}</td>
                                    <td>Uso: {product.use}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-outline-primary me-2 btn-lg" type="button" id="liveToastBtn" onClick={handleAddToCart}>
                            <i className="fa-solid fa-cart-shopping"></i>Añadir
                        </button>
                        <button className="btn btn-outline-success btn-lg" type="button">
                            <i className="fa-solid fa-basket-shopping"></i>Comprar
                        </button>

                        <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: 11}}>
                            <div id="liveToast" className="bg-primary toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header">
                                        <strong className="me-auto" id="message">¡Añadido!</strong>
                                        <small id="message2">Ya casí es tuyo</small>
                                </div>
                                <div className="toast-body" id="message3">
                                    Añadido al carrito con exíto!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductPage.defaultProps = {
    product: {
        img: productImg,
        name: "Vacío",
        price: "Vacío",
        vendor: "Vacío",
        model: "Vacío",
        year: "vacio",
        category: "Vacío",
        engine: "Vacío",
        rear: "Vacío",
        weight: "Vacío",
        doors: "Vacío",
        color: "Vacío",
        use: "Vacío"
    }
}

export default ProductPage;