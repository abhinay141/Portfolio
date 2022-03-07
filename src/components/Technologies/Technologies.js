import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaRobot } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      An aspiring Data Scientist with relevant experience in building Data-Intensive applications, which are scalable, clean, and ready for production. Proficient in Predictive modeling, Time series forecasting, Machine learning, Deep Learning Algorithms, Data pre-processing, Data Analysis, as well as languages, including python, C++, and C. I am also a decent Full Stack Developer who has a pretty good command over JavaScript technologies across the whole stack( Express.js, Node.js, React.js), with relevant project experience in building complete web applications with backend API systems.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaRobot size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            Experience in building <br />
            data intensive applications.
        </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>MERN STACK</ListTitle>
          <ListParagraph>
            Experience with <br />
            building full-stack web-apps
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
