import Link from 'next/link';
import styles from '../../../styles/Sidebar.module.css';
import MenuItem from "./MenuItem/MenuItem";

const Sidebar = () => {
    return (
        <div className={styles.Container}>
            <MenuItem itemName="ADD GAME" path="/"/>
            {/*<MenuItem itemName="Adding" path="/add"/>*/}
        </div>
    );
};

export default Sidebar;
