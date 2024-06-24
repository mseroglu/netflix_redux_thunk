import { useEffect, useState } from "react"
import api from "../utils/api"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { baseImgURL } from "../utils/constants";
import { Link } from "react-router-dom";
import '@splidejs/react-splide/css';


const MovieList = ({ genre }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        api.get(`/discover/movie?with_genres=${genre.id}`)
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err.message))
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         accept: 'application/json',
        //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGVjYmU2MGFiZmMxZWM4MzRjNzhkYjg0MjdjYWY2MiIsIm5iZiI6MTcxOTIzMjkwOC4yMTc1MzIsInN1YiI6IjY2Nzk2ODg2YWIyOWM2NTU3MGY0ZTEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MigtLkIpAGoPRtqPVdKeFr_9lIYM9qz8vzA3jUinwmo'
        //     }
        // }

        // fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=tr-TR&page=1&sort_by=popularity.desc&with_genres=${genre.id}`, options)
        //     .then(response => response.json())
        //     .then(response => setMovies(response.results))
        //     .catch(err => console.error(err));

    }, [])
    //console.log("MovieList ",movies)

    return (
        <div className=" my-10">
            <h2 className="text-2xl text-white font-semibold my-3">{genre.name}</h2>

            <div>
                <Splide options={{
                    type: "loop",
                    height: '12rem',
                    autoWidth: true,
                    pagination: false,
                    gap: "10px",
                }} aria-label="My Favorite Images">

                    {movies?.map((movie) => (
                        <SplideSlide key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <img className="max-w-[200px] h-full cursor-pointer rounded" src={baseImgURL + movie.poster_path} alt={movie.title} />
                            </Link>
                        </SplideSlide>)
                    )}
                </Splide>
            </div>
        </div>
    )
}

export default MovieList


/* 

*/