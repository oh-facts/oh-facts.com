import { Link } from "react-router-dom";
import React, { useState } from 'react';

const EngineCard = ({ title, date, gif_src, image_src, bio, link }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div>
            <br />
            <div className="game-engines">

                <div className="game-engines-vbox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <h1>{title}</h1>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        github link ↗
                    </a>
                    <p>{date}</p>

                    <img className="squares_gif" src={isHovered ? gif_src : image_src} alt="a gif where lots of squares rotate" />


                    <p>{bio}</p>
                </div>


            </div>
        </div>
    );
};


export default EngineCard;
