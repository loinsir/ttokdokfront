import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

class VideoSection extends Component {
    render() {
        return(
            <Container fluid style={{height:"470px"}}>
                <Row className="align-items-center">
                    <Col align="center">
                        <h1>책 리뷰 영상입니다</h1>
                        <ReactPlayer url="https://youtu.be/39Bi_INkHfw" controls/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default VideoSection;