import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import Loader from "./Loader"
import { baseImgURL, baseImgURL_w500 } from "../utils/constants"

const Hero = () => {
    const { isLoading, error, movies } = useSelector((store) => store.movieReducer)

    const i = Math.floor(Math.random() * 20)

    const movie = movies[i]

    console.log("hero render edildi...")
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {isLoading || !movie
                ? <Loader />
                : error
                    ? <Error err={error} />
                    : (<>
                    <aside className="flex flex-col gap-5 items-center">
                        <h1 className="text-3xl font-bold mb-5">{movie.title}</h1>
                        <p className="text-justify mb-10">{movie.overview}</p>
                        <p>
                            <span className="text-lg">IMDB : </span>
                            <span className="text-yellow-400 font-semibold text-lg ">{movie.vote_average.toFixed(1)}</span>
                        </p>
                        <div className="flex gap-3">
                            <button className="text-lg bg-blue-500 text-white rounded-md p-3 hover:bg-blue-600">Filmi İzle</button>
                            <button className="text-lg bg-red-500 text-white rounded-md p-3  hover:bg-red-600">Listeye Ekle</button>
                        </div>
                    </aside>

                    <aside className="flex justify-center">
                        <img className="my-5 banner object-contain rounded max-h-[300px]" src={`${baseImgURL_w500}${movie.backdrop_path}`} alt="poster" />
                    </aside>
                    </>)
            }
        </div>
    )
}

export default React.memo(Hero)
