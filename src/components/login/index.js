import React, { Component } from 'react'

export default class Logins extends Component {
    render() {
        return (
            <div className="Login">
                <h3>用户登录</h3>
                 <form id="login">
                     <div id="users">
                         <input type="text" id="login_username" placeholder="请输入用户名"/>
                     </div> 
                     <div id="passwords">
                         <input type="text" id="login_password" placeholder="请输入密码"/>
                     </div> 
                     <button type="submit" onClick={this.props.getUserInfo}>
                         登录
                     </button>
                     <div className="gotoRegister"  onClick={this.props.gotoRegister}>
                         没有账号？去注册
                     </div>
                 </form>   
                </div>
                )
            }
        }
