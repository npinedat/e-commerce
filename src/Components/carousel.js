import ProductCard from "./product-cards";

function Carousel({active, list, handleNavClicks}) {
    let product1;
    let product2;
    let product3;
    function sliceList() {
        if(typeof list !== "undefined" && list.length >= 3) {
            product1 = list[0];
            product2 = list[1];
            product3 = list[2];
        }
    }

    sliceList();
    return (
        <div className={`carousel-item ${active}`}>
            <div className="row d-flex justify-content-evenly">
                <ProductCard product={product1} handleNavClicks={handleNavClicks}/>

                <ProductCard product={product2} handleNavClicks={handleNavClicks}/>

                <ProductCard product={product3} handleNavClicks={handleNavClicks}/>
            </div>
        </div>
    );
}

export default Carousel;