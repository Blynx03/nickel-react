import React from 'react';
import './points.css'


export const checkPoints = (warningColor, totalPoints) => {
  if (totalPoints <= 10) {
    warningColor.style.border = '1vw solid green';
  } else if (totalPoints > 10 && totalPoints <= 12) {
    warningColor.style.border = '1vw solid yellow';
    warningColor.style.color = 'black';
  } else if (totalPoints > 12 && totalPoints < 15) {
    warningColor.style.border = '1vw solid orange';
    warningColor.style.color = 'black'
  } else {
    warningColor.style.border = '1vw solid red';
  }
}

const Points = ({totalPoints}) => {

  return (
    <div className="point-container">
      <div className='total-point-label'>Total Nickel Points = </div>
      <label id='total' className='total-point'>{totalPoints}</label>

    </div>
  )


}

export default Points;

