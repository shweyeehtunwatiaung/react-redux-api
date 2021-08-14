import {BUY_PIZZA} from './pizzaActionType'

const initialState = {
 numOfPizzas : 30
}

const pizzaReducer = (state=initialState,action) => {
 switch(action.type){
  case BUY_PIZZA: return{
   ...state,
   numOfPizzas : state.numOfPizzas - 1
  }
  default :return state
 }
}

export default pizzaReducer
