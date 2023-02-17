import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
// import clsx from 'clsx';

import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const price = useMemo(() => props.basePrice + currentSize.additionalPrice, [currentSize.additionalPrice, props.basePrice])

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          color={currentColor}
          price={price}
          name={props.title} />
      </div >
    </article >
  )
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  colors: PropTypes.array,
  sizes: PropTypes.array,
  basePrice: PropTypes.number,
}

export default Product;