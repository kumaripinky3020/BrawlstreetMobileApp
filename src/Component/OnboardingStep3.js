import React from 'react'
import { useNavigate } from 'react-router-dom'
function OnboardingStep3() {
    const navigate = useNavigate()
    const HandleOnboardWizard_2 = () => {
        navigate("/onboard/wizard2")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                    <div className="ct_login_form ct_center_css ct_h-100 ct_px_15">
                        <div className="w-100">
                            <div className="ct_bottom_fixed w-100 ct_px_15">
                                <div className="w-100">
                                    <h4 className="ct_fs_32 text-white text-center ct_fw_700">Complete and Win</h4>
                                    <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">The competition starts as you watch your profits rise real time leading you to win if you finish at the top.</p>
                                </div>
                                <div className="text-center mt-30">
                                    <a onClick={() => HandleOnboardWizard_2()} className="ct_blue_text text-center ct_fw_600 ct_fs_14" >Next</a>
                                </div>
                                <div className="ct_skip_dots mt-30">
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

export default OnboardingStep3