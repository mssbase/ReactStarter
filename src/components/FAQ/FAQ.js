import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQContents} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero
      titleText={FAQContents.title}
      image={FAQContents.imageSource}
    />
    {FAQContents.content}
  </Container>
);

export default FAQ;