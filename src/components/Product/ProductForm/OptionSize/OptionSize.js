import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './OptionSize.module.scss';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {sizes.map((size, index) => (
                    <li key={index}>
                        <button
                            onClick={() => { setCurrentSize(size) }}
                            type="button"
                            className={clsx(currentSize.name === size.name && styles.active)}>{size.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

OptionSize.propTypes = {
    sizes: PropTypes.array,
    currentSize: PropTypes.object,
    setCurrentSize: PropTypes.func,
}

export default OptionSize;