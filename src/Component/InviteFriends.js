import React from 'react'
import { useNavigate } from 'react-router-dom'
import man_1 from "../img/man_1.png"
import back_btn from "../img/back_btn.png"
import Polygon_2 from "../img/Polygon_2.png"
import green_circle from "../img/green_circle.png"
import octagonal from '../img/octagonal.png'
import corner6 from '../img/6_corner.png'
import corner10 from '../img/10_corner.png'
import corner8_red from '../img/8_corner_red.png'

function InviteFriends() {
    const navigate = useNavigate()
    const HandleCreateGameReview = () => {
        navigate("/create/game/review")
    }
    const HandleInvitedFriends = () => {
        navigate("/invited/friends")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center px-15 justify-content-between pb-2  ">
                        <a onClick={() => HandleCreateGameReview()} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </a>
                        <div>
                            <h4 className="text-white text-center text-center ct_fs_18 mb-0 ct_fw_600 ">INVITE FRIENDS</h4>
                            <p className="mb-0 ct_grey_text">St Louis October Brawl</p>
                        </div>
                        <div>
                            <a onClick={() => HandleInvitedFriends()} className="ct_blue_text ct_fw_600">SKIP</a>
                        </div>
                    </div>
                    <div className="ct_dark_grey_bg_clr ct_friend_search position-relative py-2 ">
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="ct_search_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 14C11.7614 14 14 11.7614 14 9C14 6.23858 11.7614 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14ZM9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" fill="#7C7D7E" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9392 22.0608L11.9392 14.0608L14.0605 11.9395L22.0605 19.9395L19.9392 22.0608Z" fill="#7C7D7E" />
                            </svg>
                        </div>
                    </div>
                    <div className="ct_white_bg  ct_h-100  pt-12">
                        <p className="ct_fs_14 ct_blue_text ct_fw_700 px-15">SELECT ALL</p>
                        <div className="ct_scroll_68">
                            <div className="d-flex align-items-center gap-3 py-12 ct_border_btm_e1e1e1 ct_border_top px-15">
                                <div className="ct_line_h_0">
                                    <input type="checkbox" id="ct_keep_login" className="ct_checkbox_width1 bg-transparent " />
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="ct_ct_friends_img">
                                        <img src={man_1} alt="img" />
                                        <div className="ct_lavel_badge">
                                            <img src={Polygon_2} alt="img" />
                                            <h6>15</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="ct_fs_18 ct_fw_700 mb-1">silverfrog195</h4>
                                        <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Arlene Steward</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 py-12 ct_border_btm_e1e1e1  px-15">
                                <div className="ct_line_h_0">
                                    <input type="checkbox" id="ct_keep_login" className="ct_checkbox_width1 bg-transparent " />
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="ct_ct_friends_img">
                                        <img src={man_1} alt="img" />
                                        <div className="ct_lavel_badge">
                                            <img src={green_circle} alt="img" />
                                            <h6>2</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="ct_fs_18 ct_fw_700 mb-1">bluebear234</h4>
                                        <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Ronald Hawkins</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 py-12 ct_border_btm_e1e1e1  px-15">
                                <div className="ct_line_h_0">
                                    <input type="checkbox" id="ct_keep_login" className="ct_checkbox_width1 bg-transparent " />
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="ct_ct_friends_img">
                                        <img src={man_1} alt="img" />
                                        <div className="ct_lavel_badge">
                                            <img src={octagonal} alt="img" />
                                            <h6>35</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="ct_fs_18 ct_fw_700 mb-1">blueladybug463</h4>
                                        <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Evan Flores</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 py-12 ct_border_btm_e1e1e1  px-15">
                                <div className="ct_line_h_0">
                                    <input type="checkbox" id="ct_keep_login" className="ct_checkbox_width1 bg-transparent " />
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="ct_ct_friends_img">
                                        <img src={man_1} alt="img" />
                                        <div className="ct_lavel_badge">
                                            <img src={corner6} alt="img" />
                                            <h6>21</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="ct_fs_18 ct_fw_700 mb-1">yellowsnake313</h4>
                                        <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Kathryn Mckinney</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 py-12 ct_border_btm_e1e1e1  px-15">
                                <div className="ct_line_h_0">
                                    <input type="checkbox" id="ct_keep_login" className="ct_checkbox_width1 bg-transparent " />
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="ct_ct_friends_img">
                                        <img src={man_1} alt="img" />
                                        <div className="ct_lavel_badge">
                                            <img src={Polygon_2} alt="img" />
                                            <h6>12</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="ct_fs_18 ct_fw_700 mb-1">redkoala509</h4>
                                        <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Dianne Robertson</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 py-12 ct_border_btm_e1e1e1  px-15">
                                <div className="ct_line_h_0">
                                    <input type="checkbox" id="ct_keep_login" className="ct_checkbox_width1 bg-transparent " />
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="ct_ct_friends_img">
                                        <img src={man_1} alt="img" />
                                        <div className="ct_lavel_badge">
                                            <img src={corner10} alt="img" />
                                            <h6>53</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="ct_fs_18 ct_fw_700 mb-1">bigbear444</h4>
                                        <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Cody Cooper</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 py-12 ct_border_btm_e1e1e1  px-15">
                                <div className="ct_line_h_0">
                                    <input type="checkbox" id="ct_keep_login" className="ct_checkbox_width1 bg-transparent " />
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="ct_ct_friends_img">
                                        <img src={man_1} alt="img" />
                                        <div className="ct_lavel_badge">
                                            <img src={corner8_red} alt="img" />
                                            <h6>53</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="ct_fs_18 ct_fw_700 mb-1">sadwolf227</h4>
                                        <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Aubrey Lane</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 py-12 ct_border_btm_e1e1e1  px-15">
                                <div className="ct_line_h_0">
                                    <input type="checkbox" id="ct_keep_login" className="ct_checkbox_width1 bg-transparent " />
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="ct_ct_friends_img">
                                        <img src={man_1} alt="img" />
                                        <div className="ct_lavel_badge">
                                            <img src={Polygon_2} alt="img" />
                                            <h6>12</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="ct_fs_18 ct_fw_700 mb-1">redkoala509</h4>
                                        <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Dianne Robertson</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 py-12 ct_border_btm_e1e1e1  px-15">
                                <div className="ct_line_h_0">
                                    <input type="checkbox" id="ct_keep_login" className="ct_checkbox_width1 bg-transparent " />
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="ct_ct_friends_img">
                                        <img src={man_1} alt="img" />
                                        <div className="ct_lavel_badge">
                                            <img src={corner10} alt="img" />
                                            <h6>53</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="ct_fs_18 ct_fw_700 mb-1">bigbear444</h4>
                                        <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Cody Cooper</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 py-12 ct_border_btm_e1e1e1  px-15">
                                <div className="ct_line_h_0">
                                    <input type="checkbox" id="ct_keep_login" className="ct_checkbox_width1 bg-transparent " />
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="ct_ct_friends_img">
                                        <img src={man_1} alt="img" />
                                        <div className="ct_lavel_badge">
                                            <img src={corner8_red} alt="img" />
                                            <h6>53</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="ct_fs_18 ct_fw_700 mb-1">sadwolf227</h4>
                                        <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Aubrey Lane</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ct_grey_bg_clr ct_fixed_botom">
                            <a onClick={() => HandleInvitedFriends()} className="ct_button_blue ct_light_blue_btn">INVITE 5 FRIENDS</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InviteFriends