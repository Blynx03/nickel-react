import point from "../assets/foodLibrary";
import { v4 as uuidv4 } from 'uuid';


    const items1 = [];
    // const items2 = [];
    const items3 = [];
    const items4 = [];
    const items5 = [];
    const items6 = [];
    const items7 = [];
    const items8 = [];
    // const items9 = [];
    const items10 = [];
    const allItems = [];

    // putting food library in foodData
    point.one[0].map((food) => {
        items1.push({'item': food,
        'id': uuidv4(),
        'point': 1});
    });

    // point.two[0].map((food) => {
    //     items2.push({'item': food,
    // 'id': uuidv4(),
    //     'point': 2});
    // });

    point.three[0].map((food) => {
        items3.push({'item': food,
        'id': uuidv4(),
        'point': 3});
    });

    point.four[0].map((food) => {
        items4.push({'item': food,
        'id': uuidv4(),
        'point': 4});
    });
    point.five[0].map((food) => {
        items5.push({'item': food,
        'id': uuidv4(),
        'point': 5});
    });

    point.six[0].map((food) => {
        items6.push({'item': food,
        'id': uuidv4(),
        'point': 6});
    });

    point.seven[0].map((food) => {
        items7.push({'item': food,
        'id': uuidv4(),
        'point': 7});
    });

    point.eight[0].map((food) => {
        items8.push({'item': food,
        'id': uuidv4(),
        'point': 8});
    });

    // point.nine[0].map((food) => {
    //     items9.push({'item': food,
    // 'id': uuidv4(),
    //     'point': 9});
    // });

    point.ten[0].map((food) => {
        items10.push({'item': food,
        'id': uuidv4(),
        'point': 10});
    });
 
    const foodData = items1.concat(items3, items4, items5, items6, items7, items8, items10);

    let pOne = [];
    let pTwo = [];
    let pThree = [];
    let pFour = [];
    let pFive = [];
    let pSix = [];
    let pSeven = [];
    let pEight = [];
    let pNine = [];
    let pTen = [];

    foodData.map((food) => {
        if (food.point === 1) {
            pOne.push({item: food.item, point: food.point, active: false});
        } else if (food.point === 2) {
            pTwo.push({item: food.item, point: food.point, active: false});
        } else if (food.point === 3) {
            pThree.push({item: food.item, point: food.point, active: false});
        } else if (food.point === 4) {
            pFour.push({item: food.item, point: food.point, active: false});
        } else if (food.point === 5) {
            pFive.push({item: food.item, point: food.point, active: false});
        } else if (food.point === 6) {
            pSix.push({item: food.item, point: food.point, active: false});
        } else if (food.point === 7) {
            pSeven.push({item: food.item, point: food.point, active: false});
        } else if (food.point === 8) {
            pEight.push({item: food.item, point: food.point, active: false});
        } else if (food.point === 9) {
            pNine.push({item: food.item, point: food.point, active: false});
        } else if (food.point === 10) {
            pTen.push({item: food.item, point: food.point, active: false});
        }
    });
    
export default foodData;
export { pOne, pTwo, pThree, pFour, pFive, pSix, pSeven, pEight, pNine, pTen };