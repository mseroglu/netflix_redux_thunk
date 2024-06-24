import { baseImgURL } from "../utils/constants"


const ActorCard = ({ actor }) => {
    const url = actor.profile_path
        ? baseImgURL + actor.profile_path
        : "../public/default-profile-2.png"
        
    return (
        <div className="w-[120px]  ">
            <img className="h-[160px] object-cover" src={url} alt={actor.name} />
            <h2 className="text-sm" >{actor.original_name}</h2>
            <h2 className="line-clap-1 text-xs" >{actor.character}</h2>


        </div>
    )
}

export default ActorCard
