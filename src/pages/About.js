import React from 'react';
import "../styles/pages/About.css"

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <div className='about'>
        <p>
          I am a junior at Uni majoring in CS. I like working on low-level systems, simulations and automation tools.
          I love writing everything (within reason) from scratch and and my favorite language is whatever I am being paid for.
          I know C, C++, Rust, Java, C#, python and JS, and I am always willing to learn more.
          I usually write my code in C since it has every feature I need, and the ones it doesn't, I just write them myself.
          <br /><br />
          Most of my development time, apart from course work is spent on my game engine. I intend to work on it till I can simulate
          millions of particles to make sandbox ecosystems with.
          <br /><br />
          Some of my favorite artists are Mac Miller, XXXTENTACION, Kanye West, Alex G and Jack Stauber. Here is my 
          <a href="https://open.spotify.com/user/uho1ipe8k26c5x1otn51p3sh9" target="_blank" rel="noopener noreferrer"> <u> spotify</u> ↗</a>
          
        </p>
      </div>
    </div>
  );
};

export default About;