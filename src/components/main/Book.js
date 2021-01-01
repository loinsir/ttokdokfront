import React, { Component } from 'react';
import "./Book.css";

class Book extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt={this.props.id}
                className="BookImg">
                </img>
            </div>
        );
    }
}

export default Book;