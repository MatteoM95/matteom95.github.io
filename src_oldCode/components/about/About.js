import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I'm Matteo{' '}
              <span role="img" aria-label="lightning">
              🟩⬜️🟥
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
              📊 
              </span>{' '}
              I'm a data science student focusing on Machine Learning and Deep Learning
            </p>
            <p>
              <span role="img" aria-label="lightning">
              💻
              </span>{' '}
              You can find me working mainly with Python, TensorFlow, PyTorch and C++
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                🔍
                </span>{' '}
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'learning new technologies',
                    'solving complex problems',
                    'collaborating with others',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p>
              In 2020 I graduated in Computer Engineering at{' '}
              <a
                className='textLink'
                href="https://www.polito.it/en"
                target='_blank'
                spy={true}
                smooth={true}
                duration={500}
                style={{ textDecoration: 'none' }}
              >Politecnico di Torino</a>
              {' '}(Turin, IT).
              Then I started my M.Sc in Data Science and Engineering. I had the chance to work on several{' '}
              <Link
                className="textLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                projects
              </Link>
              ; if you want to see all of them checkout my{' '}
              <a
                className='textLink'
                href="https://github.com/MatteoM95"
                target='_blank'
                spy={true}
                smooth={true}
                duration={500}
                style={{ textDecoration: 'none' }}
              >GitHub</a>
              .
            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Turin, IT</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
