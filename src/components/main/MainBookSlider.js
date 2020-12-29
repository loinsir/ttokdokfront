import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Book from "./Book";

class MainBookSlider extends Component {
    constructor(props) {
        super(props);
        this.state= {
            booklist:'book'
        };
    }

    render() {
        const settings = {  //slick-carousel slider settings (API)
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            className: "center",
            centerMode: true,
            centerPadding: "60px",
            draggable: true,
            variableWidth: true,
        };

        return (
            <div>
                <h2>당신을 위한 책 여기에...</h2>
                <Slider {...settings}>
                    <div>
                        <h3><Book></Book></h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default MainBookSlider;