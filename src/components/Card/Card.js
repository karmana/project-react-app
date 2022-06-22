import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();

    const toggle = e => {
        e.preventDefault();
        dispatch(toggleFavorite({ id: props.id, isFavorite: props.isFavorite }));
    };

    const handleRemove = e => {
        e.preventDefault();
        dispatch(removeCard({ id: props.id }))
    };
    
    return (
        <li className={styles.card}> {props.title}  
            <div>
                <button onClick={toggle} className={clsx(styles.button, props.isFavorite && styles.isActive)}>
                    <span className='fa fa-star-o'></span>
                </button>
                <button onClick={handleRemove} className={styles.button}>
                    <span className='fa fa-trash'></span>
                 </button>
            </div>
        </li>
        );
    };

export default Card;
