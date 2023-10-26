import React from 'react';
import default_image from '../res/common/saidup.png';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        Notable work:
        <br /> <br />

      </p>
      
      <div className='card-container'>
        <div className='card'>
          <img className='card-image' src={default_image} alt="placeholder" />
          <div className='card-desc-below'>
            <p>
              this is box 1
            </p>
          </div>
        </div>

        <div className='card'>
          <img className='card-image' src={default_image} alt="placeholder" />
          <div className='card-desc-below'>
            <p>
              this is box 2
            </p>
          </div>
        </div>

        <div className='card'>
          <img className='card-image' src={default_image} alt="placeholder" />
          <div className='card-desc-below'>
            <p>
              this is box 2
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