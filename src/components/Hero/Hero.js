import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio Website.
        </SectionTitle>

  

        <SectionText>
        CS UnderGrad | Data Structures | Algorithms | Machine learning | Deep Learning | Data Analysis | MERN stack | C, C++, Python, JavaScript | Incoming Master's Student.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
