let word = "Tenet";
plndrm(word);

function plndrm(word) {
    let drow = word.toLowerCase().split("").reverse();
    word = word.toLowerCase().split("");
    let flag = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i]===drow[i]) flag = 1;
        else {
            flag = 0;
            break;
        }
    }
    if (flag===1){
        console.log("true");
        return true;
    }
    else {
        console.log("false");
        return false;
    }
}

function vowelsCount(word){
    let wordVowel = 0;
    let wordarr = word.toLowerCase().split("");
    for(let i = 0; i < word.length; i++){
        switch (wordarr[i]) {
            case 'a': wordVowel++; break;
            case 'e': wordVowel++; break;
            case 'i': wordVowel++; break;
            case 'o': wordVowel++; break;
            case 'u': wordVowel++; break;
            case 'y': wordVowel++; break;
        }
    }
    return wordVowel;
}