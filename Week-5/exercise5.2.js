function isVowel(char){
    const vowelSet = new Set("aeiou");
    return vowelSet.has(char);
}

function vowelCount(strInput){
    let vowelMap = new Map();
    for (let char of strInput){
        var lcChar = char.toLowerCase();
        if (isVowel(lcChar)){
            if (vowelMap.has(lcChar)){
                vowelMap.set(lcChar, vowelMap.get(lcChar)+1);
            } else {
                vowelMap.set(lcChar, 1);
            }
        }
    }
    return vowelMap;
}

const res = vowelCount("jagannathanio");
console.log(res); 