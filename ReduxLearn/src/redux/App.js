/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React,{Component} from 'react'
import App from '../common/app'
import {Provider} from 'react-redux'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import userReducer from '../common/userReducer'
//创建组合reducer
const rootReducer=combineReducers({
    user:userReducer,
});
//创建store
const store = createStore(rootReducer)


const MainClass = (props) =>{
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

AppMain = MainClass;

export default AppMain;

