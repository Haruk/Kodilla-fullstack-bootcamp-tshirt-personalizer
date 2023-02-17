import PropTypes from 'prop-types';

import styles from './ProductImage.module.scss';

const ProductImage = ({ name, color }) => {
    return (
        <div className={styles.imageContainer}>
            <img className={styles.image}
                alt={`${name} shirt`}
                src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${color}.jpg`} />
        </div>
    )
}

ProductImage.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
}

export default ProductImage;