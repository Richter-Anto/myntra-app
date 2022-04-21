import React, { useContext } from 'react'
import { NetworkContext } from '../api/ContextApi'

const UpdateProfile = () => {
    let value = useContext(NetworkContext)
  return (
      <div>
          <h3>{ value.network}</h3>
          <h4>{ value.location}</h4>
    </div>
  )
}

export default UpdateProfile