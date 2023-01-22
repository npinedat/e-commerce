import product from "../Img/Producto1.png";

function ItemCard() {
    return (
        <div className="">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={product} className="img-fluid rounded-start" alt="Product" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="col-1">
                        <button type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;