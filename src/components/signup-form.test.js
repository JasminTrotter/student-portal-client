import React from 'react';
import { shallow } from 'enzyme';


import { SignUpForm } from './signup-form';

describe('<SignUpForm />', () => {
  it('Renders without crashing', () => {
    shallow(<SignUpForm />);
  });