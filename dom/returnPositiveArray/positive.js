var numbers = [-1,-2,3,4,5,6]
function positiveArray(numbers){
    var newArr = numbers.filter((n)=>{
        return n > 0;
    })
    return newArr;
}
console.log(positiveArray(numbers));