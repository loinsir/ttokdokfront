import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class FixedNavBar extends Component {
    render() {
        return(
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                </div>
            </Nav>
        );
    }
}

export default FixedNavBar;