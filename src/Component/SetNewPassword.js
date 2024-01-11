import React from 'react'
import { useNavigate } from 'react-router-dom'
import eye_view from "../img/eye_view.png"

function SetNewPassword() {
    const navigate = useNavigate()
    const HandleForgotPassword2 = () => {
        navigate("/forgot/password2")
    }
    const HandlePasswordUpdate = () => {
        navigate("/password/updated")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandleForgotPassword2()} className="ct_mob_head pt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0608 4.06076L4.06077 22.0608L1.93945 19.9395L19.9395 1.93944L22.0608 4.06076Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.93921 4.06076L19.9392 22.0608L22.0605 19.9395L4.06053 1.93944L1.93921 4.06076Z" fill="white" />
                            </svg> </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">SET NEW PASSWORD</h4>
                    </div>
                    <div className="ct_white_bg pt-28 ct_pb_100">
                        <div className="px-15">

                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Enter new password</p>
                                <div className="position-relative">
                                    <input type="password" className="ct_select_option form-control w-100 ct_new_pass_hide" />
                                    <img src={eye_view} alt="img" className="ct_input_icon_right ct_eye_show_1" onclick="new_pass()" />
                                </div>
                            </div>
                            <div className="pb-1">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Re-enter new password</p>
                                <div className="position-relative">
                                    <input type="password" className="ct_select_option form-control w-100 ct_con_pass_hide" />
                                    <img src={eye_view} alt="img" className="ct_input_icon_right" onclick="confirm_pass()" />
                                </div>
                            </div>
                            <p className="mb-0 ct_fs_13 ct_7C7D7E_text_clr">Password must be a minimum of 8 characters with at least one one uppercase, one lowercase and one number.</p>
                        </div>
                    </div>
                </div>
                <div className="ct_grey_bg_clr ct_fixed_botom">
                    <a onClick={() => HandlePasswordUpdate()} className="ct_button_blue ct_light_blue_btn">SET NEW PASSWORD</a>
                </div>
            </div>
        </>
    )
}

export default SetNewPassword