import styles from './Favorite.module.scss';
import PageTitle from "../PageTitle/PageTitle";
import Card from '../Card/Card';
import { useSelector } from "react-redux";
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {
    const cards = useSelector(getFavoriteCards);

    if(!cards.length) 
        return (
            <div>
                <PageTitle>Favorite</PageTitle>
                <p className={styles.no_cards}> Ups! There is no cards in favorites!</p>
            </div>
        );

        return (
            <div className={styles.favorites}>
                <PageTitle>Favorite</PageTitle>
                <ul className={styles.column}>
                {cards.map(card => <Card key={card.id}  title={card.title} isFavorite={card.isFavorite} />)} 
                </ul>
            </div>
    )
}

export default Favorite;