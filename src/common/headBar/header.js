import React, { Component } from 'react'
// import Wrapper from "./headHoc"
import {Header} from "./styled"
export default class header extends Component {
    
    render() {
        console.log(this.props)
        return (
            <Header>
                <div className="iconfont" onClick={this.handleBack.bind(this)}>&#xe6a2;</div>
                <h2>{this.props.title}</h2>
            </Header>
            
        )
    }
    handleBack(){
        // this.props.history.to({ pathname: '/home' });
    }
}
// this.props.history.push({ pathname: '/home', state: { datagroupsperson } });
 //Wrapper(header)('title')
