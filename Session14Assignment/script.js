//Problem of the day 14



function postFix(exp) {
    const arr1 = [];
    
    const arr2 = exp.split(' ');
    for (let i = 0; i < arr2.length; i++) {
        let arr2 = arr2[i];
        
        if (!isNaN(arr2)) {
            arr1.push(parseFloat(arr2));
        } else {
            const operand2 = arr1.pop();
            const operand1 = arr1.pop();
            
            if (arr2 === '+') {
                arr1.push(operand1 + operand2);
            } else if (arr2 === '-') {
                arr1.push(operand1 - operand2);
            } else if (arr2 === '*') {
                arr1.push(operand1 * operand2);
            } else if (arr2 === '/') {
                arr1.push(operand1 / operand2);
            }
        }
    }
    return arr1.pop();
}
const exp = "231 * + 9-";
console.log( postFix(exp));
