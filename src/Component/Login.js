import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import eye from "../img/eye.png"
import back_btn from "../img/back_btn.png"
import { message, message as MESSAGE } from "antd";
import axios from 'axios'
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5"
export const configJSON = require("../Component/Config");
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEye, setIsEye] = useState(false)
    const [type, setType] = useState("password")
    const navigate = useNavigate()
    const HandleForgotPassword = () => {
        navigate("/forgot/password")
    }
    const HandleSplash = () => {
        navigate("/")
    }
    const onHandleLoginButoon = (e) => {
        e.preventDefault()
        if (email && password) {

            
            const data = {
                email: email,
                password: password
            }
            axios({
                url: configJSON.baseUrl + configJSON.login_api,
                method: "post",
                data: data,
            }).then((res) => {
                if (res?.data?.success == true) {
                    MESSAGE.success(res?.data?.message)
                    setPassword("");
                    setEmail("");
                    navigate("/onboarding6")
                }
                else {
                    MESSAGE.error(res?.data?.message)
                }
            })
                .catch((error) => {
                    setPassword("")
                    setEmail("")
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

    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 px-15">
                    <a onClick={() => HandleSplash()} className="ct_mob_head">
                        <img src={back_btn} alt="img" />
                    </a>

                    <div className="ct_login_form ct_center_css ct_postion_center">
                        <form className="w-100">
                            <h4 className="ct_fs_32 text-white text-center mb-30 ct_fw_700">Log in</h4>
                            <div className="ct_form mb-16">
                                <input className="ct_input form-control" placeholder="Email" required="" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                {/* <p className="ct_error_msg">Incorrect email address or password.</p> */}
                                <span className="ct_input-border"></span>
                            </div>
                            <div className="ct_form mb-16">
                                <div className="position-relative">
                                    <input className="ct_input form-control" placeholder="Password" required="" type={type} onChange={(e) => setPassword(e.target.value)} value={password} />
                                    {/* <img src={eye} alt="img" className="ct_show_eye" /> */}
                                    {
                                        isEye == false && <BsFillEyeSlashFill class="fa-solid ct_show_eye" style={{ color: "white" }} onClick={handleEye} />
                                    }
                                    {
                                        isEye && <IoEyeSharp class="fa-solid ct_show_eye" style={{ color: "white" }} onClick={handleEye} />
                                    }
                                </div>
                                {/* <p className="ct_error_msg">Incorrect email address or password.</p> */}
                                <span className="ct_input-border"></span>
                            </div>
                            <div className="d-flex align-items-center mt-30 gap-2 mb-24">
                                <input type="checkbox" id="ct_keep_login" className="ct_checkbox_width" />
                                <label for="ct_keep_login" className="text-white ct_fs_14">Keep me logged in</label>
                            </div>

                            <div className="text-center mb-30">
                                {/* onClick={()=>navigate("/onboarding6")} */}
                                <button type='button' className="ct_button_blue" onClick={(e) => onHandleLoginButoon(e)}>LOG IN</button>
                            </div>
                            <div className="text-center">
                                <a onClick={() => HandleForgotPassword()} className="ct_blue_text text-center ct_fw_600 ct_fs_14">FORGOT PASSWORD?</a>
                            </div>
                            <div>
                                <p className="text-white ct_fs_14">Don't have an account? <a style={{ color: "#0d6efd" }} onClick={() => navigate("/signup")}>Sign up</a></p>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login