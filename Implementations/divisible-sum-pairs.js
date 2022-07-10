
var pairs= 0;

// var k = 5;
// var ar = [1,2,3,4,5,6];
// variables above were for debugging

for (let i = 0 ; i < ar.length ; i++){
    jFinder(i);
}

function jFinder(i){
    for (let j = 0 ; j < ar.length ; j++){
        if (i < j){
            let numerator = ar[i] + ar[j];
            if (numerator % k == 0){
                pairs++;
            }
        }
    }
}
return pairs;