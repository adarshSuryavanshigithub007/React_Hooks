import React, { useContext } from 'react'

import { useAppContext } from './Context/AppContextProvider'

const Profile = () => {
    const {count} = useAppContext()
    const {user} = useAppContext()
    console.log(user?.name)
  return (
    <div>
        <h1>
            my profile : {user?.name} { count}
        </h1>
    </div>
  )
}

export default Profile