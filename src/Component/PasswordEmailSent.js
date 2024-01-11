import React from 'react'
import { useNavigate } from 'react-router-dom'
function PasswordEmailSent() {
    const navigate = useNavigate()
    const HandleSetting = () => {
        navigate("/setting")
    }
    const HandleForgotPassword2 = () => {
        navigate("/forgot/password2")
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
                            </svg>
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">EMAIL SENT</h4>

                    </div>
                    <div className="ct_white_bg pt-28 ct_pb_100">
                        <div className="px-15">
                            <p className="mb-30 ct_fs_14 ct_black_clr ">We just sent you an email with everything you need to set your new password. Sometimes we get put in the junk folder - check for us there if you don’t see anything straight away.</p>
                            <div className="pb-20">
                                <a href="javascript:void(0)" className="ct_blue_text ct_fs_14 ct_fw_700 text-center d-block">RESEND VERIFICATION EMAIL</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ct_grey_bg_clr ct_fixed_botom">
                    <a onClick={() => HandleSetting()} className="ct_button_blue ct_light_blue_btn">BACK TO SETTINGS</a>
                </div>
            </div>
        </>
    )
}

export default PasswordEmailSent