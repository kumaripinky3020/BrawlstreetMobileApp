import React from 'react'
import { useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"

function CreateGameReview() {
    const navigate = useNavigate()
    const HandleInviteFriends = () => {
        navigate("/invite/friends")
    }
    const HandleCreateGame = () => {
        navigate("/create/game")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center pb-30 px-15">
                        <a onClick={() => HandleCreateGame()} className="">
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">REVIEW & CONFIRM</h4>
                    </div>
                    <div className="ct_white_bg pt-28 px-15 ct_h-100">
                        <p className="ct_fs_14 ct_dark_grey_text">Review and confirm your new game</p>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">NAME</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">St Louis October Brawl</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">TYPE GAME</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">50/50</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">ENTRY FEE</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">$100</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">START DATE</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">11/24/2019</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">START TIME</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">8:30am</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">TIMEZONE</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">Eastern Time (EST)</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">DURATION</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">12 hours</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">MAXIMUM PLAYER LEVEL</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">Beginner</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">CAN PLAY THE GAME</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">Private</p>
                        </div>
                        <div className="py-12">
                            <p className="mb-0 ct_fs_13 ct_fw_400"><span>NOTE: </span>The entry fee of $10.00 will be deducted from your account. This fee will be returned to you if other players will not be joining the game.</p>
                        </div>
                    </div>
                    <div className="ct_grey_bg_clr ct_fixed_botom">
                        <a onClick={() => HandleInviteFriends()} className="ct_button_blue ct_light_blue_btn">CONTINUE</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateGameReview