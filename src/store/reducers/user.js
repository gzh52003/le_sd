// 刷新时,先从locastorage中获取用户信息
let currentUser = localStorage.getItem('currentUser')

try {
    currentUser = JSON.parse(currentUser) || {}
} catch (error) {
    currentUser = {}    
}


const initState = {
    ...currentUser
}
function reducer(state=initState,action){
    switch(action.tpye){
        case 'login':
            localStorage.setItem('cuurentUser',JSON.stringify(action.user))
            return action.user
        case 'logout':
            localStorage.removeItem('currentUser')
            return {}

        case 'update_user':
            return {
                ...state,
                ...action.user
            }
        default:
            return state
    }
}

export default reducer