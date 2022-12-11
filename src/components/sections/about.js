import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    // &:hover,
    // &:focus {
    //   outline: 0;

    //   &:after {
    //     top: 15px;
    //     left: 15px;
    //   }

    //   .img {
    //     filter: none;
    //     mix-blend-mode: normal;
    //   }
    // }

    // .img {
    //   position: relative;
    //   border-radius: var(--border-radius);
    //   mix-blend-mode: multiply;
    //   filter: grayscale(100%) contrast(1);
    //   transition: var(--transition);
    // }

    // &:before,
    // &:after {
    //   content: '';
    //   display: block;
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   border-radius: var(--border-radius);
    //   transition: var(--transition);
    // }

    // &:before {
    //   top: 0;
    //   left: 0;
    //   background-color: var(--navy);
    //   mix-blend-mode: screen;
    // }

    // &:after {
    //   border: 2px solid var(--green);
    //   top: 20px;
    //   left: 20px;
    //   z-index: -1;
    // }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Python',
    'Node.js',
    'Kubernetes',
    'GraphQL',
    'Go',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I am Marut Pandya, I am pursuing an MS in Computer Science at IIT, Chicago. I
              am Innovative Software Engineer with 3 years of experience in application design,
              development and deployment. Highly experienced in writing code and algorithms in
              various programming languages.
            </p>

            <p>
              Possesses an unbridled passion for Software Engineering with comprehensive knowledge
              of full stack development concepts and other related techniques. Unmatched abilities
              to identify, understand and translate program requirements into advanced technical
              solutions through Python, Go and JavaScript. My Adaptive nature fits me in almost all
              technical verticals with a growth mindset. I love working in fast paced teams doing
              countless brainstorming sessions to come up with the best. I love Problem solving.
              Ownership, Leadership and Growth as an individual & in a team are roots for success I
              believe and One being Empathetic can flourish in teams as an Individual.
            </p>

            {/* <p>
              I also recently{' '}
              <a href="https://www.newline.co/courses/build-a-spotify-connected-app">
                launched a course
              </a>{' '}
              that covers everything you need to build a web app with the Spotify API using Node
              &amp; React.
            </p> */}
            <p>
              Problem solving being the part of my job, I always think in a structured way. I love
              doing groundwork i.e research and propose the best fit. Curiosity and Eagerness to
              learn drives me to learn about the latest technologies and trends in the market, which
              interests me in community work as well.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
