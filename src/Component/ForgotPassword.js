import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message, message as MESSAGE } from "antd";
import back_btn from "../img/back_btn.png"
import axios from 'axios'
export const configJSON = require("../Component/Config");
function ForgotPassword() {
    const navigate = useNavigate()
    const HandleLogin = () => {
        navigate("/login")
    }

    const [email, setEmail] = useState('');
    const HandleForgotPassword = (e) => {
        e.preventDefault()
        if (email) {
            const data = {
                email: email,
            }
            axios({
                url: configJSON.baseUrl + configJSON.forget_password,
                method: "post",
                data: data,
            }).then((res) => {
                if (res?.data?.success == true) {
                    MESSAGE.success(res?.data?.message)
                    setEmail("");
                    navigate("/email/sent")
                }
                else {
                    MESSAGE.error(res?.data?.message)
                    setEmail("");
                }
            })
                .catch((error) => {
                    console.log(error,"error")
                    setEmail("")
                })
        }
        else {

            MESSAGE.error("Field can not be empty!")
        }
    }

    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 px-15">
                    <a onClick={() => HandleLogin()} className="ct_mob_head pb-30">
                        <img src={back_btn} alt="img" />
                    </a>
                    <div className="ct_login_form ct_center_css  ct_px_15 ct_postion_center">
                        <form className="w-100">
                            <h4 className="ct_fs_32 text-white text-center ct_fw_700">Forgot password</h4>
                            <p className="ct_grey_text mt_15  ct_fs_14 ct_lh_20 ct_fw_400 text-center">Enter the email address that you use for BrawlsStreet updates and we’ll send you an email with your account details.</p>
                            <div className="ct_form mb-16 mt-30">
                                <input className="ct_input form-control" placeholder="Email" required="" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                {/* <p className="ct_error_msg">Incorrect email address or password.</p> */}
                                <span className="ct_input-border"></span>
                            </div>
                            <div className="text-center mt-30">
                                {/* onClick={()=>navigate("/email/sent")} */}
                                <button type='button' className="ct_button_blue" onClick={(e) => HandleForgotPassword(e)} >SEND EMAIL</button>
                            </div>
                            <div className="text-center mt-30">
                                <a className="ct_blue_text text-center ct_fw_600 ct_fs_14">NEED HELP?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword