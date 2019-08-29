import { addLike } from "@actions/actionCreator";
export const mapStateProps = (state) =>({
        users:state.users
})

export const mapDispatchProps = (dispatch) =>({
    addLikeList(info){
        if(!sessionStorage.getItem('token')){
            this.props.history.push('/login')
            return;
        }
        dispatch(addLike(info))
    }
})