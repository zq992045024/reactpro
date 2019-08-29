import React, { Component, Fragment } from 'react'
import { CityList } from "./styled"
import { hot_city, sorted_city } from "@api/theater"
import { Link } from "react-router-dom"
import BScrollComponent from "@common/bscroll";
export default class City extends Component {
    constructor() {
        super();
        this.state = {
            hotlist: [],
            sortlist: []
        }
    }
    render() {
        let { hotlist, sortlist } = this.state
        // console.log(sortlist)
        return (
            <CityList>
                <div className="hot_title">
                    北京
                    <span>当前城市</span>
                </div>
                <BScrollComponent ref="bscroll">
                    <Fragment>
                        <div className="content">
                            {/* <!--热门城市--> */}
                            <div className="hot_city">
                                <div className="hot_city_list">
                                    <Link to="/home" >
                                    {
                                        hotlist.map((item, index) => (
                                            <div className="hot_city_name" key={index}>
                                                {item.name}
                                            </div>
                                        ))
                                    }
                                    </Link>
                                </div>
                            </div>
                            {/* <!--城市列表--> */}
                            <div className="city_list" ref="list">
                                {
                                    sortlist.map((item, index) => (
                                        <div className="city_list_item" key={index}>
                                            <div className="city_title_letter">{item.id}</div>
                                            <div className="city_list_name">
                                                <Link to="/home" >
                                                    {
                                                        item.list.map((itt, idd) => (
                                                            <div className="city_list_name_item" key={idd}>
                                                                {itt.name}
                                                            </div>
                                                        ))
                                                    }
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Fragment>
                </BScrollComponent>
                <div className="city_list_index">
                    {
                        sortlist.map((item, index) => (
                            <div className="index_item" key={index} id="e" onClick={this.handleClick.bind(this, index)}>
                                {item.id}
                            </div>
                        ))
                    }
                </div>
            </CityList>
        )
    }
    handleClick(index) {
        let arr = document.querySelectorAll(".city_list_item")
        // console.log(this)
        this.refs.bscroll.scroll.scrollTo(0, -(arr[index].offsetTop - 45), 500)
        // console.log(arr[index].offsetTop)
    }
    componentDidMount() {
        this.handleCityData();
    }
    async handleCityData() {
        let hotdata = await hot_city();
        let sortdata = await sorted_city();
        var arr = []
        for (let i in sortdata.data) {
            arr.push(sortdata.data[i]);
        }
        this.setState({
            hotlist: hotdata.data.hot_city_List,
            sortlist: arr
        })
    }
}
