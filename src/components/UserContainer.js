import React,{ useEffect } from 'react'
import {connect} from 'react-redux' 
import {fetchUsers} from '../redux'

const UserContainer = ({userData, fetchUsers}) => {
 useEffect(()=>{
  fetchUsers()
 },[])
 
 
 return userData.loading ? (
  <h2>Loading</h2>
 ):userData.error ?(
  <h2>{userData.error}</h2>
 ): (
  <div>
   <h2>Users</h2>
   <div className="container">
     <div className="row">
       <div className="col-12">
        <div>
          {userData?.users?.length > 0 &&
             userData.users.map(user=>
              <p key={user.id}>{user.name}</p>)
          }
        </div>
       </div>
     </div>
   </div>
  </div>
 )
}

const matchStateToProps = state =>{
 return{
  userData : state.user
 }
}

const matchDispatchToProps = dispatch => {
 return {
  fetchUsers : () => dispatch(fetchUsers())
 }
}

export default connect(matchStateToProps,matchDispatchToProps) (UserContainer)
