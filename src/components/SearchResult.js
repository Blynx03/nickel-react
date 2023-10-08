import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import ItemList from './ItemList'
import AddLog from './AddLog';

const SearchResult = ({chosenFood, setChosenFood, totalPoints, setTotalPoints, handleAddToLog, logDate, setLogDate}) => {
    let subRoot = null;
    // const subRoot = ReactDOM.createRoot(document.querySelector('.content-container-for-addlog'));
    const handleAdd = () => {
        if(!subRoot) {
            subRoot = ReactDOM.createRoot(document.querySelector('.content-container-for-addlog'))
        }
        subRoot.render(<StrictMode>
                        <AddLog 
                            chosenFood={chosenFood}
                            setChosenFood={setChosenFood}
                            totalPoints={totalPoints}
                            setTotalPoints={setTotalPoints}
                            handleAddToLog={handleAddToLog}
                            logDate={logDate}
                            setLogDate={setLogDate}
                            page='search'
                        />
                    </StrictMode>)
    }


    return (
        <form className="result-form">
            <div className="result-title">
                Food Taken
            </div>
            <ul className="result-list-container"> 
                <ItemList
                    chosenFood={chosenFood}
                    setChosenFood={setChosenFood}
                    totalPoints={totalPoints}
                    setTotalPoints={setTotalPoints}
                />
             </ul>
            <div className='result-bottom-container'>
                <button type='button' className='choices-log-btn' onClick={handleAdd}>
                    Add to Log
                </button>
                <div className='result-total-points'>
                    Total Points: &nbsp;&nbsp;&nbsp;{totalPoints}
                </div>
            </div>
           
        </form>
    )
}

export default SearchResult;

