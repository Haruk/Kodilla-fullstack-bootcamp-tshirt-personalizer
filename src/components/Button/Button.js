import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
    return (<button
        onClick={(e) => {
            e.preventDefault();
            console.log(`Summary`)
            console.log(`=================`)
            console.log(`Name: ${props.name}`);
            console.log(`Price: ${props.price}`);
            console.log(`Size: ${props.size.name}`);
            console.log(`Color: ${props.color}`);
        }}
        className={clsx(styles.button, props.className)}>{props.children}</button>);
};

export default Button;