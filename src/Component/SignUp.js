import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Country, State } from 'country-state-city';
import back_btn from "../img/back_btn.png"
import { message, message as MESSAGE } from "antd";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5"
import axios from 'axios'
export const configJSON = require("../Component/Config");

function SignUp() {
    const navigate = useNavigate()
    const countryData = Country.getAllCountries();
    const stateData = State.getAllStates()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [handlePassword, sethandlePassword] = useState()
    const [dob, setDob] = useState()
    const [country, setCountry] = useState(countryData)
    const [singleCountry, setSingleCountry] = useState("")
    const [state, setState] = useState(stateData)
    const [singleState, setSingleState] = useState("")
    const [seletedStates, setSelectedStates] = useState([])
    const [username, setUsername] = useState()
    const [isEye, setIsEye] = useState(false)
    const [type, setType] = useState("password")
    const [date, setDate] = useState('');
    const [dateError, setDateError] = useState(null);







    const handleChange = (name) => (event) => {
        setDateError(null);
        setDate(event.target.value);
    };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate > today) {
            // Selected date is greater than today, set an error
            setDateError("Selected date cannot be greater than today");
        } else {
            // Selected date is valid, update the state and clear the error
            setDateError(null);
            setDate(selectedDate.toISOString().split("T")[0]);
        }
    };

    const HandleOnboarding6 = () => {
        navigate("/onboarding6")
    }
    const HandleSplash = () => {
        navigate("/")
    }

    const HandleSignupButton = (e) => {
        e.preventDefault()
        if (email && password && date && singleState && username && singleCountry) {

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            if (!passwordRegex.test(password)) {
                MESSAGE.error("Invalid password!");
                return;
            } 

            const data = {
                email: email,
                password: password,
                dob: date,
                country: singleCountry,
                state: singleState,
                username: username
            }
            console.log(data)
            axios({
                url: configJSON.baseUrl + configJSON.signup_api,
                method: "post",
                data: data,
            }).then((res) => {
                console.log(res,"ress")
                if (res?.data?.success == true) {
                    MESSAGE.success(res?.data?.message)
                    setPassword("");
                    setEmail("");
                    setDate("")
                    setSingleState("")
                    setSingleCountry("")
                    setUsername("");
                    navigate("/check/your/mail", { state: { "email": email } })
                }
                else {
                    MESSAGE.error(res?.data?.message)
                }
            })
                .catch((error) => {
                    console.log(error)
                    setPassword("")
                    setEmail("")
                    setDate("")
                    setSingleState("")
                    setSingleCountry("")
                    setUsername("");
                })
        }
        
        else {

            MESSAGE.error("Field can not be empty!")
        }
    }
    const handleEye = () => {
        var chtype = type == "text" ? "password" : "text"
        setType(chtype);
        setIsEye(!isEye)
    }
    const HandleState = (e) => {
        var isoCode = country[e?.target?.value]?.isoCode
        setSingleCountry(country[e?.target?.value]?.name)
        var arr = []
        state.map((item) => {
            isoCode == item?.countryCode && arr.push(item?.name)
        })
        setSelectedStates(arr)
    }

    return (
        <>
            <div class="ct_mobile_width">
                <div class="ct_login_bg h-100 px-15">
                    <div class="ct_mob_head d-flex align-items-center mb-30">
                        <a onClick={() => HandleSplash()}>
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 class="text-white text-center text-center flex-1 ct_fs_18 ct_fw_700 mb-0">SIGN UP</h4>
                    </div>

                    <div class="ct_login_form  h-100">
                        {/* action={()=>navigate("/check/your/mail")} */}
                        <form class="w-100">
                            <div class="ct_form mb-16">
                                <input class="ct_input form-control" placeholder="Enter email address" required="" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                {/* <p class="ct_error_msg">Incorrect email address or password.</p> */}
                                <span class="ct_input-border"></span>
                            </div>
                            <div class="ct_form mb-16">
                                <div class="position-relative">
                                    {/* <input class="ct_input form-control" type="date" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" onChange={(e) => setDob(e.target.value)} value={dob} /> */}
                                    <input required type="date" name="text" autoComplete="off" class="ct_input form-control" value={date} onChange={handleChange("date")}
                                        max={new Date().toISOString().split("T")[0]}
                                    />
                                </div>
                                {/* <p class="ct_error_msg">Incorrect email address or password.</p> */}
                                <span class="ct_input-border"></span>
                            </div>

                            <div class="ct_form mb-16">
                                <select className='ct_input' onClick={(e) => HandleState(e)}>
                                    <option className='text-dark' >Country</option>
                                    {country.map((item, i) => (
                                        <option className='text-dark' value={i} >{item.name}</option>
                                    ))}
                                </select>

                                <span class="ct_input-border"></span>
                            </div>
                            <div class="ct_form mb-16">
                                <select className='ct_input' onClick={(e) => setSingleState(e.target.value)}>
                                    <option className='text-dark' >State</option>
                                    {
                                        seletedStates.map((val) => (
                                            <option className='text-dark' >{val}</option>
                                        ))
                                    }
                                </select>


                                <span class="ct_input-border"></span>
                            </div>

                            <div class="ct_form mb-16">
                                <input class="ct_input form-control" placeholder="Create username" required="" type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                                <span class="ct_input-border"></span>
                            </div>
                            <div class="ct_form mb-16">
                                <div class="position-relative">
                                    <input class="ct_input form-control" placeholder="Create password" required="" type={type} onChange={(e) => setPassword(e.target.value)} value={password} />

                                    {
                                        isEye == false && <BsFillEyeSlashFill className="ct_show_eye" style={{ color: "white" }} onClick={handleEye} />
                                    }
                                    {
                                        isEye && <IoEyeSharp className="ct_show_eye" style={{ color: "white" }} onClick={handleEye} />
                                    }
                                </div>
                                <p class="ct_grey_text mt_10 ct_fs_14 ct_lh_20 ct_fw_400">Password must be a minimum of 8 characters with at least one one uppercase, one lowercase and one number.</p>
                                <span class="ct_input-border"></span>
                            </div>

                            {/* <div class="ct_form mb-16 mt_15">
                                <input class="ct_input form-control ct_fs_18" placeholder="Referral code" required="" type="number" />
                                <p class="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400">If you were referred to by another user enter the referral code that you have received.</p>                               
                                <span class="ct_input-border"></span>
                            </div> */}

                            <div class="text-center  mt-30">
                                {/* onClick={() => HandleOnboarding6()} */}
                                <a class="ct_button_blue" onClick={(e) => HandleSignupButton(e)}>SIGN UP</a>
                            </div>
                            <div class="text-center mt_10">
                                <p class="ct_fs_14 ct_grey_text">By signing up you agree to the <a class="ct_blue_text">terms & conditions.</a></p>
                            </div>
                            <div>
                                <p className="text-white ct_fs_14">Already have an account? <a style={{ color: "#0d6efd" }} onClick={() => navigate("/login")}>Login</a></p>

                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}

export default SignUp