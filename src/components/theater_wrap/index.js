import React, { Component } from 'react'
import { theater_wrap } from "@api/theater"
import { TheaterWraper } from "./styled"
import BScrollComponent from "@common/bscroll";
import {Link} from "react-router-dom"
import Header from "@common/headBar/header.js"
export default class TheaterWrap extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    render() {
        let { list } = this.state;
        return (
          
            <TheaterWraper>
               <Header title='剧院'/>
                {/* <div className="theater-head">
                    <header className="head_nav">
                        <h3 className="title text-single">剧院</h3>
                    </header>
                </div> */}
                <div className="theater_body">
                    <div className="wrapper">
                        <BScrollComponent ref="bscroll">
                        <div className="content">
                            {
                                list.map((item, index) => (
                                    <ul className="theater_ul" key={index}>
                                        <li className="theater_li">
                                            <div className="theater-info-shows">
                                                <div className="theater-info">
                                                    <Link to={{ pathname: "/details", query: { id: item.id, name: item.name } }}>
                                                        <div className="info_img">
                                                            <img src={item.pic} alt="" />
                                                        </div>
                                                        <div className="info_title">
                                                            <h5>{item.name}</h5>
                                                            <p>{item.count}场在售演出</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="theater-shows">
                                                    <div className="swiper-container">
                                                        <BScrollComponent>
                                                            <ul>
                                                                {
                                                                    item.showList.map((info, idd) => (
                                                                        <li key={idd}>
                                                                            <h6>{info.show_time}</h6>
                                                                            <span></span>
                                                                            <a href="http://localhost:3000/#/theater">
                                                                                <img src={info.pic} alt="" />
                                                                            </a>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </BScrollComponent>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                ))
                            }
                        </div>
                        </BScrollComponent>
                    </div>
                </div>
            </TheaterWraper>
        )
    }
    componentDidMount() {
        this.handleTheaterWrapData();
    }
    async handleTheaterWrapData() {
        let data = await theater_wrap();
        this.setState({
            list: data.data.theatre_list,
        })
    }
    
}
