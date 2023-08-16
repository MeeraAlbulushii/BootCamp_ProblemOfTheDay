
//Problem of the day 7]
//

const leaders=(array)=>{
    const lead = [];
    let rightNums = array[array.length-1];
    lead.push(rightNums);
    for(let i = array.length-2; i>=0; i--){
        if(array[i] >= rightNums){
            rightNums=array[i];
            lead.push(rightNums);
        }
    }
    return lead.reverse();
}

const inputArray = [16,17,4,3,5,2];
const output = leaders(inputArray);
console.log("The leaders are ",output);