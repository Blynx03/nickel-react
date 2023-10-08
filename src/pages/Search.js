import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { checkPoints } from '../components/Points';
import './search-result.css'


const Search = ({foodData, chosenFood, setChosenFood, totalPoints, setTotalPoints}) => {
    const [ input, setInput ] = useState('');
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    })

    // Extracting items that matches the input
    const regex = new RegExp(`\w*?\s?${input}\s?\w*`, `gi`);
    let foodChoices = [];
    

    // Storing list of foods based on search input
    foodData.map((food) => {
        if (regex.test(food.item)) {
            foodChoices.push(food);
        }
    })

    function handleClick(food) {
        const activateLogBtn = document.querySelector('.result-bottom-container');
        activateLogBtn.style.visibility = 'visible';

        setChosenFood([...chosenFood, {...food, id: uuidv4()}])
        setTotalPoints(totalPoints += food.point);

        const warningColor = document.getElementById('total');
        checkPoints(warningColor, totalPoints);
    }


    let searchList = foodChoices.map((food, index) => {
        return (
           <li className='search-choices' key={index} onClick={(() => handleClick(food))}> {food.item} </li>
        )
    })

    return (
        <>
            <form className="search-form">
                <div className='search-container'>
                    <input 
                        className='search-input' 
                        type='search' 
                        ref={inputRef} 
                        placeholder='Search Food...' 
                        onChange={(e) => 
                        setInput(e.target.value)}>
                    </input>
                    <div className='search-icon-container'>
                        <span className='material-symbols-outlined search-icon'>Search</span>
                    </div>
                </div>
                <ul className="search-list">
                    {searchList}
                </ul>
            </form>
        </>
    )
}

export default Search;