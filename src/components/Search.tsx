import Navbar from "./Navbar";
import burger from "../images/burger.jpg";
import biriyani from "../images/biriyani.jpg";
import chinese from "../images/chinese.png";
import pizza from "../images/pizza.jpg";
import shawarma from "../images/shawarma.png";
import pasta from "../images/pasta.png";
import cake from "../images/cake.png";
import pancake from "../images/pancake.png";
import salad from "../images/salad.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Search() {

    const location = useLocation();
    const [searchItems, setSearchItems] = useState("");
    const [menu, setMenu] = useState("");

    return (
        <>
            <Navbar />
            <div className="ml-48 mt-10">
                <input
                onChange={(e) => setSearchItems(e.target.value)}
                    className="outline-none border border-gray-300 p-3 w-10/12 rounded-sm font-medium"
                    placeholder="Search for restaurants"
                    type="text"
                />
                {searchItems && <div className="p-3">
                    {location?.state?.data?.filter((data:any) => data.name.includes(searchItems)).map((item: any) => {
                        return <>
                            <div className="flex items-center mt-6">
                                <img src={item?.photo?.images?.original?.url} alt="pic" className="w-16 h-16 rounded-sm" />
                                <div className="ml-3">
                                    <h1>{item?.name.split(0, 10)}...</h1>
                                    <h1>{item?.category?.name}</h1>
                                </div>
                            </div>
                        </>
                    })}
                </div>}
                <h1 className="font-extrabold mt-12 text-gray-700 ml-4 text-xl">Popular Cuisines</h1>

                <div className="flex items-center mt-10 py-5 overflow-scroll no-swiggy-scrollbar">
                    <div className="cursor-pointer" onClick={() => setMenu("American")}>
                        <img src={burger} alt="burger" className="w-20 h-20 rounded-full" />
                        <h1 className="font-medium mt-2 text-black text-xs ml-2">American</h1>
                    </div>
                    <div className="ml-12 cursor-pointer" onClick={() => setMenu("Asian")}>
                        <img src={biriyani} alt="biriyani" className="w-24 h-24 rounded-full" />
                        <h1 className="font-medium text-black text-xs ml-2">Indian</h1>
                    </div>
                    <div className="ml-12 cursor-pointer" onClick={() => setMenu("Italian")}>
                        <img src={chinese} alt="chinese" className="w-20 h-20 rounded-full" />
                        <h1 className="font-medium mt-4 text-black text-xs ml-2">Italian</h1>
                    </div>
                    <div className="ml-14 cursor-pointer" onClick={() => setMenu("Chinese")}>
                        <img src={pizza} alt="pizza" className="w-20 h-20 rounded-full" />
                        <h1 className="font-medium mt-2 text-black text-xs ml-5">Chinese</h1>
                    </div>
                    <div className="ml-12 cursor-pointer" onClick={() => setMenu("Asian")}>
                        <img src={shawarma} alt="shawarma" className="w-20 h-20 rounded-full" />
                        <h1 className="font-medium mt-2 text-black text-xs ml-2">Asian</h1>
                    </div>
                    <div className="ml-12 cursor-pointer" onClick={() => setMenu("Indonesian")}>
                        <img src={pasta} alt="pasta" className="w-20 h-20 rounded-full" />
                        <h1 className="font-medium mt-2 text-black text-xs ml-5">Indonesian</h1>
                    </div>
                    <div className="ml-12 cursor-pointer" onClick={() => setMenu("Vegetarian")}>
                        <img src={salad} alt="pasta" className="w-20 h-20 rounded-full" />
                        <h1 className="font-medium mt-2 text-black text-xs ml-6">Vegetarian</h1>
                    </div>
                    <div className="ml-12 cursor-pointer" onClick={() => setMenu("European")}>
                        <img src={cake} alt="pasta" className="w-20 h-20 rounded-full" />
                        <h1 className="font-medium mt-2 text-black text-xs ml-6">European</h1>
                    </div>
                    <div className="ml-14 cursor-pointer" onClick={() => setMenu("International")}>
                        <img src={pancake} alt="pasta" className="w-20 h-20 rounded-full" />
                        <h1 className="font-medium mt-2 text-black text-xs ml-4">International</h1>
                    </div>
                </div>
                {menu && <div className="p-3">
                    {location?.state?.data?.filter((data:any) =>data?.cuisine[0]?.name.includes(menu) || data?.cuisine[1]?.name.includes(menu) || data?.cuisine[2]?.name.includes(menu)).map((item: any) => {
                        return <>
                            <div className="flex items-center mt-6">
                                <img src={item?.photo?.images?.original?.url} alt="pic" className="w-16 h-16 rounded-sm" />
                                <div className="ml-3">
                                    <h1>{item?.name.split(0, 10)}...</h1>
                                    <h1>{item?.category?.name}</h1>
                                </div>
                            </div>
                        </>
                    })}
                </div>}
            </div>
        </>
    )
}
export default Search