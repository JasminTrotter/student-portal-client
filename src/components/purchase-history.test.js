import React from 'react';
import { shallow } from 'enzyme';


import PurchaseHistory from './purchase-history';

describe('<PurchaseHistory />', () => {
  it('Renders without crashing', () => {
    shallow(<PurchaseHistory />);
  });
});