import React from 'react';
import { shallow } from 'enzyme';


import CardSection from './CardSection';

describe('<CardSection />', () => {
  it('Renders without crashing', () => {
    shallow(<CardSection />);
  });
 });