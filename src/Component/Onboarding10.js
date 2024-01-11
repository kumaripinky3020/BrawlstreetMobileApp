import React from 'react'
import { useNavigate } from 'react-router-dom'
import my_profile from "../img/my-profile.png"
function Onboarding10() {
    const navigate = useNavigate()
    const HandleOnboarding11 = () => {
        navigate("/onboarding11")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg  px-15">
                    <div className="ct_login_form ct_center_css  ct_px_15">
                        <div className="w-100">
                            <div className="ct_onboarding_screen text-center">
                                <img src={my_profile} alt="" />
                            </div>
                            <div className="ct_mt_minus_130 pb-5">
                                <h4 className="ct_fs_32 text-white text-center ct_fw_700">Let’s go!</h4>
                                <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">With each game, you’ll manage a new Portfolio using your Brawl Street Bucks.
                                    With each game, you’ll manage a new Portfolio using your Brawl Street Bucks.
                                    All of your virtual trades are real time and thus your actions and reactions buying and selling stocks follow the live stock market. It’s like you are playing the real market.     </p>
                            </div>
                            <div className="ct_bottom_fixed ct_position_relative">
                                <div className="text-center mt-30">
                                    <a onClick={() => HandleOnboarding11()} className="ct_button_blue">START PLAYING</a>
                                </div>
                                <div className="ct_skip_dots mt-30">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="active"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Onboarding10