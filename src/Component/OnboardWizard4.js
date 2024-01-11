import React from 'react'
import { useNavigate } from 'react-router-dom'
import Rectangle_box from "../img/Rectangle_box.png"
function OnboardWizard4() {
    const navigate = useNavigate()
    const HandleMygames =()=>{
        navigate("/mygames")
    }

    // const HandleOnboardWizard_4=()=>{
    //     navigate("/onboard/wizard4")
    // }

    return (
    <>
    <div className="ct_mobile_width">
        <div className="ct_login_bg h-100 px-15">
            <div className="ct_login_form pt-30 ct_h-100 ct_px_15">
                <div className="ct_position_relative">
                    <div className="ct_skip_dots mb-30">
                        <span></span>
                        <span></span>
                        <span  className="active_2"></span>
                        </div>
                        {/* <a onClick={()=>HandleOnboardWizard_4()} className="ct_sky_blue_text ct_skip_position">SKIP</a> */}
                </div>
                <div className="w-100 pt-15">
                    <div className="ct_onboarding_screen text-center">
                        <img src={Rectangle_box} alt=""/>
                    </div>

                    <div className="">
                    <h4 className="ct_fs_18  text-center mt-30 ct_fw_600 ct_yellow_text">TRADING STOCKS</h4>
                    <p className="text-white ct_text_op_0_8 mt-30 ct_fs_14 ct_lh_20 ct_fw_400">
                        You can also place Limit Orders to buy or sell a stock once they reach a specific price.
                    </p>
                    <p className="text-white ct_text_op_0_8 mt-30 ct_fs_14 ct_lh_20 ct_fw_400">
                        At the end of the game, the stocks in your portfolio are sold and all players are notified of their standings.
                    </p>
                    <div className="pt-15">
                        <a onClick={()=>HandleMygames()} className="ct_button_blue mt-30 ct_yellow_btn ct_fw_600 ct_fs_20">START PLAYING</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OnboardWizard4