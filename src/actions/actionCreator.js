import { createAction } from "redux-actions";
import { users_register_api,users_login_api} from "@api/play"


export const updateData = createAction("GET_HOT_API",(val)=>val)

export const changeUserStuts = createAction("CHANGE_STUTS",(val)=>val)

export const usersLoginAndRegister = createAction("LOGIN_REGISTER",(val)=>val)

export const changeGoHomeb = createAction("CHANGE_HOME")

export const addLike = createAction("ADD_LIKE")

export const usersAsyncAction = (obj,type) =>{
    if(type==="register"){
        return async (dispatch)=>{
            let data = await users_register_api(obj.username,obj.password);
            obj.info = data.data.info;
            obj.type = type
            dispatch(usersLoginAndRegister(obj))
        }
    }else{
        return async (dispatch)=>{
            let data = await users_login_api(obj.username,obj.password);
            obj.info = data.data.info
            obj.type = type
            dispatch(usersLoginAndRegister(obj))
        }
    }
}
