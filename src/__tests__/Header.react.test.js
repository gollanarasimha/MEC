import React from 'react';
import {shallow} from 'enzyme';
import Header from '../components/ui/Header';
import logo from '../img/logo.png';

test('Test Header image rendering', () => {
  const component = shallow(<Header />);
  expect(component.containsMatchingElement(<img src={logo} alt=''/>))
})