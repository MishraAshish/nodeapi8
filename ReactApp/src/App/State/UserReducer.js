import * as ActionTypes from "./ActionTypes"; //alias import
//we have two things in every reducer(state)
//initialize the state
//update the state per dispatched action (generates new state)

const INITIAL_STATE ={
    user: {
        userName: "",
        password: "",
        street: "",
        mobile: "",
        _id:""
    },
    loading: false
}

//whenever called reducer will always return a state
export default function userReducer(state=INITIAL_STATE, action) {

    switch (action.type) {
        case ActionTypes.AddUserToStore:
            console.log("Payload Address", action.payload.user);
                //...state = {user:user,trainingProduct:trainingProduct}
                return {...state, user: action.payload.user}
    
        default:
            return state
    }

}