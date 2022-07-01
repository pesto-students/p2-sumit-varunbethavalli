const hasDuplicate = (arr) => { return arr.length !== new Set(arr).size }

console.log(hasDuplicate([1,5,-1,4]))
console.log(hasDuplicate([1,1,2,5,-1,4,5,8,9,10]))
console.log(hasDuplicate([-1,1]))
console.log(hasDuplicate([]))