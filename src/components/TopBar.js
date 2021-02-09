import React, { Component } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

class TopBar extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark" sticky="top">
                <Navbar.Brand href="/"><h4>똑똑한 어린이 책 세상</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form inline className='ml-auto'>
                        <FormControl type="text" placeholder="Search" className="BookSearchForm"></FormControl>
                        <Button variant="outline-info">검색</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopBar;