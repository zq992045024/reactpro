import { handleActions } from "redux-actions";

const defaultState = {
    username: "",
    password: "",
    isLogin: false,
    isGotoHome: false,
    likeList: [],
    likeNameList:[]
}


export default handleActions({
    CHANGE_STUTS: (state, action) => {
        let userObj = Object.assign({}, state);
        if (action.payload === 'register') {
            userObj.isLogin = true;
        } else {
            userObj.isLogin = false;
        }
        return userObj;
    },
    LOGIN_REGISTER: (state, action) => {
        let userObj = Object.assign({}, state);
        if (action.payload.type === 'register') {
            alert(action.payload.info)
            userObj.isLogin = true;
            return userObj
        } else if (action.payload.type === 'login') {
            if (action.payload.info === '登陆成功') {
                alert(action.payload.info);
                userObj.username = action.payload.username;
                sessionStorage.setItem("username", userObj.username)
                sessionStorage.setItem('token', action.payload.token)
                userObj.isGotoHome = true;
            } else if (action.payload.info === "密码错误") {
                alert(action.payload.info);
            } else if (action.payload.info === "用户名不存在") {
                alert(action.payload.info);
            }
        }
        console.log(userObj)
        return userObj
    },
    CHANGE_HOME: (state) => {
        let userObj = Object.assign({}, state);
        userObj.isGotoHome = false;
        return userObj;
    },
    ADD_LIKE: (state, action) => {
        let userObj = Object.assign({}, state);
        let list = userObj.likeList;
        let obj = action.payload
        let name = action.payload.name;
        let names = userObj.likeNameList
        console.log(name)
        if (names.includes(name)){
            let indexs = names.indexOf(name)
            userObj.likeNameList.splice(indexs,1)
            let index = list.indexOf(obj)
            userObj.likeList.splice(index,1)
        }else{
            userObj.likeNameList.push(name)
            userObj.likeList.push(obj)
        }
        return userObj;
    }
}, defaultState)


///detial/Click#15%202019巡演%20-%20Get%20Click#15/2019.09.20%20-%2009.21/糖果TANGO三层/暂无评分/592/b13cd50f9ac9628b9ec4f6c32c92839ae8a2bc05.jpg
///detial/2019潘玮柏创使者Coming%20home巡回演唱会%20北京站/2019.10.13%2019:00/凯迪拉克中心（原五棵松体育馆）/9.3/505/1bedc1790d20a51f1540d31e39851072915d3753.jpg