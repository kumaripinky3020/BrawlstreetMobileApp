import React from 'react'
import back_btn from "../img/back_btn.png"
import { useNavigate } from 'react-router-dom'

function ChangePassword() {
    const navigate = useNavigate()

    const handleforgetPassword = () => {
        navigate("/forgot/password2")
    }
    const HandleAddPaymentMethod = () => {
        navigate("/add/payment/method")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className=" ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandleAddPaymentMethod()} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">CHANGE PASSWORD</h4>

                    </div>
                    <div className="ct_white_bg pt-28 ct_pb_100">
                        <div className="px-15">
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Current password</p>
                                <input type="password" className="ct_select_option form-control w-100" />
                            </div>
                            <div className="pb-20">
                                <a onClick={() => handleforgetPassword()} className="ct_blue_text ct_fs_14 ct_fw_700">FORGOT PASSWORD?</a>
                            </div>
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">New password</p>
                                <input type="password" className="ct_select_option form-control w-100" />
                            </div>
                            <div className="pb-1">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Confirm new password</p>
                                <input type="password" className="ct_select_option form-control w-100" />
                            </div>
                            <p className="mb-0 ct_fs_13 ct_7C7D7E_text_clr">Password must be a minimum of 8 characters with at least one one uppercase, one lowercase and one number.</p>
                        </div>
                    </div>
                </div>
                <div className="ct_grey_bg_clr ct_fixed_botom">
                    <button type='button' className="ct_button_blue ct_light_blue_btn">CHANGE PASSWORD</button>
                </div>
            </div>
        </>
    )
}

export default ChangePassword