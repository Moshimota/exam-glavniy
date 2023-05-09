import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Section4.css"





export const Section4 = () => {
    return(
        <>
            <div className="bek">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <h1 className="h12">Хотите сдать дом?</h1>
                            <p className="os">Оставьте заявку и мы свяжемся с вами для уточнения деталей</p>
                            <button className="btn4">Оставить заявку</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
