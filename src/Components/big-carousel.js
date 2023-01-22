import banner from "../Img/MercadoLibre1.png";

function BigCarousel({ images }) {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner bg-dark">
                <div className="carousel-item active">
                    <img style={{ height: "340px", maxWidth: "1600px" }} src={images[0].img} className="d-block w-100" alt={images[0].alt} />
                </div>
                <div className="carousel-item">
                    <img style={{ height: "340px", maxWidth: "1600px" }} src={images[1].img} className="d-block w-100" alt={images[1].alt} />
                </div>
                <div className="carousel-item">
                    <img style={{ height: "340px", maxWidth: "1600px" }} src={images[2].img} className="d-block w-100" alt={images[2].alt} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

BigCarousel.defaultProps = {
    images: [{
        img: banner,
        alt: "No hay imagen disponible"
    }, {
        img: banner,
        alt: "No hay imagen disponible"
    }, {
        img: banner,
        alt: "No hay imagen disponible"
    }]
}

export default BigCarousel;