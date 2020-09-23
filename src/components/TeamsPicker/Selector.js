import styles from '../../../styles/Selector.module.css';

const Selector = ({options, changed, value, type, size}) => {

    const selectorClasses = [ styles.Selector ];
    if (size === 'SMALL') {
        selectorClasses.push(styles.Small)
    }
    if (size === 'MEDIUM') {
        selectorClasses.push(styles.Medium)
    }

    return (
        <div>
            <select className={selectorClasses.join(' ')} onChange={event=> changed(event, type)} value={value}>
                {
                   options.map( (option, index) => (
                       <option key={index} value={option.id}>{option.name}</option>
                   ))
                }
            </select>
        </div>
    );
};

export default Selector;
