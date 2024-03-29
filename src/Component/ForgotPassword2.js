import React from 'react'
import back_btn from "../img/back_btn.png"
import { useNavigate } from 'react-router-dom'

function ForgotPassword2() {
    const navigate = useNavigate()
    const HandleChangePassWord = () => {
        navigate("/change/password")
    }
    const HandlePasswordEmailSent = () => {
        navigate("/password/email/sent")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandleChangePassWord()} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">FORGOT PASSWORD</h4>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10.5 6H13.5V9H10.5V6Z" fill="white" />
                                <path d="M10.5 11H13.5V18H10.5V11Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className="ct_white_bg pt-28 ct_pb_100">
                        <div className="px-15">
                            <p className="mb-30 ct_fs_14 ct_black_clr ">Enter the email address that you use for BrawlsStreet updates and we’ll send you an email to set your new password.</p>
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Email address</p>
                                <input type="password" className="ct_select_option form-control w-100" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ct_grey_bg_clr ct_fixed_botom">
                    <a onClick={() => HandlePasswordEmailSent()} className="ct_button_blue ct_light_blue_btn">CONTINUE</a>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword2