// import {createStore} from 'redux'


export const createStore = function(reducer){
    let state = reducer()
    let listeners = []
    const getState = function(){
        return state
    }
    const dispatch = function(action){
        state = reducer(state,action)
        // 发布
        listeners.forEach(listener=>listener())
    }
    const subscribe = function(fn){
        //订阅
        listeners.push(fn)
    }
    // 替换reducer
    const replaceReducer = function(newReducer){
        reducer = newReducer
    }
    return {
        getState,
        dispatch,
        subscribe,
        replaceReducer
    }
}