import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import './BookCarousel.css';

class BookCarousel extends Component {
    constructor(props) {
        super(props);
        this.state= {
            itemList: [   //temp data
                {id:'1', title: '베서니와 괴물의 묘약', imgUrl: 'https://image.aladin.co.kr/product/25791/71/cover500/k502736811_1.jpg'},
                {id:'2', title: '전래동화 컬러링 북', imgUrl: 'https://image.aladin.co.kr/product/23552/57/cover500/k322638120_1.jpg'},
                {id:'3', title: '디즈니 겨울왕국 2 무비동화 1', imgUrl: 'https://image.aladin.co.kr/product/21050/49/cover500/8926211738_1.jpg'},
                {id:'4', title: '세상에서 제일 달고나', imgUrl: 'https://image.aladin.co.kr/product/25762/75/cover500/8934989823_1.jpg'},
                {id:'5', title: '랄라예나의 동화 소녀 종이인형', imgUrl: 'https://image.aladin.co.kr/product/9299/62/cover500/8925560011_1.jpg'},
                {id:'6', title: '미하엘 엔데 동화 전집', imgUrl: 'https://image.aladin.co.kr/product/8697/55/cover500/8961705547_1.jpg'},
                {id:'7', title: '세계 명작 동화 Cinderella 신데렐라 영어 사운드북', imgUrl: 'https://image.aladin.co.kr/product/25227/55/cover500/k472633900_1.jpg'}
            ]
        };
    }

    generateCarouselList() {
        var i = 0;
        var wrappingTags = [];
        while(i < this.state.itemList.length) { //maybe need refactoring...
            var carouselItem = <Carousel.Item key={this.state.itemList[i].id}>
                        <img className="d-block center"
                            src={this.state.itemList[i].imgUrl}
                            alt={this.state.itemList[i].title}
                            style={{
                                width: 'auto',
                                height: '500px',
                                margin: '0 auto',
                            }}
                        />;
                        <Carousel.Caption>
                            <h3 style={{color: 'black'}}>{this.state.itemList[i].title}</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
            wrappingTags.push(carouselItem);
            i++;
        }
        console.log(wrappingTags);
        return wrappingTags;
    }

    render() {
        return (
            <div>
                <Carousel pause=''>
                    {this.generateCarouselList()}
                </Carousel>
            </div>
        );
    }
}

export default BookCarousel;