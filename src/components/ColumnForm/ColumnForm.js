import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = props => {
        const [title, setTitle] = useState(''); //dodaje do komponentu nowy stan - useState, o wartosci pustego stringa, dostep do wartosci tego stanu bedzie dostepny pod stala value, a funckja do modyfikacji pod stala setValue
        const [icon, setIcon ] = useState('');
        const dispatch = useDispatch();

        const handleSubmit = e => {
            e.preventDefault();
            dispatch(addColumn({ title, icon, listId:props.listId }));
            setTitle('');
            setIcon('');
        }

        return (
            <form className={styles.columnForm} onSubmit={handleSubmit}>
            <label>Title:</label> <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <label>Icon:</label> <input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
                <Button>Add column</Button>
            </form>
        );
};

export default ColumnForm;