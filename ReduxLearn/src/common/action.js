/**
 * Created by zhangjunimust on 2018/6/29.
 */
import {USER_LOGIN,USER_LOGINOUT} from './actionType'

export function loginUser(){
    return {
        type:USER_LOGIN,
    }
}

export function loginoutUser(remindText){
    return{
        type:USER_LOGINOUT,
        remind:remindText
    }
}