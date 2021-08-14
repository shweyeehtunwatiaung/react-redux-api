import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './userActionTypes'
import axios from 'axios'

export const fetchUsersRequest = () => {
 return {
  type: FETCH_USER_REQUEST
 }
}

const fetchUsersSuccess = users => {
 return {
  type: FETCH_USER_SUCCESS,
  payload :users
 }
}

const fetchUsersFailure = error => {
 return {
  type: FETCH_USER_ERROR,
  payload : error
 }
}

export const fetchUsers =() =>{
 return (dispatch) => {
  dispatch(fetchUsersRequest)
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response=>{
   const users = response.data
   dispatch(fetchUsersSuccess(users))
  })
  .catch(error=>{
   const errorMsg= error.message
   dispatch(fetchUsersFailure)
  })
 }
}