import styles from './ColumnForm.module.scss';
import { useState } from 'react';

const ColumnForm = props => {
        const [value, setValue] = useState(''); //dodaje do komponentu nowy stan - useState, o wartosci pustego stringa, dostep do wartosci tego stanu bedzie dostepny pod stala value, a funckja do modyfikacji pod stala setValue
        
        const handleSubmit = e => {
            e.preventDefault();
            props.action({ title: value });
            setValue('');
        }

        return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button>Add column</button>
        </form>
    );
};

export default ColumnForm;