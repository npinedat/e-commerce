import Carousel from "./carousel";
import PropTypes from 'prop-types';
function CardsContainer({id, list, handleNavClicks}) {

    let product;

    function sliceList() {
        if(typeof list !== "undefined") {
            product = list.slice(0,3);
        }else {
            product = undefined;
        }
    }

    sliceList();

    return (
        <div className="cards-container">
            <div id={`carouselExampleCaptions${id}`} className="carousel slide carousel-dark" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <Carousel active="active" list={product} handleNavClicks={handleNavClicks}/>
                    <Carousel list={product} handleNavClicks={handleNavClicks}/>
                    <Carousel list={product} handleNavClicks={handleNavClicks}/>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleCaptions${id}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleCaptions${id}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

CardsContainer.propTypes = {
    list: PropTypes.array
}

export default CardsContainer;