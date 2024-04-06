import burger from "../images/burger.jpg";
import biriyani from "../images/biriyani.jpg";
import chinese from "../images/chinese.png";
import pizza from "../images/pizza.jpg";
import shawarma from "../images/shawarma.png";
import pasta from "../images/pasta.png";
import cake from "../images/cake.png";
import pancake from "../images/pancake.png";
import salad from "../images/salad.png";

type menuProp = {
    setMenu: any
}

function Menu(props : menuProp) {
    return (
        <>
            <div className="flex items-center mt-10 py-5 overflow-scroll no-swiggy-scrollbar">
                <div onClick={() => props.setMenu("American")} className="cursor-pointer">
                    <img src={burger} alt="burger" className="w-36 h-28 rounded-full" />
                    <h1 className="font-semibold text-gray-500 text-xl ml-4">American</h1>
                </div >
                <div className="ml-24 cursor-pointer" onClick={() => props.setMenu("Asian")}>
                    <img src={biriyani} alt="biriyani" className="w-36 h-28 rounded-full" />
                    <h1 className="font-semibold text-gray-500 text-xl ml-4">Indian</h1>
                </div>
                <div className="ml-24 cursor-pointer" onClick={() => props.setMenu("Italian")}>
                    <img src={chinese} alt="chinese" className="w-36 h-28 rounded-full" />
                    <h1 className="font-semibold text-gray-500 text-xl ml-5">Italian</h1>
                </div>
                <div className="ml-24 cursor-pointer" onClick={() => props.setMenu("Chinese")}>
                    <img src={pizza} alt="pizza" className="w-36 h-28 rounded-full" />
                    <h1 className="font-semibold text-gray-500 text-xl ml-8">Chinese</h1>
                </div>
                <div className="ml-24 cursor-pointer" onClick={() => props.setMenu("Asian")}>
                    <img src={shawarma} alt="shawarma" className="w-36 h-28 rounded-full" />
                    <h1 className="font-semibold text-gray-500 text-xl ml-4">Asian</h1>
                </div>
                <div className="ml-24 cursor-pointer" onClick={() => props.setMenu("Indonesian")}>
                    <img src={pasta} alt="pasta" className="w-36 h-28 rounded-full" />
                    <h1 className="font-semibold text-gray-500 text-xl ml-8">Indonesian</h1>
                </div>
                <div className="ml-24 cursor-pointer" onClick={() => props.setMenu("Vegetarian")}>
                    <img src={salad} alt="pasta" className="w-36 h-28 rounded-full" />
                    <h1 className="font-semibold text-gray-500 text-xl ml-8">Vegetarian</h1>
                </div>
                <div className="ml-24 cursor-pointer" onClick={() => props.setMenu("European")}>
                    <img src={cake} alt="pasta" className="w-36 h-28 rounded-full" />
                    <h1 className="font-semibold text-gray-500 text-xl ml-8">European</h1>
                </div>
                <div className="ml-24 cursor-pointer" onClick={() => props.setMenu("International")}>
                    <img src={pancake} alt="pasta" className="w-36 h-28 rounded-full" />
                    <h1 className="font-semibold text-gray-500 text-xl ml-8">International</h1>
                </div>
            </div>
        </>
    )
}
export default Menu