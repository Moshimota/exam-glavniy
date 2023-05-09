import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./HeaderPage.css"
const domik = require("./img/photo 1.png")
const domik2 = require("./img/photo 2.png")
const domik3 = require("./img/photo 3.png")
const instas = require("./img/social media.png")



export const HeaderPage = () => {
  return(
    <>
        <Container>
            <Row>
                <Col lg={6}>
                <h1 className="h11">Аренда коттеджей и домов в Казани</h1>
        <h2 className="h21">Найдите идеальный вариант сами или предоставьте это нам</h2>
                <div className="dfc">
                    <div className="mini">
                        <img src={domik} alt="" className="kom" />
                        <p className="c-t">С бассейном</p>
                    </div>
                    <div className="mini">
                        <img src={domik2} alt="" className="kom" />
                        <p className="c-t">Семейные и уютные</p>
                    </div>
                    <div className="mini">
                        <img src={domik3} alt="" className="kom" />
                        <p className="c-t">Хиты продаж</p>
                    </div>
                </div>
                <img src={instas} alt="" className="insta" />
                </Col>
                <Col lg={6}>
                    <div className="cardreg">
                        <div className="df3">
                            <p className="dve">Въезд</p>
                            <p className="dve">Отъезд</p>
                        </div>
                        <div className="df-btn">
                        <button className="btn2"><p className="kak">От</p>
                        <p className="kak">| До</p></button>
                        </div>
                        <p className="kol">Количество человек</p>
                        <div className="btn3"><p>12</p></div>
                        <button className="btn4">Найти</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}