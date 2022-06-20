import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getListById, getColumnByList } from '../../redux/store';
import { useSelector } from 'react-redux';
 
const List = () => {

    const columns = useSelector(state => getColumnByList(state, 1));
    const lists = useSelector(state => state.lists);
    const listData = useSelector(state => getListById(state, 1))

    return (
    <div className={styles.list}>
        <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}</h2>
        </header>
        <p className={styles.description}>{listData.description}</p>
        <section className={styles.columns}>
             {columns.map(column => <Column key={column.id} {...column} />)}
        </section>
        <ColumnForm />
    </div>
    );
};

export default List;