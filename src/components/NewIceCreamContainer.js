import React,{ useState } from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

const NewIceCreamContainer = (props) => {
 const [number, setNumber] = useState(1)

 return (
  <div>
   <h1>Number of Icecream- {props.numOfIceCreams} </h1>
   <input type="text" value={ number } onChange={(e)=> setNumber(e.target.value)} />
   <button onClick={ () => props.buyIceCream(number) }>Click</button> // 
  </div>
 )
}
const mapStateToProps = state => {
 return{
  numOfIceCreams: state.iceCream.numOfIceCreams
 }
}

const mapDispatchToProps = dispatch => {
 return{
  buyIceCream:  (number) =>  dispatch(buyIceCream(number))
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewIceCreamContainer)

