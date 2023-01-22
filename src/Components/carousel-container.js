import CardsContainer from "./cards-container";

function CarouselContainer({id, list, handleNavClicks}) {
    return (
        <div className="row d-flex justify-content-center align-items-center mb-5">
            <div className="col-10">
                <CardsContainer id={id} list={list} handleNavClicks={handleNavClicks}/>
            </div>
        </div>
    );
}

export default CarouselContainer;