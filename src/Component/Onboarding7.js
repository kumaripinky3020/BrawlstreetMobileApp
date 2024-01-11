import React from 'react'
import { useNavigate } from 'react-router-dom'
import gameopen from "../img/gameopen.png"
function Onboarding7() {
    const navigate = useNavigate()
    const HandleOnboarding8 = () => {
        navigate("/onboarding8")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                    <div >
                        <a className="ct_blue_text ct_fw_600 ct_fs_14" style={{ textAlign: "right", fontSize: "15px" }} >skip tour</a>
                    </div>
                    <div className="ct_login_form ct_center_css ct_h-100 ct_x_15">
                        <div className="w-100">
                            <div className="ct_onboarding_screen text-center">
                                <img src={gameopen} alt="" />
                            </div>
                            <div className="ct_mt_minus_130">
                                <h4 className="ct_fs_32 text-white text-center ct_fw_700">How to play</h4>
                                <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">To play, you can join an existing game or create your own game.</p>
                                <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">You are given $200,000 of Brawl Street virtual dollars to buy stocks with which you build your portfolio.</p>
                            </div>
                            <div className="ct_bottom_fixed">
                                <div className="text-center mt-30">
                                    <a onClick={() => HandleOnboarding8()} className="ct_blue_text text-center ct_fw_600 ct_fs_14" >Next</a>
                                </div>
                                <div className="ct_skip_dots mt-30">
                                    <span></span>
                                    <span className="active"></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Onboarding7