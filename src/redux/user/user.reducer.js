import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './userActionTypes'

const initialState = {
 loading :false,
 users : [],
 errors: ''
}

const user = (state=initialState, action) => {
 switch(action.type){
  case FETCH_USER_REQUEST : return {
   ...state,
   loading: true
  }
  case FETCH_USER_SUCCESS : return {
   ...state,
   loading: false,
   users: action.payload,
   errors: ''
  }
  case FETCH_USER_ERROR : return {
   ...state,
   loading: false,
   users: [],
   errors: action.payload
  }
  default : return state
 } 
}

export default user
