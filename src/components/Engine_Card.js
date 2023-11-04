import { Link } from "react-router-dom";
import React, { useState } from 'react';

const EngineCard = ({ title, gen, date, gif_src, image_src, bio, link }) => {

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
                    <h1>{title}</h1> <h5>({gen})</h5>
                    
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <u>github</u> ↗
                    </a>
                    <p>{date}</p>

                {/*
                    Use alternate still image when mouse is not hovering over panel to prevent gif stutter
                 */}
                 
                    <img className="squares_gif" src={isHovered ? gif_src : image_src} alt="a gif where lots of squares rotate" />


                    <p>{bio}</p>
                </div>


            </div>
        </div>
    );
};


export default EngineCard;
