import React, { Component,} from 'react'
import {Route,Link} from "react-router-dom"
import { theater_list } from "@api/theater"
import {Barlist} from "./styled"
export default class barlist extends Component {
    render() {
        return (
            <Barlist>
                <div className="header">
                    <div>
                        <Route path="/home">返回</Route>
                        <div>
                            <i className="iconfont">&#xe616;</i>
                           <Link to="/search"><input type="text" placeholder="但所明星、演出、场馆"/></Link> 
                        </div>
                    </div>
                </div>
                <div className="bar">
                    
                </div>
                <div className="ul-list">
                    <ul>
                        <li>

                        </li>
                    </ul>
                </div>
            </Barlist>
        )
    }
    componentDidMount() {
        this.handleTheaterList()
    }
    async handleTheaterList(){
        let data = await theater_list();
        console.log(data)
    }
}
