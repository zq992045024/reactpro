import React, { Component, Fragment } from 'react'
import Header from "@components/header"
import { HomeWrapper } from "./styled"
import { navTabBarRoute } from "@router";
import { NavLink } from "react-router-dom";
import { get_hot_api } from "@api/play.js";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapState";
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import pic1 from "@static/pic1.png"
import pic2 from "@static/pic2.jpg"
import pic3 from "@static/pic3.jpg"
import pic4 from "@static/pic4.png"


import BscrollCom from "@common/bscroll"
class Home extends Component {
    constructor() {
        super()
        this.state = {
            hotList: [],
            pageIndex: 1
        }
    }
    render() {
        let { hotList } = this.state
        return (
            <HomeWrapper>
                <Header />
                <BscrollCom ref="bscroll">
                    <div ref="hs">
                        <div className="banner">
                            <Fragment>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide"><img src={pic1} alt="" /></div>
                                        <div className="swiper-slide"><img src={pic2} alt="" /></div>
                                        <div className="swiper-slide"><img src={pic3} alt="" /></div>
                                        <div className="swiper-slide"><img src={pic4} alt="" /></div>
                                    </div>
                                </div>
                            </Fragment>
                        </div>
                        <div className="nav">
                            {
                                navTabBarRoute.map((item, index) => (
                                    <NavLink key={index} to={item.path}>
                                        <i className="iconfont">{item.icon}</i>
                                        <span>{item.name}</span>
                                    </NavLink>
                                ))
                            }
                        </div>
                        <h2>近期热门</h2>
                        <div className="hot">
                            <div className="hotList">
                                <BscrollCom>
                                    <ul>
                                        {
                                            hotList.map((item, index) => (
                                                <li key={index}>
                                                    <div className="hotImg">
                                                        <img src={item.recommendContent.poster} alt="" />
                                                    </div>
                                                    <div className="hotName">
                                                        {item.recommendContent.name}
                                                    </div>
                                                    <div className="hotPrice">
                                                        <span>￥{item.recommendContent.lowPrice}</span>
                                                        <span>起</span>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </BscrollCom>
                            </div>
                        </div>
                        <div id="like">
                            <div id="title">
                                <h2>猜你喜欢</h2>
                            </div>
                            <div className="likeMain">
                                <ul>
                                    {
                                        hotList.map((item, index) => (
                                            <li key={index} className="hoplist">
                                                <img src={item.recommendContent.poster} alt="" />
                                                <div className="hopInfo">
                                                    <div className="hopInfoTitle">
                                                        <span>[北京]</span>
                                                        <span>{item.recommendContent.properName}</span>
                                                    </div>
                                                    <div className="place">
                                                        <span>{item.recommendContent.timeRange}</span>
                                                        <span>|</span>
                                                        <span>{item.recommendContent.venueName}</span>
                                                    </div>
                                                    <div className="rank">
                                                        <span>评分</span>
                                                        <span>{item.recommendContent.rank}</span>
                                                    </div>
                                                    <div className="prices">
                                                        <span>{item.recommendContent.lowPrice}</span>
                                                        <span>元起</span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </BscrollCom>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        if (!sessionStorage.getItem("hotList")) {
            this.chooseType()
        } else {
            this.setState({
                hotList: JSON.parse(sessionStorage.getItem("hotList"))
            })
        }
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: {
                disableOnInteraction: false
            },//可选选项，自动滑动
            effect: 'fade',
        })
        if (false) {
            console.log(mySwiper)
        }
        this.refs.bscroll.handlepullingDown(() => {
            this.chooseType("down")
        })
        this.refs.bscroll.handlepullingUp(() => {
            this.chooseType("up")
        })

    }
    componentWillUpdate(newProps, newState) {
        if (newState !== this.state) {
            this.refs.bscroll.handlefinishPullDown();
            this.refs.bscroll.handleRestpullingUp();
        }
    }
    async chooseType(type) {
        let { pageIndex } = this.state;
        let pageSize = 10;
        if (type === "up") {
            let data = await get_hot_api(pageIndex, pageSize);
            data = data.data
            this.setState({
                pageIndex: ++pageIndex,
                hotList: [...this.state.hotList, ...data]
            })
            if(pageIndex>11)return;
            sessionStorage.setItem("hotList", JSON.stringify(data))
        } else if (type === "down") {
            let num = Number(parseInt(Math.random() * 10 + 1))
            let data = await get_hot_api(pageIndex, pageSize);
            data = data.data
            this.setState({
                pageIndex:num,
                hotList: data
            })
            this.refs.hs.style.height="35rem"
            sessionStorage.setItem("hotList", JSON.stringify(data))
        } else {
            let data = await get_hot_api(pageIndex, pageSize);
            data = data.data
            this.setState({
                hotList: data
            })
            sessionStorage.setItem("hotList", JSON.stringify(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)