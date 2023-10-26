import React from 'react';
import default_image from '../res/common/saidup.png';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        <h2> 
          Here is my work, divided into categories:
        </h2>
        <br />
        There is overlap between the types, the categorization is to make it look cleaner.
        <br />

      </p>

      <div className='card-container'>
        <div className='card'>
          <img className='card-image' src={default_image} alt="placeholder" />
          <div className='card-desc-below'>
            <p>
              Tech
            </p>
          </div>
        </div>

        <div className='card'>
          <img className='card-image' src={default_image} alt="placeholder" />
          <div className='card-desc-below'>
            <p>
              Games
            </p>
          </div>
        </div>

        <div className='card'>
          <img className='card-image' src={default_image} alt="placeholder" />
          <div className='card-desc-below'>
            <p>
              Art
            </p>
          </div>
        </div>

      </div>

    </div>
  );

};

export default Projects;


/*
I am thinking cards for major categories
1) tech
2) art
3) games


*/