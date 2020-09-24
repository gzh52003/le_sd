const initState = {
    goodslist:[],
    totalPrice:0
}

function reducer(state=initState,action){
    switch(action.type){

        // {type:'add-to_cart',goods}
        case 'add_to_cart':
            return{
                ...state,
                goodslist:[action.goods,...state.goodslist]
            }

        // {type:'remove_from_cart',id}    
        case 'remove_from_cart':
            return {
                ...state,
                goodslist:state.goodslist.filter(item=>item.id!==action.id)
            }

        // {type:'clear_cart'}
        case 'clear_cart':
            return {
                ...state,
                goodslist:[]
            }
        default:
            return state
    }
}

export default reducer