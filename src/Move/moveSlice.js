import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    snakePosition: [{x: 2,y: 2},{x: 2,y: 3},{x: 2,y: 4}],
    applePosition: {x: 7,y: 8},
    endGame: false
};

const loadApple = ()=>{
    return {x: Math.floor(Math.random() * 10),y: Math.floor(Math.random() * 10)}
}
export const moveSlice = createSlice({
    name: 'movement',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        right: (state) => {
            if(state.endGame)return;

            if(state.snakePosition[0].x == 9)state.endGame=true

            else if(state.snakePosition[0].x == state.applePosition.x &&
                state.snakePosition[0].y == state.applePosition.y){
                let newSnakeBody = {x: state.snakePosition[state.snakePosition.length-1].x,
                    y:state.snakePosition[state.snakePosition.length-1].y}
                state.snakePosition.push(newSnakeBody);
                state.applePosition = loadApple();
            }
            else if(!(state.snakePosition[0].y === state.snakePosition[1].y
                && state.snakePosition[1].x - state.snakePosition[0].x === 1)){
                state.snakePosition.splice(0,0, state.snakePosition.pop());
                state.snakePosition[0].x = state.snakePosition[1].x + 1;
                state.snakePosition[0].y = state.snakePosition[1].y;
            }
        },
        left: (state) => {
            if(state.endGame)return;

            if(state.snakePosition[0].x == 0)state.endGame=true
            else if(state.snakePosition[0].x == state.applePosition.x &&
                state.snakePosition[0].y == state.applePosition.y){
                let newSnakeBody = {x: state.snakePosition[state.snakePosition.length-1].x,
                    y:state.snakePosition[state.snakePosition.length-1].y}
                state.snakePosition.push(newSnakeBody);
                state.applePosition = loadApple();
            }
            else if(!(state.snakePosition[0].y === state.snakePosition[1].y
                && state.snakePosition[0].x - state.snakePosition[1].x === 1)){
                state.snakePosition.splice(0,0, state.snakePosition.pop());
                state.snakePosition[0].x = state.snakePosition[1].x - 1;
                state.snakePosition[0].y = state.snakePosition[1].y;
            }
        },
        up: (state) => {
            if(state.endGame)return;

            if(state.snakePosition[0].y == 0)state.endGame=true
            else if(state.snakePosition[0].x == state.applePosition.x &&
                state.snakePosition[0].y == state.applePosition.y){
                let newSnakeBody = {x: state.snakePosition[state.snakePosition.length-1].x,
                    y:state.snakePosition[state.snakePosition.length-1].y}
                state.snakePosition.push(newSnakeBody);
                state.applePosition = loadApple();
            }
            else if(!(state.snakePosition[0].x === state.snakePosition[1].x
                && state.snakePosition[0].y - state.snakePosition[1].y === 1)) {
                state.snakePosition.splice(0, 0, state.snakePosition.pop());
                state.snakePosition[0].x = state.snakePosition[1].x;
                state.snakePosition[0].y = state.snakePosition[1].y - 1;
            }
        },
        down: (state) => {
            if(state.endGame)return;

            if(state.snakePosition[0].x == 9)state.endGame=true
            else if(state.snakePosition[0].x == state.applePosition.x &&
                state.snakePosition[0].y == state.applePosition.y){
                let newSnakeBody = {x: state.snakePosition[state.snakePosition.length-1].x,
                    y:state.snakePosition[state.snakePosition.length-1].y}
                state.snakePosition.push(newSnakeBody);
                state.applePosition = loadApple();
            }
            else if(!(state.snakePosition[0].x === state.snakePosition[1].x
                && state.snakePosition[1].y - state.snakePosition[0].y === 1)) {
                state.snakePosition.splice(0, 0, state.snakePosition.pop());
                state.snakePosition[0].x = state.snakePosition[1].x;
                state.snakePosition[0].y = state.snakePosition[1].y + 1;
            }
        }
    }
});

export const selectSnakePosition = (state) => state.move.snakePosition;
export const selectApplePosition = (state) => state.move.applePosition;
export const selectEndGame = (state) => state.move.endGame;

export const {up,down,right,left} = moveSlice.actions;
export default moveSlice.reducer;
