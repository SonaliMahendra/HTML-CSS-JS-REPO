var str="aeiou"
var count=0;
countVowels(str)
function countVowels(str){
    
    const vowels=['a','e','i','o','u']
    for(let char of str)
    if(vowels.includes(char)){
        count++;
    }
    return count
}
     console.log(count) 