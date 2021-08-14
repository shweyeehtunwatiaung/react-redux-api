import { useSelector, useDispatch } from "react-redux"
import { buyPizza } from "../redux"

const HookPizzaContainer = () => {
 const pizza = useSelector(state => state.pizza.numOfPizzas)
 const dispatch = useDispatch()

 return (
  <div>
   <h1>Number of Pizza = { pizza }</h1>
   <button onClick = { () => dispatch(buyPizza())}>Buy Pizza</button>
  </div>
 )
}

export default HookPizzaContainer
