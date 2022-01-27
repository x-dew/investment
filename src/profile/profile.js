import React, {useEffect, useReducer, useState} from "react";
import './profile.css'
import ProfileData from "./profileData/profileData";
import {listMenu, dataProfile, reduce} from "./reducerProfile";
import axios from "axios";


const Profile = ({setProfile, signUpReduce}) => {

    const [userData, dispatchData] = useReducer(reduce, dataProfile)
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get('https://api.investonline.su/api/v1/user/profile', {
            headers: {
                accept: 'application/x.incrowd.v1+json',
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            },
            params: {
                include: 'roles,profiles,status',
            }
        }).then((resp) => {
            setData(resp.data.user.data)
            dispatchData({
                payload: {
                    name: 'fio',
                    value: resp.data.user.data.fio
                }
            })
            dispatchData({
                payload: {
                    name: 'phone',
                    value: resp.data.user.data.phone
                }
            })
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    const [menu, dispatchMenu] = useReducer(reduce, listMenu)
    const menuData = Object.values(menu)
    const [actionSelection, setActionSelection] = useState(1)




    return (
        <div className='profile'>
            <div className='profileHeader'>
                <div className='container'>
                    <div className='companyInformation'>
                        <div className='profileLogo'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="70px" height="70px"
                                 viewBox="0 0 920.000000 920.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,920.000000) scale(0.100000,-0.100000)" fill="#fff"
                                   stroke="none">
                                    <path
                                        d="M4560 9191 c-36 -11 -92 -41 -114 -60 -40 -36 -49 -71 -57 -241 -4 -91 -10 -172 -14 -181 -4 -10 -45 -24 -127 -43 -314 -72 -548 -208 -690 -399 -137 -185 -198 -377 -198 -622 0 -251 61 -452 185 -615 142 -184 329 -302 671 -419 l169 -59 3 -297 2 -296 283 -307 c155 -169 334 -361 399 -427 l116 -120 44 24 c57 32 398 244 469 292 49 33 63 50 102 126 100 195 132 344 124 571 -6 172 -28 273 -86 398 -56 118 -129 220 -227 314 -150 144 -271 206 -611 315 l-183 58 0 418 c0 247 4 420 9 424 14 8 123 -86 165 -143 35 -49 55 -88 111 -224 75 -184 186 -258 365 -245 106 8 162 30 229 93 211 195 131 554 -194 869 -145 140 -301 217 -547 271 -87 19 -129 33 -134 43 -3 9 -9 90 -13 181 -10 216 -24 243 -147 290 -59 22 -66 22 -104 11z m-177 -1252 c10 -135 1 -579 -11 -591 -11 -11 -119 59 -182 118 -68 64 -85 112 -85 244 0 136 11 166 88 236 64 58 154 116 172 111 6 -2 14 -55 18 -118z m556 -1574 c132 -68 182 -109 218 -183 23 -48 28 -72 31 -157 3 -83 0 -111 -18 -165 -42 -127 -109 -200 -245 -268 -102 -51 -99 -53 -106 68 -14 229 -8 760 8 760 3 0 53 -25 112 -55z"/>
                                    <path
                                        d="M6630 7159 c-13 -6 -33 -18 -43 -27 -71 -64 -43 -122 317 -661 116 -174 224 -343 240 -375 l28 -59 -23 -18 c-64 -48 -755 -468 -1384 -840 -493 -293 -592 -349 -610 -349 -22 0 -237 219 -704 715 -777 827 -805 855 -864 855 -44 0 -96 -43 -382 -316 -312 -299 -2810 -2789 -3017 -3008 -179 -190 -192 -207 -183 -236 11 -35 54 -78 91 -90 33 -11 40 -9 127 41 51 29 164 98 252 154 245 156 299 192 1410 926 818 541 1185 781 1255 820 l43 24 85 -90 c47 -49 319 -342 605 -650 948 -1020 1022 -1096 1084 -1111 34 -9 110 29 233 114 93 65 646 457 1330 943 1177 837 1415 1000 1441 983 4 -2 60 -81 125 -176 309 -451 420 -606 460 -637 45 -35 111 -23 151 29 31 39 164 693 463 2268 l40 214 -21 29 c-11 16 -34 36 -50 45 -60 30 -263 75 -1004 218 -875 170 -1164 224 -1445 271 -14 2 -36 -1 -50 -6z"/>
                                    <path
                                        d="M8210 3790 c-196 -5 -229 -8 -253 -24 -15 -10 -32 -26 -36 -35 -18 -34 -22 -333 -25 -1965 l-3 -1678 26 -24 c59 -55 70 -56 552 -52 497 4 504 5 530 69 10 26 14 165 19 619 7 755 0 2972 -9 3007 -10 37 -47 61 -111 72 -76 13 -420 19 -690 11z"/>
                                    <path
                                        d="M1693 3269 c-24 -4 -59 -20 -78 -35 l-35 -26 0 -1553 0 -1553 56 -50 56 -50 396 5 c481 5 555 11 590 46 22 22 25 36 33 138 4 63 8 764 8 1560 l1 1445 -34 33 c-22 22 -50 36 -78 42 -56 11 -860 9 -915 -2z"/>
                                    <path
                                        d="M3320 3171 c-82 -7 -113 -19 -132 -54 -18 -33 -24 -430 -26 -1802 l-2 -1211 54 -53 55 -54 443 6 c244 4 458 11 477 16 18 6 48 22 67 36 l34 26 0 1427 c0 819 -4 1465 -10 1516 -13 125 -25 136 -157 146 -118 9 -698 9 -803 1z"/>
                                    <path
                                        d="M6455 3171 c-108 -13 -119 -30 -135 -191 -5 -53 -10 -702 -10 -1483 l0 -1387 56 -55 55 -55 267 0 c379 1 638 14 684 33 61 26 66 45 72 302 10 377 13 1508 6 2148 -6 581 -7 598 -27 625 -11 15 -35 36 -54 47 -32 19 -54 20 -444 22 -225 1 -437 -2 -470 -6z"/>
                                    <path
                                        d="M4777 2482 l-47 -48 2 -949 c1 -523 4 -1047 8 -1165 7 -241 14 -268 72 -290 23 -9 173 -15 492 -21 l459 -8 58 51 59 51 0 1150 0 1151 -21 43 c-39 82 -12 78 -554 81 l-480 3 -48 -49z"/>
                                    <path
                                        d="M206 2140 l-119 -7 -33 -35 c-29 -32 -33 -44 -40 -124 -11 -116 -11 -1682 0 -1798 14 -154 34 -162 411 -171 132 -3 321 -1 420 4 211 10 253 22 282 79 17 35 18 87 18 982 0 1030 2 1000 -57 1041 -25 19 -51 23 -157 30 -148 9 -555 9 -725 -1z"/>
                                </g>
                            </svg>
                        </div>
                        <div className='companyMenu'>
                            <ul className='menuLink'>
                                {menuData.map((value, index) => {
                                    return <li key={index}><a href="#">{value}</a></li>
                                })}
                            </ul>
                            <select className='menuLinkMedia'>
                                {menuData.map((value, index) => {
                                    return <option key={index}>{value}</option>
                                })}
                            </select>
                            <div className='userInformation userFlex'>
                                <div className='userName userFlex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff"
                                         className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path
                                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                    <p>{data.fio}</p>
                                </div>
                                <div className='userEmail userFlex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFF"
                                         className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path
                                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                    </svg>
                                    <p>{data.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sectionSelection'>
                <ul className='sectionSelectionMenu'>
                    <li
                        onClick={() => setActionSelection(1)}
                        className={actionSelection === 1 ? 'actionSelection' : ''}
                    >Данные профиля
                    </li>
                    <li
                        onClick={() => setActionSelection(2)}
                        className={actionSelection === 2 ? 'actionSelection' : ''}
                    >Банковские реквизиты
                    </li>
                </ul>
            </div>
            <div className='profileTable'>
                <ProfileData
                    data={data}
                    userData={userData}
                    dispatchData={dispatchData}
                />
            </div>
        </div>
    )
}

export default Profile