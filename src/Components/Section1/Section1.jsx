import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Section1.css"
const iconn1 = require("./img/Vector (5).png")
const iconn2 = require("./img/Vector (7).png")
const iconn3 = require("./img/Vector (8).png")
const iconn4 = require("./img/Vector (9).png")





export const Section1= ()=> {
    return (
      <div>
        <Container>
            <Row>
                <Col lg={12}>
                    <h2 className="h22">О нас</h2>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <div className="korinmas">
                        <img src={iconn1} alt="" className="iconn" />
                        <p className="lol">Работаем с юридическими  и физическими лицами</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="korinmas">
                        <img src={iconn2} alt="" className="iconn" />
                        <p className="lol">Бесплатный подбор, честные консультации и открытость к сотрудничеству</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="korinmas">
                        <img src={iconn3} alt="" className="iconn" />
                        <p className="lol">Работаем с 2014 года. Консультируем 30-80 человек в сутки, заселяем от 3 до 5 компаний в день. Помогли более 21 000 клиентам</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="korinmas">
                        <img src={iconn4} alt="" className="iconn" />
                        <p className="lol">Средний рейтинг компании 4,5 из 5 (Avito, Google, Отзовик)</p>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    )
}
