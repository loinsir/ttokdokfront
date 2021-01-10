import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class TopNavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/"><h4>똑똑?</h4></Navbar.Brand>
            </Navbar>
        );
    }
}

export default TopNavBar;