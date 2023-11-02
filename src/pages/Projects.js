import React from 'react';
import default_image from '../res/common/saidup.png';
import code_editor from '../res/tech/code-editor.png'
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import "../styles/pages/Projects.css"


const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        <h2>
          Here is my work, divided into categories:
        </h2>
        <br />
        Categories are overlapping umbrella terms, but they help organize.
        <br />

      </p>

      <div className='card-container'>
        <Card to="/projects/tech" imageSrc={code_editor} alt="placeholder" category="Tech" />
        <Card to="/projects/games" imageSrc={default_image} alt="placeholder" category="Games" />
        <Card to="/projects/art" imageSrc={default_image} alt="placeholder" category="Art" />
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