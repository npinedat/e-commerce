import DropDown from "../Components/dropdown";
import BigCarousel from "../Components/big-carousel";
import ProductCard from "../Components/product-cards";

function ProductsList({ title, images, products }) {
    let component;

    if (typeof products !== "undefined" && products.length > 0) {
        component =
            products.map(product => {
                return <ProductCard product={product} />
            })
    } else {
        component = <h3 className="text-center">No hay productos para mostrar</h3>
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <h2 className="display-5">Filtro</h2>
                        <p>Fabricantes</p>
                        <DropDown />
                        <p>Modelos</p>
                        <DropDown />
                        <p>Año</p>
                        <DropDown />
                        <p>Categoría</p>
                        <DropDown />
                        <p>Precio</p>
                        <form>
                            <input className="" />
                            <input className="my-3 d-block" />
                        </form>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <BigCarousel images={images} />
                        </div>
                        <h2 className="mt-3">{title}: </h2>
                        <div className="row d-flex justify-content-left gap-3 my-4">
                            {component}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsList;