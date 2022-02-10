function existRepeatingWords(str){
    let individualWords=str.split(" ");
    let mapOfWords={};
    for(let i=0;i<individualWords.length;i++){
        let currentValue=mapOfWords[individualWords[i]];
        if(currentValue)
            return true;
        mapOfWords[individualWords[i]]=1;
    }
    return false;
}
const s="xyzw ejff o mvnjf xyzw";
console.log(existRepeatingWords(s));
