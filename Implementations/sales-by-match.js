
// var n = 7;
// var ar = [1,2,1,2,1,3,2];
// debugging

var pairs = 0;
var sortedSocks = ar.sort((a,b) => a -b);

for (let i = 0 ; i < sortedSocks.length ; i++){
    if (sortedSocks[i] == sortedSocks[i+1]){
        pairs++;
        i++;
    }
}



