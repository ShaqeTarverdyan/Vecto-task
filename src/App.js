import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import Menu from './sections/menu';
import FeaturedMovie from "./sections/featuredMovie";
import TrendingSection from './sections/trendingSection';

import movies from './data.json'

function App() {
  const [featuredMovie, setFeaturedMovie] = useState(movies.Featured);
  const [lastSeenIds, setLastSeenIds] = useState([]);
  const [storedLastSeenIds, setStoredLastSeenIds] = useState([]);


  const limitedMovies = movies.TendingNow.length > 50 ? movies.TendingNow.slice(0, 50) : movies.TendingNow;
  const updetedLimitedMovies = limitedMovies.map(movie => (
    {...movie, lastSeenIndex: storedLastSeenIds.findIndex((id) =>  id === movie.Id)}

  ))

  updetedLimitedMovies.sort((a,b) => {
    if (a.lastSeenIndex === b.lastSeenIndex){ 
      if (Number(new Date(a.Date)) === Number(new Date(b.Date)))return 0;
      else if (Number(new Date(a.Date) > Number(new Date(b.Date))))return -1;
      else return 1
    } else {
      if (a.lastSeenIndex > b.lastSeenIndex) return -1;
      else return 1;
    }
  });

  const handleFeaturedMovieChange = useCallback((movie) => {
    setLastSeenIds((prevLastSeenIds) =>  {
      const newLastSeenIds = [...prevLastSeenIds];
      const clickedMovieIndex = newLastSeenIds.findIndex((id) =>  id === movie.Id);
      if(clickedMovieIndex !== -1) {
        newLastSeenIds.splice(clickedMovieIndex, 1)
      }
      newLastSeenIds.push(movie.Id)
      return newLastSeenIds;
    });
    setFeaturedMovie({...movie})
  }, []);

  useEffect(() => {
    if(lastSeenIds.length) {
      localStorage.setItem("lastSeenIds", JSON.stringify(lastSeenIds));
    }

  }, [lastSeenIds]);

  useEffect(() => {
    const stringLastSeenIds = localStorage.getItem("lastSeenIds");
    const storedLastSeenIds = JSON.parse(stringLastSeenIds);
    if(storedLastSeenIds) {
      setLastSeenIds(storedLastSeenIds);
      setStoredLastSeenIds(storedLastSeenIds);
    }
  },[])

  return (
    <Wrapper>
      <Menu/>
      <Content>
        <FeaturedMovie featuredMovie={featuredMovie}/>
        <TrendingSection 
          movies={updetedLimitedMovies} 
          handleFeaturedMovieChange={handleFeaturedMovieChange}
        />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  position: ${({isOpenFullMenu}) => isOpenFullMenu ? 'relative' : 'unset'};
  width: 100%;
  height: 100vh;
`;
export default App;
