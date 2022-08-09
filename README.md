# JCG-Product-Card

Este es un paquete de prueba de despliegue en NPM

### Juan Carlos Galvis Rodriguez

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'jcg-product-card'
```

```
<ProductCard
    product={product}
    initialValues={{
      count: 4,
      maxCount: 10,
    }}
>
    {({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
      <>
        <ProductImage/>
        <ProductTitle/>
        <ProductButtons/>
      </>
    )}
</ProductCard>
```
