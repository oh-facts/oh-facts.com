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

    /*
        If a gif or image is not given, don't display them at all.
        Omitting this causes the alt tag to show up
    */
    const shouldDisplayImage = gif_src && image_src;

    return (
        <div>
            <br />
            <div className="game-engines">
                <div className="game-engines-vbox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <h1>{title}</h1> <h5>{gen}</h5>

                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <u>github</u> ↗
                    </a>
                    <p>{date} </p>

                    {shouldDisplayImage && (
                        <img className="squares_gif" src={isHovered ? gif_src : image_src} alt="a gif where lots of squares rotate" />
                    )}

                    <p>{bio}</p>
                </div>
                
            </div>
        </div>
    );
};

export default EngineCard;
