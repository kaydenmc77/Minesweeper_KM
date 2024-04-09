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
        for(let i = sizeX; i>0; i--) tempArr.push("$")
        result.push(tempArr)
    }
    return result
}

//
function findSingleCellState(coordinateY = Int, coordinateX = Int, mineGrid = arr) {
    // Adjusts the coordinates to account for index starting at 0
    let indexCoordinateY = coordinateY-1
    let indexCoordinateX = coordinateX-1
    // Finds the array that the cell is in, then what index that value is at
    let cell = (mineGrid[indexCoordinateY][indexCoordinateX])
    // Predefines the state of the cell for a default value
    let cellState = false
    // Creates an array to display status
    let result = []
    // False means the cell is not a mine
    if(cell == "-") cellState = false
    // True means the cell is a mine
    else if(cell == "$") cellState = true
    // Adds all of the values to display the status of a cell
    result.push(coordinateY)
    result.push(coordinateX)
    result.push(cell)
    return result
}

function findSurroundingCellState(coordinateY = Int, coordinateX = Int, mineGrid = arr) {
    // Array result with the values of every cell in a square
    let result = []
    // Finds the state of the 3 cells above the origin cell
    for(let i = 0; i < 3; i++) {
        result.push(findSingleCellState((coordinateX-(i-1)), coordinateY-1, mineGrid))
    }
    // Finds the state of the 3 cells in line with the origin cell including itself
    for(let i = 0; i < 3; i++) {
        result.push(findSingleCellState((coordinateX-(i-1)), coordinateY, mineGrid))
    }
    // Finds the state of the 3 cells below the origin cell
    for(let i = 0; i < 3; i++) {
        result.push(findSingleCellState((coordinateX-(i-1)), coordinateY+1, mineGrid))
    }
    return result
}

function countAdjacentMines(squareValues = arr) {
    let mainCell = squareValues[4]
    let mineCells = []
    let result = 0
    for(i in squareValues) {
        if(squareValues[i] !== mainCell) {
            if(squareValues[i][2] == "$") {
                mineCells.push(squareValues[i])
                result++
            }
        }
    }
    return result
}
//

function printDangerGrid(mineGrid = arr) {
    let size = mineGrid.length
    for(let i = 0; i<size; i++) {
        for(let f = 0; f<size; f++) {
            let cellDanger = countAdjacentMines(mineGrid[i][f])
            console.log(cellDanger)
            mineGrid[i][f] = cellDanger
        }
    }
    return mineGrid
}

function displayMineGrid(mineGrid = arr) {
    mineGrid.forEach(v=>console.log(...v))
}

function runGameLoop(mineGrid = arr) {
    displayMineGrid(mineGrid)

    let thisCellSquare = findSurroundingCellState(3, 3, mineGrid)
    let dangerCounter = countAdjacentMines(thisCellSquare)
    console.log(dangerCounter)

    let dangerGrid = printDangerGrid(mineGrid)
    displayMineGrid(dangerGrid)
}

let mineGrid = makeMineGrid(5, 5)

runGameLoop(mineGrid)