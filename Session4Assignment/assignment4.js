//Problem of the day 

//Mohammed wanted to find out if the person he was talking to  
//online was a girl or boy by their username by this method:
//characters in the username is single --> (user is a boy) 
//otherwise it's a girl 

const boyOrGirl=(name)=>{
    if (name.length = 1){
        console.log(name + " Is a boy")
    }else{
        console.log(name + " Is a girl" )
    }
}

boyOrGirl("jel")