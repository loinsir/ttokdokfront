import React, { Component } from 'react';
import "./Book.css";

class Book extends Component {

    render() {
        return (
            <div className="BookElement">
                <h2>다오니책</h2>
                <h3>멋진 이야기가 한가득</h3>
            </div>
        );
    }
}

export default Book;