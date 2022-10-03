import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { BsCheckAll } from 'react-icons/bs';
import { RiPlayListAddFill } from 'react-icons/ri'
import { MdFavoriteBorder } from 'react-icons/md'
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

const MainNavigation = () => {
    const favoritesCtx = useContext(FavoritesContext);

    return ( 
        <header className={classes.header}>
            <div className={classes.logo}>My Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups <BsCheckAll /> </Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add new meetup <RiPlayListAddFill /> </Link>
                    </li>
                    <li>
                        <Link to="/favorites">My favorites  <MdFavoriteBorder /> <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;