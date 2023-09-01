function checkCharacters(S) {
    
    const count = {};
    S.split('').forEach(char => {
        count[char] = (count[char] || 0 )+1;
    })

    const firstNonRepeating = S.split('').find(char=>count[char] === 1);
    return firstNonRepeating || "$";
}

const S= "hello";
console.log(checkCharacters(S));