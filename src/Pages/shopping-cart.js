import ItemCard from "../Components/item-card";
import React, { useState } from 'react';

function ShoppingCart({ products }) {

    const [emptyCart, setEmptyCart] = useState(true);

    let component;

    if (typeof products !== "undefined" && products.length > 0) {
        component = products.map(product => {
            return <ItemCard product={product} />
        });
        setEmptyCart(true);
    } else {
        component = <h3 className="text-center text-white my-5">No hay productos en tu carrito aún</h3>;
    }

    return (
        <div className="container-fluid d-flex justify-content-center my-4">
            <div className="col-8 container-fluid bg-dark rounded" style={{ minHeight: "65vh" }}>
                <h2 className="text-center text-white my-3"> Carrito </h2>
                <div>
                    {component}
                </div>
                <div className="d-flex justify-content-center mb-3">
                    {emptyCart ? <button type="button" disabled className="btn btn-success btn-lg my-5">Comprar</button> : <button type="button" className="btn btn-success btn-lg">Comprar</button>}
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;