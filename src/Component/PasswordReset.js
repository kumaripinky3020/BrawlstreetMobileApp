import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5"
import { message, message as MESSAGE } from "antd";

import axios from 'axios';
export const configJSON = require("../Component/Config");

function PasswordReset() {
    const navigate = useNavigate()

    const [newPass, setNewPass] = useState("")
    const [cNewPass, setCNewPass] = useState("")
    const [isEye1, setIsEye1] = useState(false)
    const [type1, setType1] = useState("password")
    const [isEye2, setIsEye2] = useState(false)
    const [type2, setType2] = useState("password")
    const HandleCheckYourMail = () => {
        if (newPass && cNewPass) {
            const data = new FormData()
            data.append('new_password',newPass)
            data.append('confirm_password',cNewPass)
           
            axios({
                url: configJSON.baseUrl + configJSON.resetPassword,
                method: "post",
                data: data,
                headers: { 'content-type': 'multipart/form-data' },
            }).then((res) => {
                if (res?.data?.success == true) {
                    MESSAGE.success(res?.data?.message)
                    setNewPass("")
                    setCNewPass("")
                    navigate("/check/your/mail")
                }
                else {
                    MESSAGE.error(res?.data?.message)
                    setNewPass("")
                    setCNewPass("")
                }
            })
                .catch((error) => {
                    setNewPass("")
                    setCNewPass("")
                    console.log(error)
                })
        }
        else {
            MESSAGE.error("Field can not be empty!")
        }
    }


    const handleEye1 = () => {
        var chtype = type1 == "text" ? "password" : "text"
        setType1(chtype);
        setIsEye1(!isEye1)
    }
    const handleEye2 = () => {
        var chtype = type2 == "text" ? "password" : "text"
        setType2(chtype);
        setIsEye2(!isEye2)
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                    <div className="ct_login_form ct_center_css ct_h-100">
                        <form className="w-100">
                            <h4 className="ct_fs_32 text-white text-center mb-30 ct_fw_700">Set new password</h4>

                            <div className="ct_form mb-16">
                                <div className="position-relative">
                                    <input className="ct_input form-control" placeholder="Enter new password" type={type2} value={newPass} onChange={(e) => setNewPass(e.target.value)} required="" />
                                    {
                                        isEye2 == false && <BsFillEyeSlashFill className="ct_show_eye" onClick={handleEye2} />
                                    }
                                    {
                                        isEye2 && <IoEyeSharp className="ct_show_eye" onClick={handleEye2} />
                                    }
                                </div>
                                {/* <p className="ct_error_msg">Incorrect email address or password.</p> */}
                                <span className="ct_input-border"></span>
                            </div>
                            <div className="ct_form mb-16">
                                <div className="position-relative">
                                    <input className="ct_input form-control" placeholder="Re-enter new password" value={cNewPass} type={type1} onChange={(e) => setCNewPass(e.target.value)} required="" />
                                    {
                                        isEye1 == false && <BsFillEyeSlashFill className="ct_show_eye" onClick={handleEye1} />
                                    }
                                    {
                                        isEye1 && <IoEyeSharp className="ct_show_eye" onClick={handleEye1} />
                                    }
                                </div>
                                <p className="ct_grey_text mt_10 ct_fs_14 ct_lh_20 ct_fw_400">Password must be a minimum of 8 characters with at least one one uppercase, one lowercase and one number.</p>
                                {/* <p className="ct_error_msg">Incorrect email address or password.</p> */}
                                <span className="ct_input-border"></span>
                            </div>
                            <div className="text-center pt-30 mt-30">
                                <button type='button' className="ct_button_blue" onClick={() => HandleCheckYourMail()} >SAVE PASSWORD</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PasswordReset