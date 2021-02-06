import React, { Component } from "react";
import { Image, Card } from 'react-bootstrap';

class BookCard extends Component {
    render() {
        return (
            <Card style={{width: '18rem'}} border="dark">
                <Card.Img variant="top" src="https://image.aladin.co.kr/product/25791/71/cover500/k502736811_1.jpg"/>
                <Card.Body>
                    <Card.Title>베서니와 괴물의 묘약</Card.Title>
                    <Card.Text>시험 카드</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default BookCard;