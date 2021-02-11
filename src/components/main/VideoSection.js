import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

class VideoSection extends Component {
    render() {
        return(
            <Container fluid>
                <Row className="align-items-center" style={{height:"30px"}}>
                    <Col><h1>책 리뷰 영상입니다</h1></Col>
                </Row>
                <Row className="align-items-center" style={{height:"460px"}}>
                    <Col align="center"> 
                        <ReactPlayer url="https://youtu.be/39Bi_INkHfw" controls/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default VideoSection;