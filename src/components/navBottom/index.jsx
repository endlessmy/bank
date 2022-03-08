import React from 'react';
import { Link } from 'react-router-dom';
import {menus} from '../../constants/menu';
import  pngImg  from '../../utils/img';
import './index.less'

class NavBottom extends React.Component {
    render() {
        return (
            <div className='menu'>
                <div className='menu-content'>
                    <div className='menu-left'>
                        <img src={pngImg.logoPng} className="logo" alt="" />
                        <span className='title'>网易云音乐</span>
                        <ul className='menu-list'>
                            { menus.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="menu-item">
                                        <Link
                                        to={item.path}
                                        className="menu-link">{item.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='menu-right'>
                        <div className='search'>
                            <img src={pngImg.searchPng} className="search-img" alt="" />
                            <input
                                type="text"
                                className='search-input'
                                placeholder='音乐/视频/电台/用户'/>
                        </div>
                        <a
                            href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter"
                            className='create-center'>创作者中心</a>
                        <span className='login'>登录</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBottom;