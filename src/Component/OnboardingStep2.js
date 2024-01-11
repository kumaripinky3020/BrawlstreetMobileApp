import React from 'react'
import { useNavigate } from 'react-router-dom'

function OnboardingStep2() {
const navigate = useNavigate()
const HandleOnboardingStep3=()=>{
    navigate("/onboarding/step3");
}
return (
  <>
     <div className="ct_mobile_width">
        <div className="ct_login_bg h-100 px-15">
            <div className="ct_login_form ct_center_css ct_h-100 ct_px_15">
                <div className="w-100">
                   <div className="ct_bottom_fixed w-100 ct_px_15">
                    <div className="w-100">
                        <h4 className="ct_fs_32 text-white text-center ct_fw_700">Build your portfolio</h4>
                        <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">Buy and sell any stocks you want with $200,000 of virtual currency.</p>
                        </div>
                        <div className="text-center mt-30">
  
                            <a onClick={()=>HandleOnboardingStep3()} className="ct_blue_text text-center ct_fw_600 ct_fs_14" >Next</a>
                        </div>
                        <div className="ct_skip_dots mt-30">
                        <span></span>
                        <span  className="active"></span>
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

export default OnboardingStep2