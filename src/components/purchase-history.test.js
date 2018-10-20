import React from 'react';
import { shallow } from 'enzyme';
import store from '../store';
import '../mock-localstorage'


import PurchaseHistory from './purchase-history';

describe('<PurchaseHistory />', () => {
  it('Renders without crashing', () => {

    shallow(<PurchaseHistory store={store}/>);
    
  });
});