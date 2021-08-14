import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './icecream/iceCreamReducer'
import pizzaReducer from './pizza/pizza.reducer'
import user from './user/user.reducer'

const rootReducer = combineReducers({
 cake:cakeReducer,
 iceCream: iceCreamReducer,
 pizza: pizzaReducer,
 user
})

export default rootReducer