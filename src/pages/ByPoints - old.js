import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Points from '../components/Points';
import AddLog from '../components/AddLog';
import { pOne, pTwo, pThree, pFour, pFive, pSix, pSeven, pEight, pNine, pTen  } from '../components/foodData';
import { checkPoints } from '../components/Points';
import './bypoints.css'
import { v4 as uuidv4 } from 'uuid';
import foodData from '../components/foodData';
import { recomposeColor } from '@mui/material';
import { FaRecordVinyl } from 'react-icons/fa';



const ByPoints = ({chosenFood, setChosenFood, totalPoints, setTotalPoints}) => {
  let [ chosenItems, setChosenItems ] = useState([{
    id: 0,
    food: '',
    point: 0,
    active: true
  }]);

  // let foodsPerPointRecords = [
  //   {
  //     foodRecord: pOne,
  //     name: 'one-'
  //   },
  //   { foodRecord: pTwo,
  //     name: 'two-'
  //   },
  //   { foodRecord: pThree,
  //     name: 'three-'
  //   },
  //   { foodRecord: pFour,
  //     name: 'four-'
  //   },
  //   { foodRecord: pFive,
  //     name: 'five-'
  //   },
  //   { foodRecord: pSix,
  //     name: 'six-'
  //   },
  //   { foodRecord: pSeven,
  //     name: 'seven-'
  //   },
  //   { foodRecord: pEight,
  //     name: 'eight-'
  //   },
  //   { foodRecord: pNine,
  //     name: 'nine-'
  //   },
  //   { foodRecord: pTen,
  //     name: 'ten-'
  //   }];

    let [ foodsPerPointRecords, setFoodsPerPointRecords ] = useState([
      {
        foodRecord: pOne,
        name: 'one-'
      },
      { foodRecord: pTwo,
        name: 'two-'
      },
      { foodRecord: pThree,
        name: 'three-'
      },
      { foodRecord: pFour,
        name: 'four-'
      },
      { foodRecord: pFive,
        name: 'five-'
      },
      { foodRecord: pSix,
        name: 'six-'
      },
      { foodRecord: pSeven,
        name: 'seven-'
      },
      { foodRecord: pEight,
        name: 'eight-'
      },
      { foodRecord: pNine,
        name: 'nine-'
      },
      { foodRecord: pTen,
        name: 'ten-'
      }])

  const [ byPointChoices, setByPointChoices ] = useState([
    {
      id: 0,
      food: '',
      point: 0,
      active: true
    }
  ]);

  // const [ byPointChoices, setByPointChoices ] = useState(JSON.parse(localStorage.getItem('saveditems')));
  // chosenItems = JSON.parse(localStorage.getItem('saveditems'));



  function styleChoices(idValue, active) {
    let styleChoices = document.getElementById(idValue);
    if (active === false) {
      styleChoices.style.textDecoration = 'underline';
      styleChoices.style.fontWeight = 'bold';
      styleChoices.style.color = 'tomato';
    } else {
      styleChoices.style.textDecoration = 'none';
      styleChoices.style.fontWeight = 'normal';
      styleChoices.style.color = 'black';
    }
  }

  // if (chosenFood.length > 0) {
    console.log(foodsPerPointRecords)
  //   chosenFood.map(({item}) => foodsPerPointRecords.includes(item)
  // }

  // function handleChoice(e, point, active, foodRecord, idValue, index) {
  //   e.preventDefault();
  //   styleChoices(idValue, active);
  //   const warningColor = document.getElementById('total');
    
  //   if (active === false) {
  //     setCounter(counter += point);
  //   } else {
  //     setCounter(counter -= point);
  //   }
  //   foodRecord[index].active = !active;

  //   checkPoints(warningColor, counter);
  //   // localStorage.setItem('saveditems', JSON.stringify(chosenItems));
  // }


  function handleChoice(e, point, active, foodRecord, idValue, index) {
    e.preventDefault();
    console.log(e.target.innerText)
    styleChoices(idValue, active);
    const warningColor = document.getElementById('total');
    
    if (active === false) {
      setTotalPoints(totalPoints += point);
    } else {
      setTotalPoints(totalPoints -= point);
    }
    foodRecord[index].active = !active;

    checkPoints(warningColor, totalPoints);
    // localStorage.setItem('saveditems', JSON.stringify(chosenItems));
    setChosenFood([...chosenFood, {item: e.target.innerText, id: uuidv4(), point: point}])
  }


  foodData.forEach(({food, point}, index) => chosenFood.map(({item}) => 
    {
      let val = '';
      if (food === item) {
        switch(point) {
          case 1: val = 'one-';
              break;
          case 2: val = 'two-';
              break;
          case 3: val = 'three-';
              break;
          case 4: val = 'four-';
              break;
          case 5: val = 'five-';
              break;
          case 6: val = 'six-';
              break;
          case 7: val = 'seven-';
              break;
          case 8: val = 'eight-';
              break;
          case 9: val = 'nine-';
              break;
          case 10: val = 'ten-';
              break;
        }
      }
      console.log(point)
      console.log(foodsPerPointRecords[point - 1])
      // setFoodsPerPointRecords([...foodsPerPointRecords[point - 1], {...foodRecord, active: true}])
      styleChoices(val + index, true)
    }
  ));


  // changing background after pressing Log Food button 
  const handleAdd = (e) => {
    e.preventDefault();
    const subRoot = ReactDOM.createRoot(document.querySelector('.content-container-for-addlog'));
    subRoot.render(<AddLog 
                    chosenFood={chosenFood}
                    setChosenFood={setChosenFood}
                    totalPoints={totalPoints}
                    setTotalPoints={setTotalPoints}
                    page='byPoints'
                   />)
  
    setTimeout(() => {
      // document.querySelector('.bypoints-content-container').style.filter = 'blur(3px)';
      const btn = document.querySelector('.add-btn')
          // btn.style.filter = 'blur(3px)'; 
          btn.disabled = true;
      document.querySelector('.addlog-container').style.visibility = 'visible';
    }, 500);
  }


  return (
    <>
      <div className='bypoints-content-container'>

        {foodsPerPointRecords.map(({foodRecord, name}, index) => {
          if (foodRecord !== '') {
            return (  
              <fieldset className='bypoints-content' key={index}>
                <legend className='one-bypoint'>{name.toUpperCase()}{name === 'one-' ? 'Point' : 'Points'}</legend>
                  <ul className='list-by-points-container'>
                    {foodRecord.map(({item, point, active}, index) => {
                      let idValue = name + index;
                      return (
                        <li className='list-of-foods' id={idValue} key={idValue}>
                          <label className='foods-by-points' onClick={((e) => handleChoice(e, point, active, foodRecord, idValue, index))}>{item}</label>
                        </li>
                      )
                    })}
                  </ul>
              </fieldset>
            )
          }
        })}
      </div>
      <div className="content-container-for-addlog">
        {/* reserved for addlog  */}
      </div>
      <div className='total-points-container'>
        <Points totalPoints={totalPoints}/>
        <button className='add-btn' onClick={e => handleAdd(e)}>Add to Log</button>
      </div>
    </>
  )
}

export default ByPoints;
