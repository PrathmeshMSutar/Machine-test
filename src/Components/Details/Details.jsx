import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const { movie } = useParams();
    const [details, setDetails] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const Api_key = 'c45a857c193f6302f2b5061c3b85e743';
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movie}?api_key=${Api_key}&language=en-US`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch Api');
                }
                const data = await response.json();
                setDetails(data);
            } catch {
                // setError(error.message);
            }
        };

        if (movie) {
            fetchMovies();
        }
    }, [movie]);

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    return (
        <div>
            <div className='banner'>
                <div className='left-section'>
                    <div className='details'>
                        <div className='logo'>
                            <img
                                src={`${imageBaseUrl}${details.poster_path}`}
                                alt=''
                            />
                        </div>
                        <div className='title'>
                            <p>{details.title}</p>
                            <p>Rating : {details.vote_average}</p>
                            <p>{details.runtime} Min</p>
                            {/* <p>{details.budget}</p> */}
                            {/* <ul>
                                {details.genres.map((genre) => (
                                    <li key={genre.id}>{genre.name}</li>
                                ))}
                            </ul> */}
                            <p>Release Date : {details.release_date}</p>
                        </div>
                    </div>
                    <div className='overview'></div>
                </div>
            </div>
            <div className='cast'></div>
        </div>
    );
};

export default Details;
