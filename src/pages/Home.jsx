import SlideOne from "../assets/images/home/1.webp";
import SlideTwo from "../assets/images/home/2.webp";
import SlideThree from "../assets/images/home/3.webp";
import SlideFour from "../assets/images/home/4.webp";
import SlideFive from "../assets/images/home/5.webp";
import ProductsList from "../components/Products/ProductsList";

function Home() {
    return (
        <>
            <section class="block">
                <div class="container">
                    <h1 class="title">Добро пожаловать в Pizzafy!</h1>
                    <div class="stories-list">
                        <img src={SlideOne} alt="SlideOne" />
                        <img src={SlideTwo} alt="SlideTwo" />
                        <img src={SlideThree} alt="SlideThree" />
                        <img src={SlideFour} alt="SlideFour" />
                        <img src={SlideFive} alt="SlideFive" />
                    </div>
                </div>
            </section>
            <section class="block">
                <div class="container">
                    <h1 class="title">Меню</h1>
                    <ProductsList />
                </div>
            </section>
        </>
    );
}

export default Home;