import React from 'react';
import './Movies.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const Api_key = 'c45a857c193f6302f2b5061c3b85e743';
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch Api');
                }
                const data = await response.json();
                setAllMovies(data.results);
            } catch {
                setError(error.message);
            }
        };

        fetchMovies();
    }, []);

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    return (
        <div>
            <div className='movies'>
                {allMovies.map((movie, index) => (
                    <Link to={`/${movie.id}`} key={index}>
                        <div className='movie'>
                            <img
                                src={`${imageBaseUrl}${movie.poster_path}`}
                                alt=''
                            />
                            <p>{movie.original_title}</p>
                            <p>Rating : {movie.vote_average}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Movies;
