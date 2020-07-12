import React from 'react';
import {shallow} from 'enzyme';
import Search from '../components/ui/Search';
let query = '';
const mockQuery = 'cap';
const getQuery = (q) => {
  query = q
}
test("Test search component",() => {
  const search = shallow(<Search getQuery={getQuery} />);
  const input = search.find('input');
  input.simulate('change', {target: {value: mockQuery}});
  setTimeout(()=> expect(query).toEqual(mockQuery), 500);
})