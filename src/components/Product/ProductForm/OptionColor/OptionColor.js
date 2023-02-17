import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './OptionColor.module.scss';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {colors.map((color, index) => (
                    <li key={index}>
                        <button
                            onClick={() => setCurrentColor(color)}
                            type="button"
                            className={clsx(styles[`color${capitalizeFirstLetter(color)}`], currentColor === color && styles.active)}></button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

OptionColor.propTypes = {
    colors: PropTypes.array,
    currentColor: PropTypes.string,
    setCurrentColor: PropTypes.func,
}

export default OptionColor;