import React from 'react'
import FullName from './profile/FullName'
import ProfilPhoto from './profile/ProfilPhoto'
import Address from './profile/Address'
import './Main.css'
const Main = () => {
    return (
        <div>
           <FullName/>
           <ProfilPhoto/>
           <Address/> 
        </div>
    )
}

export default Main
