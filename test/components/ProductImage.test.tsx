import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { productDos } from '../data/products';

describe('ProductImage', () => {
  test('debe mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer.create(<ProductImage img="https://hola.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con la imagen del producto', async () => {
    const wrapper = renderer.create(
      <ProductCard product={productDos}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
