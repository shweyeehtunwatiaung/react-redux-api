import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
 const [number, setNumber] = useState(1)

 const numOfCakes= useSelector(state => state.cake.numOfCakes)
 const dispatch = useDispatch()

 return (
  <div>
   <h2> Number of Cake = { numOfCakes } </h2>
   <input type='text' value={number} onChange={e=> setNumber(e.target.value)} />
   <button onClick = { (number) => dispatch(buyCake(number))}>Buy {number} Cake</button>
  </div>
 )
}

export default HooksCakeContainer
