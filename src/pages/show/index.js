import React, { Component } from 'react'
import { show_api } from "@api/play"
import { MainWrapper } from "./styled"
export default class Mine extends Component {
    constructor() {
        super()
        this.state = {
            flag: false,
            showList: []
        }
    }
    render() {
        let { showList } = this.state;
        return (
            <MainWrapper>
                <div className="filter">
                    <div className="filter_sort">
                        <div className="sort" onClick={this.chooseHandler.bind(this)}>综合排序</div>
                        <div className="time">选择时间</div>
                    </div>
                    <div className="choose_sort" ref="choose">
                        <li onClick={this.changeSort.bind(this,1)}>综合排序</li>
                        <li onClick={this.changeSort.bind(this,2)}>最新优先</li>
                        <li onClick={this.changeSort.bind(this,3)}>价格最低</li>
                        <li onClick={this.changeSort.bind(this,4)}>好评优先</li>
                    </div>
                </div>
                <div className="show_main">
                    {
                        showList.map((item, index) => (
                            <div className="show_list" key={index} onClick={this.gotoDetial.bind(this,item)}>
                                <div className="photos">
                                    <img src={item.poster} alt="" />
                                </div>
                                <div className="info">
                                    <div className="info_title">
                                        <span>[北京]</span>
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="info_address">
                                        <span>{item.timeRange}</span>
                                        <span>|</span>
                                        <span>{item.venueName}</span>
                                    </div>
                                    <div className="info_rank">
                                        评分：{item.rank}
                                    </div>
                                    <div className="info_price">
                                        <span>{item.lowPrice}</span>
                                        <span>元起</span>
                                    </div>
                                    <div className="info_sign">
                                        “{item.desc}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </MainWrapper>
        )
    }
    componentDidMount() {
        if (!sessionStorage.getItem("shopList")) {
            this.getData()
        }else{
            this.setState({
                showList:JSON.parse(sessionStorage.getItem("shopList"))
            })
        }
    }
    chooseHandler() {
        let { flag } = this.state;
        if (!flag) {
            this.refs.choose.style.display = "block"
            this.setState({
                flag: !flag
            })
        } else {
            this.refs.choose.style.display = "none";
            this.setState({
                flag: !flag
            })
        }
    }
    async getData(pageIndex,categoryId,time,sort){
        let data = await show_api(pageIndex,categoryId,time,sort);
            data = data.data
            this.setState({
                showList: data
            })
            sessionStorage.setItem("shopList", JSON.stringify(data))
    }
    changeSort(type){
        let { flag } = this.state;
        if (!flag) {
            this.refs.choose.style.display = "block"
            this.setState({
                flag: !flag
            })
        } else {
            this.refs.choose.style.display = "none";
            this.setState({
                flag: !flag
            })
        }
        this.getData(1,1,"",type)
    }
    gotoDetial(info){
        if(!info.rank){
            info.rank='暂无评分'
        }
        console.log(info.events[0].id)
        this.props.history.push({pathname:"/detial"+'/'+info.events[0].id+'/'+info.name+'/'+info.timeRange+'/'+info.venueName+'/'+info.rank+'/'+info.lowPrice+"/"+info.poster.substr(31)})
    }
}
