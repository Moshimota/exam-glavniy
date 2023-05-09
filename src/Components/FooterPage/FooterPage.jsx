import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./FooterPage.css"
const logo2 = require("./img/logo_light (1).png")

const ins = require("./img/ind.png")





export const FooterPage= ()=> {
  return (
    <>
        <div className="bek-foo">
            <Container>
                <Row>
                    <Col lg={4}>
                        <img src={logo2} alt="" className="logo2" />
                        <p className="may">Политика конфиденциальности <br></br>Согласие на обработку персональных данных</p>
                    </Col>
                    <Col lg={3}>
                        <p className="kat">Каталог</p>
                        <p className="mayda">С бассейном</p>
                        <p className="mayda">Семейные и уютные</p>
                        <p className="mayda">Хиты продаж</p>
                        <p className="mayda">Под свадьбы и корпоративы</p>
                        <p className="mayda">С русской баней на дровах</p>
                    </Col>
                    <Col lg={2}>
                        <p className="kakk">Сотрудничество</p>
                        <p className="kakk">Частые вопросы</p>
                    </Col>
                    <Col lg={3}>
                        <p className="nom">8 (843) 528-65-48</p>
                        <img src={ins} alt="" className="in" />
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}
