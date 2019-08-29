import { updateData } from "@actions/actionCreator";

const mapStateToProps = (state)=>({
    hot:state.hot
})

const mapDispatchToProps = (dispatch)=>({
    firstCreate(data){
        dispatch(updateData(data))
    }
})
export {
    mapStateToProps,
    mapDispatchToProps
}