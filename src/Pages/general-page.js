import React, { useState } from 'react';

import NavBar from "../Components/nav-bar";
import Footer from "../Components/footer";
import SignUp from "./sign-up";
import HomePage from './home-page';
import SignIn from "./sign-in";
import ShoppingCart from './shopping-cart';
import ProductsList from './products-list';
import ProductPage from './product-page';

function GeneralScreen({ recommendedProducts, discountsProducts }) {
    const [activePage, setActivePage] = useState(<HomePage handleNavClicks={handleNavClicks} />);
    const cart = [];

    function handleNavClicks(e) {
        let targetPage = e.target.id;
        switch (targetPage) {
            case "SignUp":
                setActivePage(<SignUp />);
                break;
            case "SignIn":
                setActivePage(<SignIn />)
                break;
            case "ShoppingCart":
                setActivePage(<ShoppingCart products={cart}/>);
                break;
            case "HomePage":
                setActivePage(<HomePage handleNavClicks={handleNavClicks} />);
                break;
            case "RecommendedList":
                setActivePage(<ProductsList title="Recomendados" products={recommendedProducts} />);
                break;
            case "DiscountsList":
                setActivePage(<ProductsList title="Descuentos" products={discountsProducts} />);
                break;
            case "product":
                setActivePage(<ProductPage product={e.target.product} handleAddToCart={handleAddToCart} />);
                break;
            default:
                break;
        }
    }

    function handleAddToCart(e) {
        console.log(typeof e.target.product);
        if (typeof e.target.product === "undefined") {
            document.getElementById("message").innerHTML = "¡UPS!";
            document.getElementById("message2").innerHTML = "Hubo un error";
            document.getElementById("message3").innerHTML = "Este producto no se puede agregar";
            document.getElementById("liveToast").classList.remove("hide", "bg-primary");
            document.getElementById("liveToast").classList.add("show", "bg-danger");
            window.setTimeout(() => {
                document.getElementById("liveToast").classList.remove("show", "bg-danger");
                document.getElementById("liveToast").classList.add("hide", "bg-primary");
            }, 3000)
            return null;
        } else if(cart.indexOf(e.target.product.id) < 0) {
            document.getElementById("message").innerHTML = "¡UPS!";
            document.getElementById("message2").innerHTML = "Hubo un error";
            document.getElementById("message3").innerHTML = "Este producto no se puede agregar";
            document.getElementById("liveToast").classList.remove("hide", "bg-primary");
            document.getElementById("liveToast").classList.add("show", "bg-danger");
            window.setTimeout(() => {
                document.getElementById("liveToast").classList.remove("show", "bg-danger");
                document.getElementById("liveToast").classList.add("hide", "bg-primary");
            }, 3000)
            return null;
        }else{
            cart.push(e.target.product);
            document.getElementById("liveToast").classList.remove("hide");
            document.getElementById("liveToast").classList.add("show");
            window.setTimeout(() => {
                document.getElementById("liveToast").classList.remove("show");
                document.getElementById("liveToast").classList.add("hide");
            }, 3000)
        }
    }

    return (
        <div>
            <NavBar handleNavClicks={handleNavClicks} />
            {activePage}
            <Footer />
        </div>
    );
}

export default GeneralScreen;