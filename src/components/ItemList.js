import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid';
import { checkPoints } from './Points';


const ItemList = ({chosenFood, setChosenFood, totalPoints, setTotalPoints}) => {

    const handleDelete = (id, point) => {
        setTotalPoints(prevPoint => prevPoint - point);
        setChosenFood(chosenFood.filter((food) => food.id !== id))

        const warningColor = document.querySelector('.total-point');
        checkPoints(warningColor, totalPoints);
        
        const logBtn = document.querySelector('.choices-log-btn');
        logBtn.style.visibility = chosenFood.length > 0 ? 'visible' : 'hidden';
        const activateLogBtn = document.querySelector('.result-bottom-container');
        activateLogBtn.style.visibility = chosenFood.length > 0 ? 'visible' : 'hidden';
    }

    return chosenFood.map((food) => (
            <div className='chosen-container' key={uuidv4()} onClick={() => handleDelete(food.id, food.point)}>
                <li className='result-food' >
                    <label className="result-label">{food.item}</label>
                    <div className="result-point">{food.point}</div>
                    <FaTrashAlt 
                        className='delete-icon'
                        role='button'
                        tabIndex='0'
                        
                    />
                </li>
            </div>
        ))
}

export default ItemList;
