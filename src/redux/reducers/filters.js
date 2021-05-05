let arr = [1, 2, 45, 4, 56, 6]
let newArr = []
let z = 0

for (let i = arr.length-1; i >= 0; i--) {
    newArr[z] = arr[i] 
    z++ 
}

console.log(newArr)