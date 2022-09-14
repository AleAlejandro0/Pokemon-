import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useSelector} from 'react-redux'

const ProtectedRoutes = () => {
  
  const masterName = useSelector(state => state.masterName)
 
    if(masterName){
      return <Outlet/>
    }else{
      return <Navigate to="/"/>
    }
}

export default ProtectedRoutes

