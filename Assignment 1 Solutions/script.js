//1- 
function getNum(number1){
    console.log(number1);
}
getNum(5)

//2-
function dividable(num1){
    if(num1%3==0 && num1%4==0){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
dividable(36)

//3-
function getMax(x,y){
    if (x>y){
        console.log(`${x} is the max`)
    }else{
        console.log(`${y} is the max`)
    }
}
getMax(5,10)

//4-
function PosOrNeg(z){
    if (z < 0){
        console.log(`${z} is a negative number`)
    }else if (z > 0){
        console.log(`${z} is a positive number`)
    }else{
        console.log("The number is zero")
    }
}
PosOrNeg(0)

//5-
const getMaxAndMin=(n1,n2,n3)=>{
    if(n1>n2 && n2>n3){
        console.log(`${n1} is the max and ${n3} is the min`)
    }else if(n1>n2 && n3>n2){
        console.log(`${n1} is the max and ${n2} is the min`)
    }else if(n2>n1 && n1>n3){
        console.log(`${n2} is the max and ${n3} is the min`)
    }else if(n2>n1 && n3>n1){
        console.log(`${n2} is the max and ${n1} is the min`)
    }else if(n3>n1 && n2>n1){
        console.log(`${n3} is the max and ${n1} is the min`)
    }else if(n3>n1 && n1>n2){
        console.log(`${n3} is the max and ${n2} is the min`)
    }else{
        console.log("All numbers are equal")
    }
}
getMaxAndMin(20,70,10)

//6-
const checkEvenOdd=(numm)=>{
    if (numm%2===0){
        console.log("The number is even")
    }else{
        console.log("The number is odd")
    }
}
checkEvenOdd(2)

//8-
const getVow=(word)=>{
    if ("a" === word[0] ){
        console.log("Vowel")
    }else if ("e" === word[0] ){
        console.log("Vowel")
    }else if ("i" === word[0] ){
        console.log("Vowel")
    }else if ("o" === word[0] ){
        console.log("Vowel")
    }else if ("u" === word[0] ){
        console.log("Vowel")
    }else{
        console.log("Consonant")
    }
}
getVow("oman")
getVow("Meera")

//9-
function printNum(n){
    for ( x=1 ; x <= n ; x++){
        console.log(x)
    }
}
printNum(10)


//10- 
function getMulTable(number2){
    for (var x = 1 ; x <= 12 ; x++){
        console.log(number2*x);
    }
}
getMulTable(6)

//11-
function getEven(o){
    for ( var x = 1 ; x <= o ; x++){
       if(x%2===0){
        console.log(x)
       }
    }
}
getEven(10)

//12-
const getPower=(e,f)=>{
    const power= e**f;
    console.log(power);
}
getPower(4,3)

//13-
const getPercent=(m1,m2,m3,m4,m5)=>{
    const total = m1+m2+m3+m4+m5;
    console.log(`Total Mark = ${total}`);
    const avg = (m1+m2+m3+m4+m5) / 5 / 100
    console.log(`Average Marks = ${avg}`);
    const per = avg*100;
    console.log(`Percentage = ${per} %`)
}
getPercent(95,76,58,90,89)

//14-

const getMonth=(month)=>{
    if(month == 1 ||
        month == 3 ||
        month == 5 ||
        month == 7 ||
        month == 8 ||
        month == 10 ||
        month == 12 ){
            console.log("this month has 31 days")
        }else if(month == 2){
            console.log("this month has 28 days")
        }else if(month == 4 || month == 6 || month == 9 || month == 11){
            console.log("this month has 30 days")
        }else{
            console.log("the number is out of")
        }
}
getMonth(9)

//15-
const Marks=(grade)=>{
    if(grade <= 100 && grade >=90){
        console.log("Grade A")
    }else if (grade >= 80 && grade > 70){
        console.log("Grade B")
    }else if (grade >= 70 && grade > 60){
        console.log("Grade C")
    }else if (grade >= 60 && grade > 40){
        console.log("Grade D")
    }else if (grade >= 40){
        console.log("Grade E")
    }else if (grade < 40){
        console.log("Grade F")
    }else{
        console.log("Mark should be less than 100")
    }
}
Marks(101)

//Switch Case

//15-

const checkMonth=(month)=>{
    switch(month){
        case month === 1 || month === 3 ||  month ===5 ||
        month === 7 || month === 8 || month ===10 ||month === 12:
            console.log("this month has 31 days")
            break;
        case month ===2:
            console.log("this month has 28 days")
            break;
        case  month ===4 || month ===6 ||  month ===9 || month ===11:
            console.log("this month has 30 days")
            break;
        default:
            console.log("the number is out of range")
        }
}
checkMonth(9)


//16-

const getVowel=(word)=>{
    switch(word){
        case word[0] == "a":
            console.log("Vowel")
            break;
        case word[0] == "e":
            console.log("Vowel")
            break;
        case word[0] == "o":
            console.log("Vowel")
            break;
        case word[0] == "u":
            console.log("Vowel")
            break;
        case word[0] == "i":
            console.log("Vowel")
            break;
        default:
            console.log("Consonant")
        }
}

getVow("oman")
getVow("Meera")

//17-
function getMaximum(x,y){
    switch(x,y) {
        case x>y:
            console.log(`${x} is the max`)
            break;
        default:
            console.log(`${y} is the max`)
        }
}
getMaximum(5,10)

//18-
const evenorodd=(numberr)=>{
    switch(numberr){
        case numberr%2===0:
            console.log("The number is even")
            break;
        default:
            console.log("The number is odd")
    }
}
evenorodd(2)

//19-
function positiveornegative(m){
    switch(m){
        case m < 0:
            console.log(`${m} is a negative number`)
            break;
        case m > 0:
            console.log(`${m} is a positive number`)
            break;
    default:
        console.log("The number is zero")
    }
}
positiveornegative(-38)
