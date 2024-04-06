import { useEffect, useState } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Restaurants from "./Restaurants";
import Footer from "./Footer";
import TopRated from "./TopRated";
import Offers from "./Offers";
import { useLocation } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Main() {

    const location = useLocation();
    const [restaurantsList, setRestaurantsList] = useState<any>([]);
    const [menu, setMenu] = useState("");

    const getRestaurants = async () => {
        const url = 'https://restaurants222.p.rapidapi.com/search';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'b05f8acd3bmshd43a2ad5a5b815dp196169jsn79b5517ec0a1',
                'X-RapidAPI-Host': 'restaurants222.p.rapidapi.com'
            },
            body: new URLSearchParams({
                location_id: `${location ? location?.state?.data : "297704"}`,
                language: 'en_US',
                currency: 'USD',
                offset: '0'
            })
        };

        try {
            const response = await fetch(url, options);
            const list = await response.json();
            console.log(list);
            
            setRestaurantsList(list.results.data);
        } catch (err) {
            console.error(err);
            const error: any = err
            toast.error(error)
        }
    }

    useEffect(() => {
        getRestaurants()
    }, []);

    return (
        <>
        <ToastContainer autoClose={3000} />
            <Navbar restaurantsList={restaurantsList} />
            {/* <div className="flex flex-col justify-center items-center">
            </div> */}
            <div className="ml-44 w-8/12">
                <h1 className="mt-8 font-bold text-2xl">Best offers for you</h1>
                <Offers />
                <h1 className="mt-8 font-bold text-2xl">What's on your mind?</h1>
                <Menu setMenu={setMenu}/>
                <h1 className="mt-8 font-bold text-2xl">Top Restaurant chains in {restaurantsList ? restaurantsList[0]?.address_obj?.city : "Location"}</h1>
                <TopRated restaurantsList={restaurantsList} />
                <div className="ml-16 ">
                    <h1 className="mt-8 font-bold text-2xl">Restaurants with their online food delivery in {restaurantsList ? restaurantsList[0]?.address_obj?.city : "Location"}</h1>
                    <Restaurants restaurantsList={restaurantsList} menu={menu}/>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Main