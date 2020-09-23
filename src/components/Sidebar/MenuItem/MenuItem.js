import Link from 'next/link';
import styles from '../../../../styles/MenuItem.module.css';

const MenuItem = ({ itemName, path }) => {
    return (
        <div className={styles.Container}>
            <Link href={path}><a>{itemName}</a></Link>
        </div>
    );
};

export default MenuItem;
