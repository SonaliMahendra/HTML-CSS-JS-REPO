countWeeksToAcheiveTarget=(arr)=>{
    var count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=10)
          count++;
    }
    return count;
}
console.log(countWeeksToAcheiveTarget([12,15,8,10]));