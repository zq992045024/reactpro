import React, { Component,Fragment } from 'react'
import { routeConfig } from "@router"
import { Switch, Redirect } from "react-router-dom";
import BaseRoute from "@common/baseRoute";
import HeadTabBar from "@components/headTabBar";
import Header from "@components/header"
export default class App extends Component {
  state={
    info:{meta:{

    }}
  }
  render() {
    return (
      <Fragment>
        {this.state.info.meta.headerFlag?<Header />:""}
        {this.state.info.meta.headFlag?<HeadTabBar />:""}
        
        <Switch>
          <Redirect from="/" to="/home" exact />
          {
            routeConfig.map((item, index) => (
              <BaseRoute key={index} {...item}  handler={this.getInfo.bind(this)}/>
            ))
          }
        </Switch>
      </Fragment>
    )
  }
  getInfo(info){
    this.setState({
      info:info
    })
  }
}

