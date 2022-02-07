
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homeSliderdata } from "../data/homeSliderData.js";
import '../styles/home.css'

function HomeSlider() {
    const settings = {
        dots: true,
        className: "",

        infinite: true,

        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,

        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {homeSliderdata.map((slide, index) => {
                return (
                    <div className="mainsil">
                        <div className="imgslidercont" key={index}>
                            <img src={slide.path} alt="carousel" />
                        </div>
                    </div>
                );
            })}
        </Slider>
    )
}

export default HomeSlider;

