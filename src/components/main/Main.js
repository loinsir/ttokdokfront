import React, { Component } from "react";
import BookCarousel from "./BookCarousel";
import WeeklySection from "./WeeklySection";
import VideoSection from "./VideoSection";
import './Main.css';

class Main extends Component {
    render() {
        return(
            <div>
                <div id="header">
                    <img src="https://image.freepik.com/free-vector/book-shop-interior-illustration-various-books-shelves-cashier-desk-indoors-bookstore-with-girl-seller-no-buyers-inside-popular-new-items_109722-486.jpg"></img>
                    <h3 id="mainTitle">똑똑한 어린이 책 세상</h3>
                    <h4>다양한 어린이용 도서를 구매하세요</h4>
                </div>
                <BookCarousel></BookCarousel>
                <VideoSection></VideoSection>
                <WeeklySection></WeeklySection>
            </div>
        );
    }
}

export default Main;