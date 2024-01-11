import React from 'react'
import { useNavigate } from 'react-router-dom'

function EmailSent() {
    const navigate = useNavigate()
    const HandleLogin = () => {
        navigate("/login")
    }
    const HandleVerificationEmail = () => {
        navigate("/varification/email")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                    <div className="ct_login_form ct_center_css ct_h-100 ct_px_15">
                        <form className="w-100">
                            <h4 className="ct_fs_32 text-white text-center ct_fw_700">Email sent!</h4>
                            <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">We just sent you an email with everything you need to log back in. Sometimes we get put in the junk folder - check for us there if you don’t see anything straight away.</p>

                            <div className="text-center mt-30">
                                <a onClick={() => HandleLogin()} className="ct_button_blue">BACK TO LOG IN</a>
                            </div>
                            <div className="text-center mt-30">
                                <a onClick={() => HandleVerificationEmail()} className="ct_blue_text text-center ct_fw_600 ct_fs_14" >RESEND VERIFICATION EMAIL</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailSent