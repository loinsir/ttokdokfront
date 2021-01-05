import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Book from "./Book";

class MainBookSlider extends Component {
    constructor(props) {
        super(props);
        this.state= {
            mainBookSliderList: [   //temp data
                {id:'1', title: '베서니와 괴물의 묘약', imgUrl: 'https://image.aladin.co.kr/product/25791/71/cover500/k502736811_1.jpg'},
                {id:'2', title: '전래동화 컬러링 북', imgUrl: 'https://image.aladin.co.kr/product/23552/57/cover500/k322638120_1.jpg'},
                {id:'3', title: '디즈니 겨울왕국 2 무비동화 1', imgUrl: 'https://image.aladin.co.kr/product/21050/49/cover500/8926211738_1.jpg'},
                {id:'4', title: '세상에서 제일 달고나', imgUrl: 'https://image.aladin.co.kr/product/25762/75/cover500/8934989823_1.jpg'},
                {id:'5', title: '랄라예나의 동화 소녀 종이인형', imgUrl: 'https://image.aladin.co.kr/product/9299/62/cover500/8925560011_1.jpg'},
                {id:'6', title: '미하엘 엔데 동화 전집', imgUrl: 'https://image.aladin.co.kr/product/8697/55/cover500/8961705547_1.jpg'},
                {id:'7', title: '세계 명작 동화 Cinderella 신데렐라 영어 사운드북', imgUrl: 'https://image.aladin.co.kr/product/25227/55/cover500/k472633900_1.jpg'}
            ],

            isOver: false
        };
    }

    generateBookList() {
        var i = 0;
        var wrappingTags = [];
        while(i < this.state.mainBookSliderList.length){ //maybe need refactoring...
            var _bookElement = <div>
            <Book key={this.state.mainBookSliderList[i].id}
            title={this.state.mainBookSliderList[i].title}
            imgUrl={this.state.mainBookSliderList[i].imgUrl}
            ></Book></div>;
            wrappingTags.push(_bookElement);
            i++;
        }
        console.log(wrappingTags);
        return wrappingTags;
    }

    render() {
        const settings = {  //slick-slider settings (API)
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
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
                <h2 style={{
                    fontSize: '50px',
                }}>아기 다온이를 위한 책 여기에</h2>
                <Slider {...settings}>
                    {this.generateBookList()}
                </Slider>
            </div>
        );
    }
}

export default MainBookSlider;