import React, { Component } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

class TopNavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/"><h4>똑똑?</h4></Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="BookSearchForm"></FormControl>
                    <Button variant="outline-info">검색</Button>
                </Form>
            </Navbar>
        );
    }
}

export default TopNavBar;