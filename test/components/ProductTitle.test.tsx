import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { productUno } from '../data/products';

describe('ProductTitle', () => {
  test('debe de mostrar el componente correctamente con el titulo perzonalizado', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del producto', async () => {
    const wrapper = renderer.create(
      <ProductCard product={productUno}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
