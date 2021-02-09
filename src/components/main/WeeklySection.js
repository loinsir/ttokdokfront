import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./WeeklySection.css"

class WeeklySection extends Component {
    render() {
        return (
            <Container fluid>
                <h1 id="weeklytitle">WEEKLY Best</h1>
                <h3 id="desc">금주의 인기 도서 입니다.</h3>
                <Row id="weeklysection">
                    <Col xs={6} md={4}>
                        <Image src="https://cache.wjthinkbig.com/WJMALL/FI-20191128093115013/A56280FE-F34B-4C2D-9D6F-3540F660F897.JPG" 
                        className="weeklyBook" roundedCircle fluid/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://cache.wjthinkbig.com/WJMALL/FI-20201210084543182/BAF7AF95-8230-4CBB-8FA6-95246F5BCF65.JPG" 
                        className="weeklyBook" roundedCircle fluid/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://cache.wjthinkbig.com/WJMALL/FI-20210209151133027/A05EC7B2-B449-4C8D-90F2-744C5F88BDAE.JPG" 
                        className="weeklyBook" rounded fluid/>
                    </Col>
                </Row>
            </Container>
        );
    }
    
}

export default WeeklySection;