import React, { Component } from 'react'
import { UserMine } from "./styled"
import bg from "./bg.png"
import vip from "./ad.411f5e6.png"
var sectionStyle = {
    width: "100%",
    height: "4rem",
    // makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${bg})`
};

export default class Usermine extends Component {
    render() {
        return (
            <UserMine>
                <div className="mine-info" style={sectionStyle}>
                    <a href="/mine" className="set">
                        <i className="iconfont">&#xe630;</i>
                    </a>
                    <div className="mine-info__main">
                        <div className="mine-head">
                            <div className="mine-pic">
                                <img alt="" src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png" />
                            </div>
                            <span className="mine-name">橙子</span>
                            <span className="mine-uid">ID: 6821281</span>
                        </div>
                        <div className="mine-label">
                            <p className="mine-label__name">普通会员</p>
                        </div>
                        <div className="mine-cnt">
                            <a href="http://localhost:3000/mine#/mine" className="mine-cnt__item">
                                <p className="mine-num">0</p>
                                <p className="mine-name">账户余额</p>
                            </a>
                            <a href="http://localhost:3000/mine#/mine" className="mine-cnt__item">
                                <p className="mine-num">0</p>
                                <p className="mine-name">积分</p>
                            </a>
                            <a href="http://localhost:3000/mine#/mine" className="mine-cnt__item">
                                <p className="mine-num">0</p>
                                <p className="mine-name">优惠券</p>
                            </a>
                            <a href="http://localhost:3000/mine#/mine" className="mine-cnt__item mine-cnt__plus">
                                <p className="mine-num mine-num--no">立即开通</p>
                                <p className="mine-name">橙PLUS卡</p>
                            </a>
                        </div>
                    </div>
                    <a href="http://localhost:3000/mine#/mine" className="mine-vip">
                        <img src={vip} alt="" className="mine-vip__pic" />
                    </a>
                    <div className="mine-setting">
                        <ul className="mine-setting__list">
                            <li className="mine-setting__list__item">
                                <a href="http://localhost:3000/mine#/mine" className="mine-order">
                                    <i className="iconfont">&#xe646;</i> 
                                    <p className="mine-">我的订单</p>
                                </a>
                            </li>
                            <li className="mine-setting__list__item">
                                <a href="http://localhost:3000/mine#/mine" className="mine-ticket">
                                    <i className="iconfont">&#xe60a;</i> 
                                    <p className="mine-">我的票夹</p>
                                </a>
                            </li>
                            <li className="mine-setting__list__item">
                                <a href="http://localhost:3000/mine#/mine" className="mine-bag">
                                    <i className="iconfont">&#xe60a;</i> 
                                    <p className="mine-">我的卡包</p>
                                </a>
                            </li>
                            
                        </ul> 
                        <ul className="mine-setting__list">
                            <li className="mine-setting__list__item">
                                <a href="http://localhost:3000/mine#/mine" className="mine-perpor">
                                    <i className="iconfont">&#xe605;</i>
                                    <p className="mine-">实名购票人</p>
                                </a>
                            </li>
                            <li className="mine-setting__list__item">
                                <a href="http://localhost:3000/mine#/mine" className="mine-address">
                                    <i className="iconfont">&#xe60e;</i> 
                                    <p className="mine-">收货地址</p>
                                </a>
                            </li>
                            <li className="mine-setting__list__item">
                                <a href="http://localhost:3000/mine#/mine" className="mine-link">
                                    <i className="iconfont">&#xe614;</i> 
                                    <p className="mine-">意见反馈</p>
                                </a>
                            </li> 
                            <li className="mine-setting__list__item">
                                <a href="http://localhost:3000/mine#/mine" className="mine-help">
                                    <i className="iconfont">&#xe66b;</i> 
                                    <p className="mine-active">客服帮助</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </UserMine>
        )
    }
}
