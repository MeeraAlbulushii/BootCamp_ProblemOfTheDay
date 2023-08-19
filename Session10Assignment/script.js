//Problem of the day 10

//given an array arr[] containing positive elements. A and B are two
//numbers defining a range . The task is to check if the array contains
//all elements in the given range. 

//input N=7, A=2

let arr = prompt("Enter array elements: ")
let N = prompt("Enter the first number: ")
let Z = prompt("Enter the second number: ")

const arrRange=(arr,N,Z)=>{
    const rangeSet = new Set();
    for (let x = N; x<= Z; x++){
        rangeSet.add(x);
    }
    for(const number of arr){
        if(rangeSet.has(number)){
            rangeSet.delete(number)
        }
    }
    return rangeSet.size === 0; 
}

result = arrRange(arr,Z,Z+N-1)
if (result){
    consolele.log("Yes the array contains all elements in the range")
}else{
    console.log("No, Its does not contain all the elements")
}