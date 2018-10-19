import React from 'react';
import { shallow } from 'enzyme';


import { MyStoreCheckout } from './my-store-checkout';

describe('<MyStoreCheckout />', () => {
  it('Renders without crashing', () => {
    shallow(<MyStoreCheckout />);
  });