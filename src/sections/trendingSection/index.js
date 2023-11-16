import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


const TrendingSection = ({movies, handleFeaturedMovieChange}) => {
    return (
        <Wrapper>
            <Swiper
                spaceBetween={10}
                slidesPerView={8}
            >
                {
                    movies.length <= 50 && movies.map(movie => {
                        const imageUrl = require(`../../assets/images/cover-images/${movie.CoverImage}`)
                        return (
                            <SwiperSlide key={movie.Id}>
                                <div onClick={() => handleFeaturedMovieChange(movie)}>
                                    <img src={imageUrl} alt={movie.Title} style={{maxWidth: '100px'}}/>
                                </div>
                                
                            </SwiperSlide>
                        )
                    })
                }
            
            </Swiper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: black;
    height: 30%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`

export default TrendingSection;