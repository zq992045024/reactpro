import { handleActions } from "redux-actions";

const defaultState = {
    hotList:[],
    likeList:[]
}


export default handleActions({
    GET_HOT_API:(state,action)=>{
        let hotNewList = Object.assign({},state);
        
        return hotNewList;
    }
},defaultState)