//Problem of the day 5

//given a list of N fractions, represented as two 
//list of numerator and denominator. The task is to
// determine the count of pairs of fractions whose 
//sum equals 1

let numerator = [1,2,2,8];
let denominator = [2,4,6,12];
count = 0;


for (N=0 ; N<= 3; N++){
        if(( numerator[N]/denominator[N] + numerator[N]/denominator[N]) == 1){
            count++
        }
    }

console.log(count)



