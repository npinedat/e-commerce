import productImg from "../Img/Producto1.png";
import PropTypes from 'prop-types';

function ProductCard({ product, handleNavClicks }) {
    return (
        <div className="card my-5 bg-dark text-white py-2 mt-0 mb-0" style={{ width: "18rem" }}>
            <img src={product.img} className="card-img-top" alt="product.alt" />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-center">
                    <a href="#" className="btn btn-primary" id="product" product={product} onClick={handleNavClicks}>Ver más</a>
                </div>
            </div>
        </div>
    );
}

ProductCard.defaultProps = {
    product: {
        name: "Producto",
        description: "No hay una descripción disponible",
        img: productImg,
    }
}

ProductCard.propTypes = {
    product: PropTypes.object
}

export default ProductCard;