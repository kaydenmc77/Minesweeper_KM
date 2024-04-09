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
    ["0","2","2","2","0"],
    ["0","1","$","1","0"]
]
}
*/ 

//NOTE Create function that accepts 2d array
const mineGrid = (arr) => {
    /*NOTE Create a helper function that accesses the element position (y,x) in arr, if the y index is valid or exists 
    I want to return arr[y][x] else, return null (This will prevent accessing undefined elements) (Functions on the assumption
    that y.length = x.length, a square grid) */
    const checkAccess = (y = int, x = int) => arr[y] ? arr[y][x] : null

    /*NOTE Create a helper function that calculates the number of adjacent mines around the cell at chosen position of (y,x)*/
    const getMine = (y = int, x = int) = {
        /*NOTE An array is constructed with elements reperesenting the content of adjacent cells, 
        */
        return [

        ]
    }
}