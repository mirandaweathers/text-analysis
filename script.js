function analyzeText() {
    event.preventDefault();

    let text = document.getElementById("text").value;
    
    let wordAry = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=_`~()]/g,'').trim().split(' ');

    let wrdcount = document.getElementById("wrdcount");
    let unqcount = document.getElementById("unqcount");
    let lngcount = document.getElementById("lngcount");
    let sntcount = document.getElementById("sntcount");
    let numcount = document.getElementById("numcount");
    let freqword = document.getElementById("freqword");

    wrdcount.innerHTML = wordsCount(wordAry);
    unqcount.innerHTML = uniqueWordCount(wordAry);
    lngcount.innerHTML = longWordsCount(wordAry);
    sntcount.innerHTML = sentencesCount(text.split('.'));
    numcount.innerHTML = numberCount(wordAry);
    freqword.innerHTML = mostFrequentWord(wordAry);

    document.getElementById("reset").addEventListener("click", function(){
        wrdcount.innerHTML = '';
        unqcount.innerHTML = '';
        lngcount.innerHTML = '';
        sntcount.innerHTML = '';
        numcount.innerHTML = '';
        freqword.innerHTML = '';
    });

    return false;
}

function wordsCount(text) {
    return text.length;
}

function uniqueWordCount(text) {
    let count = 1;

    if(text.length == 0) {
        count = 0;
    } else if(text.length > 1) {
        for(let i = 1; i < text.length; i++) {
            if(text[i] != text[i-1]) ++count;
        }
    }
    
    return count;
}

function longWordsCount(text) {
    let count = 0;
    text.forEach(w => { if(w.length > 5 && /[\w'-]+/.test(w)) ++count });
    return count;
}

function sentencesCount(text) {
    return text.length - 1; 
}

function numberCount(text) {
    let count = 0;
    text.forEach(item => {
        if(/^[0-9]+$/.test(item)) {
            ++count;
        }
    })
    return count;
}

function mostFrequentWord(text) {
    let max = 0;
    let freqWord = '';

    // outer loop: text[i]
    for(let i = 0; i < text.length; i++) {
        let count = 0; // match count

        // inner loop: compare text[i] with all other elements in text[]
        for(let j = 0; j < text.length; j++) {
            // increase count for match
            if(text[i] == text[j]) count++;
        }

        // if new max reached, update max and freqWord
        if (count > max) {
            max = count;
            freqWord = text[i];
        }
    }

    return freqWord;
}