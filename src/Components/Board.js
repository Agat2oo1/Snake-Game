import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Style.css"

import {
    up,
    down,
    left,
    right,
    selectSnakePosition,
    selectApplePosition, selectEndGame
} from '../Move/moveSlice';

export const Board = () => {
    const snakePosition = useSelector(selectSnakePosition);
    const applePosition = useSelector(selectApplePosition);
    const endGame = useSelector(selectEndGame);
    const dispatch = useDispatch();

    let boxes = [];

    const switchClass = (index_x,index_y) => {
        if(index_x == applePosition.x && index_y==applePosition.y)return "appleBox";
        if(snakePosition.some(position =>
            index_x == position.x && index_y ==position.y
        ))return "snakeBox"
        else return "box"
    }
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++) {
            boxes.push(<div className={switchClass(j,i)}/>)
        }
    }
    return(
        <div className="main">
            {endGame==false?<h1 className="gameHeader">Snake Game</h1>:<h1 className="gameOverHeader:(">Game over</h1>}
            <div className="container">
                {boxes}
            </div>
            <div className="directionContainer">
                <button className="directionUp" onClick={() => dispatch(up())}>Up</button>
                <button className="direction" onClick={() => dispatch(left())}>Left</button>
                <button className="direction" onClick={() => dispatch(down())}>Down</button>
                <button className="direction" onClick={() => dispatch(right())}>Right</button>
            </div>
        </div>
    )
}

