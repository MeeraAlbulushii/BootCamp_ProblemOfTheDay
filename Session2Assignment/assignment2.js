//user should enter array of numbers and you are giving the number, one 
//of the two numbers that equals the sum of the given number  

var numbers = [9,8,7,6,5,4,3,2,1];

function getSum(num){
    for(i = 0 ; i <= 9 ; i++ ){
        for( n = 0 ; n <= 9 ; n++ ){
            if(numbers[i]+numbers[n] == num){
                console.log(numbers[i]+" + "+numbers[n] + " = " + num)
            }
        }
    }
}
getSum(10)