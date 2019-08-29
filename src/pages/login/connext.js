// import { users_register_api,users_login_api} from "@api/play"
import {changeUserStuts,usersAsyncAction,changeGoHomeb} from "@actions/actionCreator";

export const mapStateProps=(state)=>({
        users:state.users
})


export const mapDispatchToProps = (dispatch)=>({
    
    changeStuts(type) {
        if(type==='login'){
            dispatch(changeUserStuts(type))
        }else{
            dispatch(changeUserStuts(type))
        }
    },
    async getInfo(type,e){
        e.preventDefault();
        let username = document.getElementById("login_username").value
        let password = document.getElementById("login_password").value
        let userObj = {
            username,
            password
        }
        if(type==='login'){
            dispatch(usersAsyncAction(userObj,type))
        }else{
            dispatch(usersAsyncAction(userObj,type))
        }
        document.getElementById("login_username").value="";
        document.getElementById("login_password").value="";
    },
    changeGoHome(){
        dispatch(changeGoHomeb())
    }
})

