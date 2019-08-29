import React, { Component } from 'react'
import Header from "@common/headBar/header.js"
import {Collect} from "./styled"
export default class Ticket extends Component {
    render() {
        return (
            <Collect>
                <Header title='票夹'/>
                <div className="collect">
                    <div className="collect-list">
                        <div className="list-img">
                            <img src="https://img.piaoniu.com/poster/2551d1f8613dfce93e89f9b60979bfeedfd7354a.jpg?imageView2/2/w/76/h/102/format/jpg/q/60" alt="" />
                        </div>
                        <div className="list-info">
                            <h3>《巴黎圣母院》</h3>
                            <p>五棵松体育馆</p>
                            <div className="info_">
                                <span>2019.08.15 - 09.1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Collect>
        )
    }
}
