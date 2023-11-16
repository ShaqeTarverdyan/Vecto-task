import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player'

import { convertSToHM } from '../../helper';
    
const FeaturedMovie = ({featuredMovie}) => {
    const { ReleaseYear, MpaRating,Description, Duration, VideoUrl, Category} = featuredMovie;
    const convertiedDurationToHours = convertSToHM(Duration);

    const coverImageUrl = require(`../../assets/images/cover-images/${featuredMovie.CoverImage}`);
    const movieTitle = require(`../../assets/images/cover-images/${featuredMovie.TitleImage}`);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if(VideoUrl) {
            setTimeout(() => {
                setIsPlaying(true);
            }, 2000)
        }
    }, [VideoUrl])
  
    return (
        <FeaturedMovieWrapper coverImageUrl={coverImageUrl}>
            <MovieInfo>
                <p>{Category}</p>
                <img src={movieTitle} alt="FeaturedMovieTitle" style={{width: '80%'}}/>
                <DeepInfo>
                    <span>{ReleaseYear}</span>
                    <span>{MpaRating}</span>
                    <span>{convertiedDurationToHours}</span>
                </DeepInfo>
                <p>{Description}</p>
                <Action>
                    <Button action="play">Play</Button>
                    <Button>More Info</Button>
                </Action>
            </MovieInfo>
            <ReactPlayer 
                url={VideoUrl} 
                playing={isPlaying}
                style={{
                    visibility: isPlaying ? 'visible' : 'hidden'
                }}
                wrapper={VideoWrapper}
             />
        </FeaturedMovieWrapper>
    )
}
const FeaturedMovieWrapper = styled.div`
    background-image: ${({coverImageUrl}) => coverImageUrl ? `url(${coverImageUrl})` : ''};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 70%;
`;
const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 16px;
    width: 500px;
    color: white;
    padding-top: 200px;
    z-index: 5;
    position: absolute;
`;
const Action = styled.div`
    display: flex;
    margin-top: 24px;
    button:last-child {
        margin-left: 24px;
    }  
`;
const Button = styled.button`
    width: 120px;
    border: 0;
    border-radius: 20px;
    padding: 10px 0;
    background-color: ${({action}) => action === 'play' ? 'white' : 'blue'};
    color: ${({action}) => action === 'play' ? 'black' : 'white'};
    cursor: pointer;
`

const DeepInfo = styled.div`
    display: flex;
    column-gap: 12px;
    margin: 12px 0;
`
const VideoWrapper = styled.div`
    width: 100% !important;
    height: auto !important;
    position: absolute;
    top: 0;
    right: 0;
`


export default FeaturedMovie;