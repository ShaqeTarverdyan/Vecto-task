import home from '../../assets/images/menu-Icons/home.png';
import genres from '../../assets/images/menu-Icons/genres.png';
import movies from '../../assets/images/menu-Icons/movies.png';
import watchLater from '../../assets/images/menu-Icons/watchLater.png';
import search from '../../assets/images/menu-Icons/search.png';
import tvShow from '../../assets/images/menu-Icons/tvShows.png';


export const menuItems = [
    {
        id: 1,
        name: 'Search',
        icon: search,
        isActive: false
    },
    {
        id: 2,
        name: 'Home',
        icon: home,
        isActive: true
    },
    {
        id: 3,
        name: 'TV Shows',
        icon: tvShow,
        isActive: false
    },
    {
        id: 4,
        name: 'Movies',
        icon: movies,
        isActive: false
    },
    {
        id: 5,
        name: 'Genres',
        icon: genres,
        isActive: false
    },
    {
        id: 6,
        name: 'Watch Later',
        icon: watchLater,
        isActive: false
    },
]