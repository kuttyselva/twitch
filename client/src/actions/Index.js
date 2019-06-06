import streams from '../apis/streams'
import history from '../history'
export const signIn=(userID)=>{
    return{
        type:'SIGN_IN',
        payload:userID
    };
};
export const signOut=()=>{
    return{
        type:'SIGN_OUT'
    }
}
export const createStream = (formValue)=>async (dispatch,getState)=>{
    const {userID}=getState().auth;
    const resp=await streams.post('/streams',{...formValue,userID});
    dispatch({
        type:'CREATE_STREAM',
        payload:resp.data
    });
    history.push('/');
}

export const fetchStreams=()=> async dispatch=>{
    const resp=await streams.get('/streams');
    dispatch({type:'FETCH_STREAMS',payload:resp.data})
}
export const fetchStream=(id)=> async dispatch=>{
    const resp=await streams.get(`/streams/${id}`);
    dispatch({type:'FETCH_STREAM',payload:resp.data})
}
export const editStream=(id,formValue)=> async dispatch=>{
    const resp=await streams.patch(`/streams/${id}`,formValue);
    dispatch({type:'EDIT_STREAM',payload:resp.data});
    history.push('/');
}
export const deleteStream=(id)=> async dispatch=>{
    await streams.delete(`/streams/${id}`);
    dispatch({type:'DELETE_STREAM',payload:id});
    history.push('/');
}