import React, { Component } from 'react'
import { LoginWrapper } from "./styled";
import Logins from "@components/login"
import Register from "@components/register"
import { connect } from "react-redux"
import { mapStateProps,mapDispatchToProps } from "./connext";
class Login extends Component {
    
    render() {
        let {isLogin} = this.props.users
        return (
            <LoginWrapper>
                {isLogin ? <Logins gotoRegister={this.props.changeStuts.bind(this, 'login')} getUserInfo={this.props.getInfo.bind(this,'login')}/> 
                : <Register changeStuts={this.props.changeStuts.bind(this, 'register')} getUserInfo={this.props.getInfo.bind(this, 'register')}/>}
            </LoginWrapper> 
        )
    }
    componentDidUpdate(){
        let {isGotoHome} = this.props.users;
        if(isGotoHome){
           this.props.history.push({pathname:"/home"})
           this.props.changeGoHome();
        }
    }
}

export default connect(mapStateProps,mapDispatchToProps)(Login)