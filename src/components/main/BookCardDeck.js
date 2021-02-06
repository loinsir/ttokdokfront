import React, { Component } from "react";
import { CardDeck } from 'react-bootstrap';
import BookCard from "./BookCard";

class BookCardDeck extends Component {
    render() {
        return (
            <CardDeck>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
            </CardDeck>
        )
    }
}

export default BookCardDeck;