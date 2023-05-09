import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Section.css"
const lol1 = require("./img/lol1.png")
const lol2 = require("./img/lol2.png")
const lol3 = require("./img/lol3.png")
const lol4 = require("./img/lol4.png")
const lol5 = require("./img/lol5.png")
const lol6 = require("./img/lol6.png")



export const Section3 = () => {
    return (
      <div>
        <Container>
            <Row>
                <Col lg={12}>
                    <h2 className="h24">Можем организовать для Вас</h2>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <div className="cardcik">
                        <div className="df7">
                            <div className="dfem">
                                <img src={lol1} alt="" className="lolll" />
                            </div>
                            <p className="po-lol">Кейтеринг</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="cardcik">
                        <div className="df7">
                            <div className="dfem">
                                <img src={lol2} alt="" className="lolll" />
                            </div>
                            <p className="po-lol">Выездной повар</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="cardcik">
                        <div className="df7">
                            <div className="dfem">
                                <img src={lol3} alt="" className="lolll" />
                            </div>
                            <p className="po-lol">Фуршет</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="cardcik">
                        <div className="df7">
                            <div className="dfem">
                                <img src={lol4} alt="" className="lolll" />
                            </div>
                            <p className="po-lol">Шоу программа</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="cardcik">
                        <div className="df7">
                            <div className="dfem">
                                <img src={lol5} alt="" className="lolll" />
                            </div>
                            <p className="po-lol">Трансфер</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="cardcik">
                        <div className="df7">
                            <div className="dfem">
                                <img src={lol6} alt="" className="lolll" />
                            </div>
                            <p className="po-lol">Мероприятия под ключ</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    )
}
