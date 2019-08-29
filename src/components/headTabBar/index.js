import React, { Component } from 'react'
import { HeadTabWrapper } from "./styled";
import { headTabBar } from "@router";
import { NavLink } from "react-router-dom";
export default class HeadTabBar extends Component {
    render() {
        return (
            <HeadTabWrapper>
                <ul>
                    {
                        headTabBar.map((item,index)=>(
                            <li key={index}>
                                <NavLink to={item.path}>
                                    <i className="iconfont">{item.icon}</i>
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </HeadTabWrapper>
        )
    }
}
