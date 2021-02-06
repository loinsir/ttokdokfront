import React, { Component } from "react";
import BookCarousel from "./BookCarousel";
import './Main.css';

class Main extends Component {
    render() {
        return(
            <div>
                <div id="header">
                    <img className="App-header-img" src="https://cdn.pixabay.com/photo/2017/09/11/15/34/animals-2739386_960_720.jpg" alt="logo"/>
                    <h3 id="mainTitle">똑똑?</h3>
                    <h4>다양한 어린이용 도서를 구매하세요</h4>
                </div>
                <BookCarousel></BookCarousel>
            </div>
        );
    }
}

export default Main;