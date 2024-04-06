import { Link } from "react-router-dom";
import rating from "../images/rating.png";

type restaurantProp = {
    restaurantsList: any,
    menu: any
}

function Restaurants(props: restaurantProp) {
    return (
        <>
            <div className="grid grid-cols-4 w-11/12">
                {props?.restaurantsList?.filter((data: any) => data?.cuisine[0]?.name.includes(props?.menu) || data?.cuisine[1]?.name.includes(props?.menu) || data?.cuisine[2]?.name.includes(props?.menu)).map((data: any) => {
                    return (
                        <Link to="/details" state={{data: data}}>
                            <div className="max-w-sm rounded overflow-hidden mt-4">
                                <img className="w-52 rounded-2xl h-36" src={data?.photo?.images?.original?.url} alt="Sunset in the mountains" />
                                <div className="px-4 py-2">
                                    <div className="font-semibold text-xl text-gray-800">{data?.name?.slice(0, 10)}...</div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5" src={rating} alt="rating" />
                                        <div className="font-semibold text-lg text-gray-800 ml-1">{data?.rating}</div>
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        {data?.cuisine[0]?.name}, {data?.cuisine[1]?.name}
                                    </p>
                                    <p className="text-gray-700 text-base">
                                        {data?.address_obj?.city}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>

        </>
    )
}
export default Restaurants