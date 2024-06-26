import dish from "../images/dish.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase/setup';
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type signupProp = {
    setSignupModal: any
}

function SignUp(props: signupProp) {

    const navigate = useNavigate()
    const [phone, setPhone] = useState("")
    const [user, setUser] = useState<any>(null)
    const [otp, setOtp] = useState("")

    const sendOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
            setUser(confirmation)
        } catch (err) {
            console.error(err)
            const error: any = err
            toast.error(error)
        }
    }

    const verifyOtp = async () => {
        try {
            const data = await user.confirm(otp);
            if (data.user.phoneNumber) {
                toast.success("Logged in successfully");
                setTimeout(() => {
                    navigate("/main");
                }, 2000);
            }
        } catch (err) {
            console.error(err)
            const error: any = err
            toast.error(error)
        }
    }

    return (
        <>
            <ToastContainer autoClose={3000} />
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-end p-4 text-center sm:items-center sm:p-0">
                        <div className="p-10 relative transform overflow-hidden bg-white text-left h-screen shadow-xl transition-all sm:w-4/12 sm:max-w-lg">
                            <h1 className="text-2xl cursor-pointer" onClick={() => props?.setSignupModal(false)}>X</h1>
                            <div className="flex">
                                <div className="">
                                    <h1 className="font-semibold text-3xl mt-3">Sign Up</h1>
                                    <h1 className="mt-3">or <span className="text-orange-500 text-sm">Login to your account</span> </h1>
                                    <hr className="w-8 bg-black h-px mt-3 border-0" />
                                </div>
                                <img src={dish} alt="dish" className="w-24 h-24 rounded-full ml-24"></img>
                            </div>
                            <PhoneInput
                                inputStyle={{ height: "63px", width: "320px" }}
                                containerStyle={{ marginTop: "20px" }}
                                placeholder='Phone number'
                                country={'in'}
                                value={phone}
                                onChange={(phone) => setPhone("+" + phone)} />
                            <div id='recaptcha' className='mt-3'></div>
                            {phone && <button onClick={sendOtp} className="bg-orange-500 p-5 text-white font-semibold text-xs w-96 mt-10">SEND OTP</button>}
                            {user && <input onChange={(e) => setOtp(e.target.value)} className="p-5 border border-gray-300 w-96" type="text" placeholder="One Time Password" />}
                            <input className="p-5 border border-gray-300 w-96" type="text" placeholder="Name" />
                            <input className="p-5 border border-gray-300 w-96" type="text" placeholder="Email" />
                            {otp && <button onClick={verifyOtp} className="bg-orange-500 p-5 text-white font-semibold text-xs w-96 mt-10">VERIFY OTP</button>}
                            <h1 className="text-xs font-medium mt-4">By continuing, I agree to Swiggy's <span className="text-orange-500">Terms of Service</span> and <span className="text-orange-500">Privacy Policy</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp