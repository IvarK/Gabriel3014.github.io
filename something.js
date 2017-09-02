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
decodebase64 = function(){
	var text = $('#inputField').val();
    if (!text.trim()) return console.warn("No save to import provided.");
    if(text.length % 4 !== 0) {
        console.log("String is not valid base64 encoded: " + text.length + ' (' + text.length % 4 + ')');
        return;
    }

    var decompressed = LZString.decompressFromBase64(text);
    if(!decompressed) {
        console.log("Import Game failed, could not decompress!");
        return;
    }
    $('#outputField').val(decompressed);
}

encodebase64 = function(){
	var data = $('#inputField').val();

    var string = JSON.stringify(data);
    var compressed = LZString.compressToBase64(string);

    console.log('Compressing Save');
    console.log('Compressed from ' + string.length + ' to ' + compressed.length + ' characters');
    $('#outputField').val(compressed);
}
