function reverse(str) {
    return str.split("").reverse().join("");
}
function simpleencode(str){
    string=''
    for(var n = 1; n < len(str)-1; n++){ 
                    newWord = newWord + word[n];
                }
                return newWord +word[0]+"ay";
}
function encode(str,n){
    if(n==1){
    return simpleencode(str)
}
    else{
    return encode(str,n-1)
}
}
