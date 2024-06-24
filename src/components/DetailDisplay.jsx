import { baseImgURL } from "../utils/constants"


const DetailDisplay = ({ title, data }) => {

    return (
        <>
            {data.length > 0 && (
                <div>
                    <h2 className="mb-3 text-md">{title}</h2>
                    <div className="flex gap-5">
                        {
                            data.map((item, i) => (
                                <div key={i} className="border border-white rounded-md grid place-items-center">
                                    {item.logo_path
                                        ? (<div className="bg-white rounded ">
                                            <img className="w-[80px] h-[80px] object-contain" src={baseImgURL + item.logo_path} alt={item.name} />
                                        </div>)
                                        : (<div className=" min-h-[20px] py-1 px-2 grid text-center place-items-center ">
                                            <span className="">{item.name}</span>
                                        </div>)
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>

            )}
        </>
    )
}

export default DetailDisplay
