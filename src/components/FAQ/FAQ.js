import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQContents} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero 
      titleText={FAQContents.title}
      imageSource={FAQContents.imageSource}
    />
    <div>
      {FAQContents.content}
    </div>
  </Container>
);

export default FAQ;