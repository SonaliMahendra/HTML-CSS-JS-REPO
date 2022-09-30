freeShipping=(map) =>{
    var sum;
    for(let i=0;i<keys.length;i++){
        sum+=values[i];
    }
    return sum;
    if(sum>50.00){
        console.log("Eligible for Free shipping")
    }
    else{
        console.log("Not Eligible for Free shipping")
    }
}
freeShipping({ "Flatscreen TV": 399.99 })