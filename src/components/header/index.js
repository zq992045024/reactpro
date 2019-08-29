import React, { Component } from 'react'
import { HeaderWrapper } from "./styled"
import { NavLink } from "react-router-dom";
export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <div id="city">
                    <NavLink to="/city">
                        <span>北京</span>
                        <i className="iconfont">&#xe638;</i>
                    </NavLink>
                </div>
                <div id="search">
                    <NavLink to="/search">
                        <i className="iconfont">&#xe601;</i>
                        <span>搜索明星、演出、场馆</span>
                    </NavLink>
                </div>
                <div id="mine">
                    <NavLink to="/mine">
                        <i className="iconfont">&#xe504;</i>
                    </NavLink>
                </div>
            </HeaderWrapper>
        )
    }
}
