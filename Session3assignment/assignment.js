//Session 3 Assignment solution 

//write a function that takes (height,radius) as parameters
//to find the volume of cone shape

const calVol=(h,r)=>{
    let volume = 1/3 * 3.14 * (r**2) * h;
    return volume;
}

console.log(calVol(7,4));