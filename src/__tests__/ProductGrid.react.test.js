import React from 'react';
import {shallow} from 'enzyme';
import ProductGrid from '../components/products/ProductGrid';
import Spinner from '../components/ui/Spinner';
import ProductItem from '../components/products/ProductItem';
const mockProductCard = {
  default_image_urls: {main_image_url: ''},
  full_name: 'Test full name',
  name: 'Test name',
  product_code: 'test-product'
}
test('Test ProductGrid loading rendering', () => {
  const loadingGrid = shallow(<ProductGrid isLoading={true} />);
  expect(loadingGrid.matchesElement(<Spinner />)).toEqual(true);
  expect(loadingGrid.contains([<ProductItem item={{}} />])).toEqual(false);
})

test('Test ProductGrid Item rendering', () => {
  const productGrid= shallow(<ProductGrid isLoading={false} items={[mockProductCard]} />);
  expect(productGrid.contains([<ProductItem item={mockProductCard}/>])).toEqual(true);
  expect(productGrid.contains([<Spinner />])).toEqual(false)
})