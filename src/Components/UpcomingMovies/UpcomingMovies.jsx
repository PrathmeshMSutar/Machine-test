import React, { useState, useEffect } from 'react';

const UpcomingMovies = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const Api_key = 'c45a857c193f6302f2b5061c3b85e743';
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch Api');
                }
                const data = await response.json();
                setUpcomingMovies(data.results);
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
                {upcomingMovies.map((movie, index) => (
                    <div className='movie' key={index}>
                        <img
                            src={`${imageBaseUrl}${movie.poster_path}`}
                            alt=''
                        />
                        <p>{movie.original_title}</p>
                        <p>Rating : {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingMovies;
