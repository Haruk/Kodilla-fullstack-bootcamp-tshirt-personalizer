import PropTypes from 'prop-types';

import styles from './ProductForm.module.scss';

import Button from '../../Button/Button.js';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';

const ProductForm = ({ sizes, currentSize, setCurrentSize, colors, currentColor, setCurrentColor, color, price, name }) => {

    return (

        <form>
            <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
            <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
            <Button className={styles.button} size={currentSize} color={color} price={price} name={name}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    )
}

ProductForm.propTypes = {
    sizes: PropTypes.array,
    currentSize: PropTypes.object,
    setCurrentSize: PropTypes.func,
    colors: PropTypes.array,
    currentColor: PropTypes.string,
    setCurrentColor: PropTypes.func,
    color: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
}

export default ProductForm;