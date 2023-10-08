import React from 'react'
import './error.css'

const HandleError = ({err}) => {
    console.log('handle error rendered')
    const errMsg = document.querySelector('.addlog-content-container')
    // errMsg.style.filter = 'blur(3px)';
    if (err == 0) {
        return ( 
            <div className='error-container'>No food selected.</div> 
        )
    } else {
        return (
            <div className='error-container'>
                `${err} Field Required`
            </div>
        )
    }
}

export default HandleError