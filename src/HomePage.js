import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';

/*import'../css/home.css';*/




const HomePage = (props) => {

    const settings = {
        arrows: false,
        infinite: true,
        speed:1000,
        autoplaySeed:3000,
        fade: true,
        autoplay:true
    };

    return (

        <div className="galeria">
            <Slider {...settings}>
            <img src="/images/img01.jpg" alt="imagenes 01"></img>
            <img src="/images/img02.jpg" alt="imagenes 02"></img>
            <img src="/images/img03.jpg" alt="imagenes 03"></img>

            <img src="/images/img04.jpg" alt="imagenes 04"></img>

            <img src="/images/img05.jpg" alt="imagenes 05"></img>
            </Slider>
        </div>
    )
}

export default HomePage;