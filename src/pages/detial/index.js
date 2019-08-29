import React, { Component } from 'react'
import { DetialWrapper } from "./styled"
import BuyTic from "@common/buyTickey"
import { connect } from "react-redux";
import { mapStateProps,mapDispatchProps } from "./mapState";
class Detial extends Component {
    render() {
        let detialInfo =  this.props.match.params
        let img = "https://img.piaoniu.com/poster/"+detialInfo.img
        detialInfo.poster = img;
        let {likeNameList} = this.props.users
        return (
            <DetialWrapper>
                <div className="back">
                    演出详情
                </div>
                <div className="detial_main">
                    <div className="header">
                        <div className="pic_bg" style={{ background: 'url(' + detialInfo.poster + ')' }}></div>
                        <div className="headerTitle">
                            <div className="headertop">
                                <img src={detialInfo.poster} alt="" />
                                <div className="mainTitle">
                                    <h4>{detialInfo.name}</h4>
                                    <p>{detialInfo.rank}</p>
                                    <span>{detialInfo.lowPrice}</span>
                                    <span>元起</span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="likes" onClick={this.props.addLikeList.bind(this,detialInfo)}>
                                    <i className={likeNameList.includes(detialInfo.name)?'iconfont active':'iconfont actives'}>&#xe7e8;</i>
                                    <span>想看</span>
                                </div>
                                <div className="my_commont">
                                    <i className="iconfont">&#xe502;</i>
                                    <span>评论</span>
                                </div>
                            </div>
                            <div className="headerBottom">
                                <div className="dates">
                                    <span>{detialInfo.timeRange}</span>
                                </div>
                                <div className="place">
                                    <span>{detialInfo.venueName}</span>
                                </div>
                                <div className="buyTic">
                                    <span>购票须知</span>
                                </div>
                                <div className="dates">
                                    <span>平台保障</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BuyTic {...this.props}/>
            </DetialWrapper>
        )
    }
    componentDidMount() {
        let info = this.props.match.params
        let img = "https://img.piaoniu.com/poster/"+info.img
        info.poster = img;
        this.setState({
            detialInfo:info
        })
    }
   /*  componentDidUpdate(){
        let {likeList} = this.props.users;
        console.log(likeList)
        let {detialInfo} = this.state
        if(likeList.includes(detialInfo)){
            this.refs.icon.style.color='red'
        }else{
            this.refs.icon.style.color='white'
        }
    } */
}
export default connect(mapStateProps,mapDispatchProps)(Detial)