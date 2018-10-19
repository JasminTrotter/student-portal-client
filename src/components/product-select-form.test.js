import React from 'react';
import { shallow } from 'enzyme';


import { ProductSelectForm } from './product-select-form';

describe('<ProductSelectForm />', () => {
  it('Renders without crashing', () => {
    shallow(<ProductSelectForm />);
  });