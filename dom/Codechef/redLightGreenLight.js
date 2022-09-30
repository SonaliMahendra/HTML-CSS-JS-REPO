process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
let inputString = "";
let currentline = 0;
process.stdin.on('data', (data)=>{
    inputString += data;
})
process.stdin.on('end',()=>{
    inputString = inputString.split('\n');
    main();
})
function readline(){
    return inputString[currentline++];
}
function main(){
    let n = Number(readline());
    for(let i=0; i<n;i++){
        let [arrlength , height] = readline().split(' ').map(Number);
        let arr = readline().split(' ').map(Number);
        let result = help(arr, arrlength, height);
        console.log(result);
    }
}
function help(arr, arrlength,height){
    let count =0;
    for(let i=0; i<arrlength; i++){
        if(arr[i]>height) count++;
    }
    return count;
}
