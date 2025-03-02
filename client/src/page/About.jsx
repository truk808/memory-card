import React from 'react';
import '../style/about.css'
import Container from "../components/UI/container/Container";
import icon from "../img/icon/icon-globe.svg"

const About = () => {
    return (
        <div className="page">
            <div className="page-wrapper">
                <div className="title">
                    <h1 className="h1-title-text">Memore Card — это удобный сервис для тренировки памяти</h1>
                    <p className='title-description'>Мы помогаем пользователям развивать память, отслеживать прогресс и
                        достигать новых результатов.</p>
                </div>
                <Container>
                    <h3 className="h3-title-text">Почему Memore Card?</h3>
                    <div className="icon-wrapper">
                        <div className="about-icon-container">
                            <img src={icon} alt="" className="icon"/>
                        </div>
                        <div className="about-icon-container">
                            <img src={icon} alt="" className="icon"/>
                        </div>
                        <div className="about-icon-container">
                            <img src={icon} alt="" className="icon"/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default About;