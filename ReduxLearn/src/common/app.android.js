/**
 * Created by zhangjunimust on 2018/6/29.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux'
import * as actions from './action'
var fullScreenWidth = Dimensions.get("window").width;
var fullScreenHeight = Dimensions.get("window").height;
import {USER_LOGIN,USER_LOGINOUT} from './actionType'

class App extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <View style={{flex:1}}>
                <View style={{height:200, width:fullScreenWidth,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:this.props.isLogin?"green":"red"}}>{this.props.isLogin?"已登陆":"未登录"}</Text>
                </View>
                <View style={{flex:1,width:fullScreenWidth,justifyContent:'center',alignItems:'center'}}>
                   <TouchableOpacity onPress={()=>{this.props.userLogin()}}>
                       <View style={{height:44,width:fullScreenWidth*0.7,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                           <Text style={{color:'#fff'}}>点击登录</Text>
                       </View>
                   </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.props.userLoginOut("登出成功啦")}}>
                        <View  style={{height:44,width:fullScreenWidth*0.7,backgroundColor:'red',justifyContent:'center',alignItems:'center',marginTop:40}}>
                            <Text style={{color:'#fff'}}>点击登出</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

export default connect(
    (state)=>({
        isLogin:state.user.isLogin,
    }),
    (dispatch)=>({
        userLogin:()=>dispatch(actions.loginUser()),
        userLoginOut:(text)=>dispatch(actions.loginoutUser(text))
    })
)(App);