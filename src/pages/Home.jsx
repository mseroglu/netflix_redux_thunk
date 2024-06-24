import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGenres, getPopular } from "../redux/actions"
import Hero from "../components/Hero"
import Loader from "../components/Loader"
import MovieList from "../components/MovieList"
import Error from "../components/Error"


const Home = () => {
  const { isLoading, error, genres } = useSelector((store) => store.genreReducer)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopular())
    dispatch(getGenres())
  }, [])


  return (
    <div>
      <Hero />
      <hr />
     { 
        isLoading ? <Loader /> : error ? <Error err={error} /> : (
          genres.map((genre) => <MovieList key={genre.id} genre={genre} />)
        )
      }
    </div>
  )
}

export default Home
