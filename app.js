/*
Create a function that takes a grid of $ and - where each ($) represents a mine and each (-) represents mine-free spots
Return an array where each ($) is replaced by a digit indicating the number of adjacent mines

mineGrid([
    ["-","-","-","-","-"],
    ["-","-","-","-","-"],
    ["-","-","$","-","-"],
    ["-","-","-","-","-"],
    ["-","-","-","-","-"]
]) {

Output:
[
    ["0","0","0","0","0"],
    ["0","1","1","1","0"],
    ["0","1","$","1","0"],
    ["0","1","1","1","0"],
    ["0","0","0","0","0"]
]
}
*/ 

function makeMineGrid(sizeY = Int, sizeX = Int) {
    // Defines result array
    let result = []
    // If sizeY is 10, that will create 10 arrays (across)
    for(let i = sizeY; i>0; i--) {
        // Creates an array
        let tempArr = []
        // Adds 10 values to them (down)
        for(let i = sizeX; i>0; i--) tempArr.push("-")
        result.push(tempArr)
    }
    return result
}

//
function findSingleCellState(coordinateX = Int, coordinateY = Int, gameGrid = arr) {
    // Adjusts the coordinates to account for index starting at 0
    let indexCoordinateY = coordinateY-1
    let indexCoordinateX = coordinateX-1
    // Finds the array that the cell is in, then what index that value is at
    let cell = (gameGrid[indexCoordinateY][indexCoordinateX])
    // Predefines the state of the cell for a default value
    let cellState = false
    // Creates an array to display status
    let result = []
    // False means the cell is dead
    if(cell == 0) cellState = false
    // True means the cell is alive
    else if(cell == 1) cellState = true
    // Adds all of the values to display the status of a cell
    result.push(coordinateX)
    result.push(coordinateY)
    result.push(cell)
    return result
}

function findSurroundingCellState(coordinateY = Int, coordinateX = Int, gameGrid = arr) {
    // Array result with the values of every cell in a square
    let result = []
    // Finds the state of the 3 cells above the origin cell
    for(let i = 0; i < 3; i++) {
        result.push(findSingleCellState((coordinateX-(i-1)), coordinateY-1, gameGrid))
    }
    // Finds the state of the 3 cells in line with the origin cell including itself
    for(let i = 0; i < 3; i++) {
        result.push(findSingleCellState((coordinateX-(i-1)), coordinateY, gameGrid))
    }
    // Finds the state of the 3 cells below the origin cell
    for(let i = 0; i < 3; i++) {
        result.push(findSingleCellState((coordinateX-(i-1)), coordinateY+1, gameGrid))
    }
    return result
}
//

function displayMineGrid(mineGrid = arr) {
    mineGrid.forEach(v=>console.log(...v))
}

function initialiseGame() {
    let mineGrid = makeMineGrid(5, 5)
}

function runGameLoop() {
    displayMineGrid(mineGrid)
}

initialiseGame()
runGameLoop()