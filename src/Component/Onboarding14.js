import React from 'react'
import { useNavigate } from 'react-router-dom'
import illustration from "../img/illustration.png"
function Onboarding14() {
    const navigate = useNavigate()
    const HandleOnboarding15 = () => {
        navigate("/onboarding15")
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
                                <h4 className="ct_fs_32 text-white text-center mt-30 ct_fw_700">Trading stocks</h4>
                                <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">
                                    With each game, you’ll manage a new Portfolio using your Brawl Street Bucks.
                                </p>
                                <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">
                                    All of your virtual trades are real time and thus your actions and reactions buying and selling stocks follow the live stock market. It’s like you are playing the real market.
                                </p>
                            </div>
                            <div className="ct_bottom_fixed">
                                <div className="text-center mt-30">
                                    <a onClick={() => HandleOnboarding15()} className="ct_blue_text text-center ct_fw_600 ct_fs_14" >Next</a>
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

export default Onboarding14