import offer1 from "../images/offer1.png";
import offer2 from "../images/offer2.jpg";

function Offers() {
    return (
        <>
            <div className="flex items-center mt-5">
                <img src={offer2} alt="offer 2" className="w-6/12 h-60 rounded-3xl" />
                <img src={offer1} alt="offer 1" className="w-6/12 h-60 rounded-3xl ml-5" />
            </div>
        </>
    )
}
export default Offers