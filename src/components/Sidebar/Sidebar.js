import Link from 'next/link';
import styles from '../../../styles/Sidebar.module.css';
import MenuItem from "./MenuItem/MenuItem";

const Sidebar = () => {
    return (
        <div className={styles.Container}>
            <MenuItem itemName="ADD GAME" path="/"/>
            <MenuItem itemName="RESULTS" path="/result"/>
        </div>
    );
};

export default Sidebar;
