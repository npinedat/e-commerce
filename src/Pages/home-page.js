import BigCarousel from "../Components/big-carousel";
import CarouselContainer from "../Components/carousel-container";

function HomePage({ images, recommendedList, discountsList, recentsList, categoriesList, handleNavClicks }) {
    return (
        <div className="home-page">
            <div>
                <div className="row">
                    <BigCarousel images={images} />
                </div>
                <div className="main-container container-fluid">
                    <div className="row">
                        <div className="col my-5">
                            <h1 className="text-center">Página Principal</h1>
                        </div>
                    </div>
                    <h2 className="text-center mb-4">Recomendados</h2>
                    <CarouselContainer id="Recommended" list={recommendedList} handleNavClicks={handleNavClicks}/>
                    <h2 className="text-center  mb-4">Descuentos</h2>
                    <CarouselContainer id="Discounts" list={discountsList} handleNavClicks={handleNavClicks}/>
                    <h2 className="text-center  mb-4">Recientes</h2>
                    <CarouselContainer id="Recents" list={recentsList} handleNavClicks={handleNavClicks}/>
                </div>
            </div>
        </div>
    );
}

// HomePage.propTypes = {
//     recommendedList: propTypes.array,
//     discountsList: propTypes.array,
//     recentsList: propTypes.array,
//     categoriesList: propTypes.array
// }

export default HomePage;