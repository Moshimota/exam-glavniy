import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import  "./NavbarPage.css"
const logo = require("./logo_light.png")
const map = require("./img/map-locator 1.png")
const love = require("./img/Vector (1).png")
const loopa = require("./img/Vector (2).png")
const tel = require("./img/Vector (4).png")
export const NavbarFunc = () => {
    return (
      <>
        <Container>
            <Row>
                <Col lg={3}>
                    <img src={logo} alt="" className="logo" />
                </Col>
                <Col lg={2}>
                    <div className="df1">
                        <div className="dfem">
                            <img src={map} alt="" className="map" />
                        </div>
                        <p className="nat">Казань</p>
                        <button className="btn1">Каталог</button>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="df1">
                    <p className="dva">Частые вопросы</p>
                    <p className="dva">Сотрудничество</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="df">
                        <div className="dfem">
                            <img src={love} alt="" className="love" />
                        </div>
                        <div className="df2">
                            <div className="dfem">
                            <img src={loopa} alt="" className="search" />
                            </div>
                            <p className="poisk">Поиск по названию</p>
                        </div>
                        <div className="df2">
                            <div className="dfem">
                            <img src={tel} alt="" className="search" />
                            </div>
                                <p className="phone">8 (843) 528-65-48</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </>
    )
}
