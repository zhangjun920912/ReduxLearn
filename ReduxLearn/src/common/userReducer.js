/**
 * Created by zhangjunimust on 2018/6/29.
 */
import * as actionType from './actionType'
import { handleActions } from 'redux-actions'

const initialState = {isLogin:false};

export default handleActions({
    [actionType.USER_LOGIN]:(state,action)=>{
        return {...state,isLogin:true};
    },
    [actionType.USER_LOGINOUT]:(state,action)=>{
        alert(action.remind);
        return {...state,isLogin:false};
    },
},initialState)
