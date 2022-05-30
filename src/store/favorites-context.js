
import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite:(favoriteMeetup) => {},
    removeFavorite:(meetupId) => {},
    itemsIsFavorite:(meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [favorites, setFavorites] = useState([]);

    function addFavoriteHandler (favoriteMeetup){
        setFavorites((prevFavorite) => {
           return prevFavorite.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId){
        setFavorites((prevFavorite) => {
            return prevFavorite.filter(meetup => meetup.id !== meetupId);
        })
    }

    function itemIsFavoriteHandler(meetupId){
        return favorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: favorites,
        totalFavorites: favorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemsIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;