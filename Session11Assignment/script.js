//Problem of the day 11 

//Given a string S, find the longest palindromic substring of 
//string S:S[i.....j] where 0 <= i <=j length(s) palindromic
// string: A string that reads the same back word . More 
//formally, S is palindrome if reverse(s) = s.[n case of conflict 
//return the substring which occurs first (with the least starting index)

const getPalindromicString=(S)=>{
    
    for (let i = 0 ; i < S.length/2 ; i++)
    {
        if(S[i]!== S[S.length - 1 - i]){
            console.log("Its not a palindromic string")
        }
    }
    console.log("Its palindromic string")
}

getPalindromicString('aabbaa')