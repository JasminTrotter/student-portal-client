import React from 'react';
import { shallow } from 'enzyme';

import store from '../../store';
import Payment from './Payment';

describe('<Payment />', () => {
  it('Renders without crashing', () => {
    shallow(<Payment store={store}/>);
  });
 });