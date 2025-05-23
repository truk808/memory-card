import React from 'react';
import '../style/about.css'
import Container from "../components/UI/container/Container";
import Footer from "../components/footer/Footer";

const About = () => {
    return (
        <>
        <div className="page">
            <div className="page-wrapper">
                <div className="title">
                    <h1 className="h1-title-text">Memore Card — это удобный сервис для тренировки памяти</h1>
                    <p className='title-description'>Мы помогаем пользователям развивать память, отслеживать
                        прогресс и
                        достигать новых результатов.</p>
                </div>
                <div className="container">

                    <Container>
                        <h2 className='about-title-h1'><strong>Что вы можете делать на Memory Card?</strong></h2>
                        <h2 className='about-title-h2'>Тренировать память с помощью мини-игр</h2>
                        <ul type="disc">
                            <li>Играть в короткие, но эффективные упражнения</li>
                            <li>Развивать внимание и концентрацию</li>
                            <li>Улучшать кратковременную память</li>
                            <li>Отслеживать прогресс</li>
                        </ul>

                        <h2 className='about-title-h2'>Учить термины с помощью карточек</h2>
                        <p>Создавать свои наборы карточек или выбирать из готовых</p>
                        <p>Карточки помогут запомнить:</p>
                        <ul>
                            <li>термины, даты и определения</li>
                            <li>слова на иностранных языках</li>
                            <li>учебный и рабочий материал</li>
                        </ul>
                    </Container>
                    <div className="pad">
                        <h2 className={'h7'}><strong>Как это работает?</strong></h2>
                        <div className="highlight">
                            <p>1. Вы выбираете тренировку или карточки</p>
                            <p>2. Проходите упражнения и повторяете материал</p>
                            <p>3. Видите прогресс и улучшаете результаты</p>
                        </div>

                        <h2 className={'h7'}><strong>Кому подойдет?</strong></h2>
                        <ul className="highlight">
                            <li>Школьникам и студентам</li>
                            <li>Тем, кто учит иностранные языки</li>
                            <li>Всем, кто хочет поддерживать мозг в форме</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
    </>
    );
};

export default About;