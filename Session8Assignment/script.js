//Problem of the day 8

//Given a linked list and a number K. you have to reverse 
//first part of linked list with K nodes and the second 
//part with n-k nodes


const noOfItems = parseInt(prompt("Enter numbers of elements in the array: "))

const array=[];

for ( let i = 0 ; i < noOfItems ; i++){
    const element = prompt("Enter item "+ (i+1) + " :");
    array.push(element)
}
const reverseArr = array.reverse();

console.log(reverseArr)