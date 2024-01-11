import React from 'react'
import { useNavigate } from 'react-router-dom'
import illustration from "../img/illustration.png"

function Onboarding11() {

    const navigate = useNavigate()
    const HandleOnboarding12 = () => {
        navigate("/onboarding12")
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
                                <h4 className="ct_fs_32 text-white text-center mt-30 ct_fw_700">Welcome to <br /> Brawl Street!</h4>
                                <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">
                                    You are joining a growing group of players who are winning money even when the stock market is doing poorly.
                                </p>
                            </div>
                            <div className="ct_bottom_fixed">
                                <div className="text-center mt-30">
                                    <a onClick={() => HandleOnboarding12()} className="ct_blue_text text-center ct_fw_600 ct_fs_14" >Next</a>
                                </div>
                                <div className="ct_skip_dots mt-30">
                                    <span className="active"></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
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

export default Onboarding11