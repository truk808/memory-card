import React from 'react';
import styles from './gameCard.module.css';
import Button from "../UI/button/Button";
import {NavLink} from "react-router-dom";
import star from "../../img/icon/not-active-star.svg";
import activeStar from "../../img/icon/star.svg";

const GameCard = ({name, title, icon, description, tags}) => {
    const [activeStars, setActiveStars] = React.useState([1]);

    const setDifficult = (difficult) => {
        setActiveStars(difficult)
    }

    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <img className={styles.icon} src={icon} alt=""/>
                <h3 className={styles.text}>{title}</h3>
                <div className={styles.img}>
                    <img
                        className={styles.star}
                        onClick={() => setDifficult([1])}
                        src={activeStars.includes(1) ? activeStar : star} alt=""/>
                    <img
                        className={styles.star}
                        onClick={() => setDifficult([1, 2])}
                        src={activeStars.includes(2) ? activeStar : star} alt=""/>
                    <img
                        className={styles.star}
                        onClick={() => setDifficult([1, 2, 3])}
                        src={activeStars.includes(3) ? activeStar : star} alt=""/>
                </div>
            </div>
            <div>
                <strong>
                    {description}
                </strong>
            </div>
            <ul>
                {
                    tags.map(tag =>
                        <i>
                            <li className={styles.li} key={tag.name}><strong>-</strong> {tag}</li>

                        </i>
                    )
                }
            </ul>
            <div className={styles.container}>
                <NavLink to={`/workout/${name}/${activeStars.at(-1)}`}>
                    <Button className={'blue'}>Играть</Button>
                </NavLink>
            </div>
        </div>
    );
};

export default GameCard;