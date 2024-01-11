import React from 'react'
import { useNavigate } from 'react-router-dom'
import back_btn from '../img/back_btn.png'
import menu from '../img/menu.png'
import notifications from '../img/notifications.png'
import star_stroke from '../img/star_stroke.png'
import bank_account from '../img/bank_account.png'
import my_game from '../img/my_game.png'
import man_1 from '../img/man_1.png'
import corner6 from '../img/6_corner.png'
import octagonal from '../img/octagonal.png'
import corner10 from '../img/10_corner.png'
import Polygon_2 from "../img/Polygon_2.png"

          

function ViewReferrals() {
const navigate = useNavigate()
const HandleReferrals=()=>{
    navigate("/referrals")
}
const HandleMygames =()=>{
    navigate("/mygames")
}
const HandleOpenGames =()=>{
    navigate("/open/games")
}
const HandleNotification=()=>{
    navigate("/notification")
}
const HandleNavigationMore=()=>{
    navigate("/navigation/more")
}
const HandleWatchlist=()=>{
    navigate("/watchlist")
}
return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg">
                    <div className="ct_mob_head d-flex align-items-center pb-30 px-15">
                        <a onClick={()=>HandleReferrals()} >
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">
                            REFERRALS
                        </h4>
                    </div>
                    <div className="ct_overflow_hidden">
                        <div className="ct_open_game_tab">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#pending_Invites">pending Invites</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link position-relative" data-bs-toggle="tab" href="#joined">joined</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane container active" id="pending_Invites">
                                    <div className="ct_white_bg">
                                        <div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div>
                                                    <p className="mb-0 ct_fs_14 ct_fw_500 ct_black_clr">
                                                        johnsmith@email.com
                                                    </p>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        John Smith
                                                    </p>
                                                    <a  className="ct_blue_text ct_fw_700 ct_fs_13 mt-2 d-block">RESEND INVITATION</a>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        01/11/2019
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div>
                                                    <p className="mb-0 ct_fs_14 ct_fw_500 ct_black_clr">
                                                        timmothy.barnes@example.com
                                                    </p>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        Cameron Hawkins
                                                    </p>
                                                    <a  className="ct_blue_text ct_fw_700 ct_fs_13 mt-2 d-block">RESEND INVITATION</a>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        25/10/2019
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div>
                                                    <p className="mb-0 ct_fs_14 ct_fw_500 ct_black_clr">
                                                        debra.holt@example.com
                                                    </p>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        Esther Murphy
                                                    </p>
                                                    <a  className="ct_blue_text ct_fw_700 ct_fs_13 mt-2 d-block">RESEND INVITATION</a>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        13/10/2019
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div>
                                                    <p className="mb-0 ct_fs_14 ct_fw_500 ct_black_clr">
                                                        greg.neal@example.com
                                                    </p>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">Guy Black</p>
                                                    <a  className="ct_blue_text ct_fw_700 ct_fs_13 mt-2 d-block">RESEND INVITATION</a>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        29/09/2019
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div>
                                                    <p className="mb-0 ct_fs_14 ct_fw_500 ct_black_clr">
                                                        donald.wood@example.com
                                                    </p>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        Nathan Alexander
                                                    </p>
                                                    <a  className="ct_blue_text ct_fw_700 ct_fs_13 mt-2 d-block">RESEND INVITATION</a>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        20/09/2019
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div>
                                                    <p className="mb-0 ct_fs_14 ct_fw_500 ct_black_clr">
                                                        alberto.ward@example.com
                                                    </p>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        Tomothy Russell
                                                    </p>
                                                    <a  className="ct_blue_text ct_fw_700 ct_fs_13 mt-2 d-block">RESEND INVITATION</a>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        14/09/2019
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* empty page content s */}

                                        {/* <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_css">
                                            <div className="w-100">
                                                <div className="text-center mb-12">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36 69C54.2254 69 69 54.2254 69 36C69 17.7746 54.2254 3 36 3C17.7746 3 3 17.7746 3 36C3 54.2254 17.7746 69 36 69ZM36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z" fill="#D8D8D8" />
                                                        <path d="M42 25C42 28.3137 39.3137 31 36 31C32.6863 31 30 28.3137 30 25C30 21.6863 32.6863 19 36 19C39.3137 19 42 21.6863 42 25Z" fill="#D8D8D8" />
                                                        <path d="M18 30C18 32.2091 19.7909 34 22 34C24.2091 34 26 32.2091 26 30C26 27.7909 24.2091 26 22 26C19.7909 26 18 27.7909 18 30Z" fill="#D8D8D8" />
                                                        <path d="M46 30C46 32.2091 47.7909 34 50 34C52.2091 34 54 32.2091 54 30C54 27.7909 52.2091 26 50 26C47.7909 26 46 27.7909 46 30Z" fill="#D8D8D8" />
                                                        <path d="M22 37C18.6863 37 16 39.2386 16 42V52H22V37Z" fill="#D8D8D8" />
                                                        <path d="M50 37C53.3137 37 56 39.2386 56 42V52H50V37Z" fill="#D8D8D8" />
                                                        <path d="M40 37H32C30.3431 37 29 38.3431 29 40V49V52H26V40C26 36.6863 28.6863 34 32 34H40C43.3137 34 46 36.6863 46 40V52H43V49V40C43 38.3431 41.6569 37 40 37Z" fill="#D8D8D8" />
                                                    </svg>
                                                </div>
                                                <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">You have no pending invites
                                                    at the moment.</p>
                                            </div>
                                        </div> */}

                                        {/* empty content E */}
                                    </div>
                                </div>
                                <div className="tab-pane container fade" id="joined">
                                    <div className="ct_white_bg">
                                        <div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="ct_ct_friends_img">
                                                        <img src={man_1} alt="img" />
                                                        <div className="ct_lavel_badge">
                                                            <img src={Polygon_2} alt="img" />
                                                            <h6>15</h6>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="ct_fs_14 ct_fw_700 mb-1">Amiles90</h4>
                                                        <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                                                            Angel Miles
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        01/11/2019
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="ct_ct_friends_img">
                                                        <img src={man_1} alt="img" />
                                                        <div className="ct_lavel_badge">
                                                            <img src={octagonal} alt="img" />
                                                            <h6>33</h6>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="ct_fs_14 ct_fw_700 mb-1">bunnyjump4</h4>
                                                        <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                                                            Juanita Bell
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        25/10/2019
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="ct_ct_friends_img">
                                                        <img src={man_1} alt="img" />
                                                        <div className="ct_lavel_badge">
                                                            <img src={corner6} alt="img" />
                                                            <h6>27</h6>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="ct_fs_14 ct_fw_700 mb-0">Astella888R</h4>
                                                        <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                                                            Stella Russell
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        13/10/2019
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="ct_ct_friends_img">
                                                        <img src={man_1} alt="img" />
                                                        <div className="ct_lavel_badge">
                                                            <img src={corner10} alt="img" />
                                                            <h6>12</h6>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="ct_fs_14 ct_fw_700 mb-1">Amiles90</h4>
                                                        <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                                                            Angel Miles
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        29/09/2019
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="ct_ct_friends_img">
                                                        <img src={man_1} alt="img" />
                                                        <div className="ct_lavel_badge">
                                                            <img src={Polygon_2} alt="img" />
                                                            <h6>15</h6>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="ct_fs_14 ct_fw_700 mb-1">Amiles90</h4>
                                                        <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                                                            Angel Miles
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        01/11/2019
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="ct_ct_friends_img">
                                                        <img src={man_1} alt="img" />
                                                        <div className="ct_lavel_badge">
                                                            <img src={octagonal} alt="img" />
                                                            <h6>33</h6>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="ct_fs_14 ct_fw_700 mb-1">bunnyjump4</h4>
                                                        <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                                                            Juanita Bell
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        25/10/2019
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="ct_ct_friends_img">
                                                        <img src={man_1} alt="img" />
                                                        <div className="ct_lavel_badge">
                                                            <img src={corner6} alt="img" />
                                                            <h6>27</h6>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="ct_fs_14 ct_fw_700 mb-0">Astella888R</h4>
                                                        <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                                                            Stella Russell
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        13/10/2019
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ct_border_top py-2 ct_border_btm px-15">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="ct_ct_friends_img">
                                                        <img src={man_1} alt="img" />
                                                        <div className="ct_lavel_badge">
                                                            <img src={corner10} alt="img" />
                                                            <h6>12</h6>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="ct_fs_14 ct_fw_700 mb-1">Amiles90</h4>
                                                        <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                                                            Angel Miles
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">
                                                        29/09/2019
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* empty page content s */}

                                    {/* <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_css">
                                        <div className="w-100">
                                            <div className="text-center mb-12">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36 69C54.2254 69 69 54.2254 69 36C69 17.7746 54.2254 3 36 3C17.7746 3 3 17.7746 3 36C3 54.2254 17.7746 69 36 69ZM36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z" fill="#D8D8D8" />
                                                    <path d="M42 25C42 28.3137 39.3137 31 36 31C32.6863 31 30 28.3137 30 25C30 21.6863 32.6863 19 36 19C39.3137 19 42 21.6863 42 25Z" fill="#D8D8D8" />
                                                    <path d="M18 30C18 32.2091 19.7909 34 22 34C24.2091 34 26 32.2091 26 30C26 27.7909 24.2091 26 22 26C19.7909 26 18 27.7909 18 30Z" fill="#D8D8D8" />
                                                    <path d="M46 30C46 32.2091 47.7909 34 50 34C52.2091 34 54 32.2091 54 30C54 27.7909 52.2091 26 50 26C47.7909 26 46 27.7909 46 30Z" fill="#D8D8D8" />
                                                    <path d="M22 37C18.6863 37 16 39.2386 16 42V52H22V37Z" fill="#D8D8D8" />
                                                    <path d="M50 37C53.3137 37 56 39.2386 56 42V52H50V37Z" fill="#D8D8D8" />
                                                    <path d="M40 37H32C30.3431 37 29 38.3431 29 40V49V52H26V40C26 36.6863 28.6863 34 32 34H40C43.3137 34 46 36.6863 46 40V52H43V49V40C43 38.3431 41.6569 37 40 37Z" fill="#D8D8D8" />
                                                </svg>
                                            </div>
                                            <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">You have no pending invites
                                                at the moment.</p>
                                        </div>
                                    </div> */}

                                    {/* empty content E */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ct_navigation_bar px-15">
                        <ul>
                            <li>
                                <a onClick={()=>HandleMygames()}>
                                    <img src={my_game} alt="img" />
                                    <h5 className="mb-0">My games</h5>
                                </a>
                            </li>
                            <li>
                                <a onClick={()=>HandleOpenGames()}>
                                    <img src={bank_account} alt="img" />
                                    <h5 className="mb-0">Open games</h5>
                                </a>
                            </li>
                            <li>
                                <a onClick={()=>HandleWatchlist()}>
                                    <img src={star_stroke} alt="img" />
                                    <h5 className="mb-0">Watchlist</h5>
                                </a>
                            </li>
                            <li>
                                <a onClick={()=>HandleNotification()}>
                                    <img src={notifications} alt="img" />
                                    <h5 className="mb-0">Notifications</h5>
                                    <span className="ct_notification_badge">2</span>
                                </a>
                            </li>
                            <li>
                                <a onClick={()=>HandleNavigationMore()}>
                                    <img src={menu} alt="img" />
                                    <h5 className="mb-0">More</h5>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewReferrals