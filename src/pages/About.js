import React from 'react';
import "../styles/pages/About.css"

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <div className='about'>
        <p>
          I am currently in my fourth semester, majoring in computer science. I like
          working on low-level systems, simulations and automation tools. I love
          writing everything (within reason) from scratch and my favorite language is
          C since it has every feature I need, and the ones it doesn't, I just write them
          myself.

          <br /><br />
          Most of my development time, is spent on my game engine. Graphics programming is very fun.
          <br /><br />
          Some of my favorite artists are Mac Miller, XXXTENTACION, Kanye West, Alex G and Jack Stauber. Here is my
          <a href="https://open.spotify.com/user/uho1ipe8k26c5x1otn51p3sh9" target="_blank" rel="noopener noreferrer"> <u> spotify</u> ↗</a>

        </p>
      </div>
    </div>
  );
};

export default About;