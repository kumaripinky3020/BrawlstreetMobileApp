import React from 'react'
import { useNavigate } from 'react-router-dom'
import stock_detail from "../img/stock_detail.png"
function Onboarding9() {

    const navigate = useNavigate()
    const HandleOnboarding10 = () => {
        navigate("/onboarding10")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                    <div >
                        <a className="ct_blue_text ct_fw_600 ct_fs_14" style={{ textAlign: "right", fontSize: "15px" }} >skip tour</a>
                    </div>
                    <div className="ct_login_form ct_center_css ct_h-100 ct_px_15">
                        <div className="w-100">
                            <div className="ct_onboarding_screen text-center">
                                <img src={stock_detail} alt="" />
                            </div>
                            <div className="ct_mt_minus_130">
                                <h4 className="ct_fs_32 text-white text-center ct_fw_700">Trading stocks</h4>
                                <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">With each game, you’ll manage a new Portfolio using your Brawl Street Bucks.
                                    All of your virtual trades are real time and thus your actions and reactions buying and selling stocks follow the live stock market. It’s like you are playing the real market.    </p>
                            </div>
                            <div className="ct_bottom_fixed">
                                <div className="text-center mt-30">
                                    <a onClick={() => HandleOnboarding10()} className="ct_blue_text text-center ct_fw_600 ct_fs_14" >Next</a>
                                </div>
                                <div className="ct_skip_dots mt-30">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="active"></span>
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

export default Onboarding9