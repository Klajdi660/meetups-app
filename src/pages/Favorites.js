import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <section>
      <h1>My Favorites</h1>
      {favoritesCtx.totalFavorites === 0 ? (
        <p>You got no favorites yet. Start adding some meetups.</p>
      ) : (
        <MeetupList meetups={favoritesCtx.favorites} />
      )}
    </section>
  );
};

export default Favorites;
