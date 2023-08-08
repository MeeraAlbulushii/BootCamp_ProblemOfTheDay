
//ASSIGNMENT

function check(num1,num2,num3){

    if (num1 > num2 && num1 > num3) {
        console.log(num1 + " is the maximum") ;
    }else if (num2 > num1 && num2 >num3){
        console.log(num2 + " is the maximum");
    }else if (num3 >num1 && num3 > num2 ){
        console.log(num3 + " is the maximum");
    }
}
check(1,2,3)