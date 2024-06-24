import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../utils/api"
import { baseImgURL } from "../utils/constants"
import Loader from "../components/Loader"
import DetailDisplay from "../components/DetailDisplay"
import millify from "millify"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import ActorCard from "../components/ActorCard"


const Detail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const params = {
      append_to_response: "credits",
    }
    api.get("/movie/" + id, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.message))

  }, [])

  console.log(id, movie)
  return (
    <div>
      {!movie
        ? (<Loader />)
        : (<div className="flex flex-col gap-20">
          {/* üst */}
          <section className="h-[30vh] relative">
            <img className=" h-full w-full object-cover" src={baseImgURL + movie.backdrop_path} alt={movie.title} />
            <div className="bg-dark inset-0 absolute grid place-items-center bg-black bg-opacity-40">
              <h2 className="text-2xl font-semibold">{movie.title}</h2>
            </div>
          </section>
          {/* orta */}
          <section >
            <div className="flex flex-col gap-10 ">
              <DetailDisplay title="Kategoriler" data={movie.genres} />
              <DetailDisplay title="Diller" data={movie.spoken_languages} />
              <DetailDisplay title="Yapımcı Şirketler" data={movie.production_companies} />
              <DetailDisplay title="Yapımcı Ülkeler" data={movie.production_countries} />
            </div>

            <div className="mt-10">
              <p className="mb-10">{movie.overview}</p>

              <p>Bütçe : <span className="text-green-400 ms-2">${millify(movie.budget)}</span></p>
              <p>Hasılat : <span className="text-green-400 ms-2">${millify(movie.revenue)}</span></p>
            </div>

          </section>
          {/* alt */}
          <section >
            <Splide options={{
                    type: "loop",
                    height: '12.5rem',
                    autoWidth: true,
                    pagination: false,
                    gap: "10px",
                }}>
              {movie.credits.cast.map((actor, i)=>(
                <SplideSlide  key={i}>
                  <ActorCard actor={actor} />
                </SplideSlide>
              ))

              }
            </Splide>
          </section>
        </div>)
      }
    </div>

  )
}

export default Detail
