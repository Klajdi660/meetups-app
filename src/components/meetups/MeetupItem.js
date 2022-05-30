import Card from '../ui/Card';
import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';
import firebasE from '../../config';



function MeetupItem(props){

    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemsIsFavorite(props.id);

    console.log("image",props.image)

    function toogleFavoriteStatusHandler(){
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                image: props.image,
                title: props.title,
                address: props.address, 
                description: props.description
            });
        }
        console.log(itemIsFavorite)
    }

    function remove(id) {
        
        console.log(id)

        firebasE.database().ref(`meetup/${id}`).remove();
        setTimeout(() => {
            window.location.reload();

        },1000)

    }

    return (
        <li className={classes.item} style={{listStyle: 'none'}}>
            <Card>
                <div className={classes.image}>
                   <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                <h3>Titulli: {props.title}</h3>
                    <address>Adresa: {props.address}</address>
                    <p>Pershkrimi: {props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toogleFavoriteStatusHandler}> {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                    <button style={{marginLeft: 100}} onClick={()=>remove(props.id)}> Delete meetup </button>

                </div>

            </Card>
        </li>
    );
}

export default MeetupItem;