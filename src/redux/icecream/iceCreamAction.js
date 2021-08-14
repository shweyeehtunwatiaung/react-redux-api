import { BUY_ICECREAM } from './iceCreamActionTypes'

export const buyIceCream = (number = 1) => {
 return {
  type: BUY_ICECREAM,
  payload: number
 }
}
