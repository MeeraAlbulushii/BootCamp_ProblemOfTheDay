//Problem of The day 6

//Chef and Chefina are playing with dice in on turn
//, both of them roll their dice at once. they consider 
//a turn to be good if the sum of the numbers on their dice
//is greater than 6. given that in a particular turn cheif
 //and cheifina got X and Y on their respective dice, find 
 //the whether the turn was good or not.

 const getSum=(x,y)=>{
    if ((x+y) >= 6){
        console.log("The turn is good")
    }else{
        console.log("The turn is not good")
    }
 }

 getSum(3,2)
 getSum(3,4)