
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    var appleNum = 0;
    var orangeNum = 0;
    var appleCheck = 0;
    var orangeCheck = 0;
    
    for( let i = 0 ; i < apples.length ; i++ ){
        appleCheck = apples[i] + a;
        if(appleCheck >= s && appleCheck <= t){
            appleNum++;
        }
        appleCheck = 0;
    }
    for( let o = 0 ; o < oranges.length ; o++ ){
        orangeCheck = oranges[o] + b;
        if(orangeCheck >= s && orangeCheck <= t){
            orangeNum++;
        }
        orangeCheck = 0;
    }
    
    console.log (appleNum + "\n" + orangeNum);
}
