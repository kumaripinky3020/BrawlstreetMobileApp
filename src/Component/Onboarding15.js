import React from 'react'
import { useNavigate } from 'react-router-dom'
import illustration from "../img/illustration.png"
function Onboarding15() {
    const navigate = useNavigate()
    const HandleOnboarding16 = () => {
        navigate("/onboarding16")
    }

    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                    <div className="ct_login_form pt-50 ct_h-100 ct_px_15">
                        <div className="w-100">
                            <div className="ct_onboarding_screen text-center">
                                <img src={illustration} alt="" className="w-100" />
                            </div>
                            <div className="">
                                <h4 className="ct_fs_32 text-white text-center mt-30 ct_fw_700">Let’s go!</h4>
                                <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">
                                    With each game, you’ll manage a new Portfolio using your Brawl Street Bucks.
                                </p>
                                <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">
                                    All of your virtual trades are real time and thus your actions and reactions buying and selling stocks follow the live stock market. It’s like you are playing the real market.
                                </p>
                            </div>
                            <div className="ct_bottom_fixed">
                                <div className="text-center mt-30">
                                    <a onClick={() => HandleOnboarding16()} className="ct_button_blue">START PLAYING</a>
                                </div>
                                <div className="ct_skip_dots mt-30">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="active"></span>
                                    <span ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Onboarding15