import React, { Component } from "react";
import { CardDeck } from 'react-bootstrap';
import BookCard from "./BookCard";

class BookCardDeck extends Component {
    render() {
        return (
            <div>
                <h1>More...</h1>
                <h3>더 많은 책을 구경하세요</h3>
                <CardDeck className="w-75 mx-auto" fluid>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                </CardDeck>
            </div>
        )
    }
}

export default BookCardDeck;