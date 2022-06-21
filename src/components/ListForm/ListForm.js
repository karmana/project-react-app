import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = props => {
        const [title, setTitle] = useState(''); 
        const [decription, setDescription ] = useState('');
        const dispatch = useDispatch();

        const handleSubmit = e => {
            e.preventDefault();
            dispatch(addList({ title, decription }));
            setTitle('');
            setDescription('');
        }

        return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
           <label>Title:</label> <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
           <label>Decription:</label> <input type="text" value={decription} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
    );
};

export default ListForm;