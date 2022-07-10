
// var n = 6;
// var p = 3;
// debugging

var pageDistanceChecker = p-(n-p);
var flippedPages = 0;
var flipCount = 0;
var frontStart = p;
var backStart = n-p;

var evenOrOdd = 0;

function pageFlipperFRONT (flippedPages, frontStart) {
    for (let i = 1 ; i < n ; i++){
        if (i < frontStart){
            i++;
            flippedPages++;
        } else if (i >= frontStart){
            i = n;
        }
    }
    flipCount = flippedPages; 
}

function pageFlipperBACK (flippedPages, backStart, evenOrOdd) {
    if (n % 2 == 0){
        evenOrOdd = 0;
    } else if (n % 2 != 0){
        evenOrOdd = 1;
    }
    
    for (let i = evenOrOdd ; i < n ; i++){
        if (i < backStart){
            i++;
            flippedPages++;
        } else if (i >= backStart){
            i = n;
        }
    }
    flipCount = flippedPages;
}


if (pageDistanceChecker < 0 ){
    pageFlipperFRONT(flippedPages, frontStart);

} else if (pageDistanceChecker > 0){
    pageFlipperBACK(flippedPages, backStart, evenOrOdd);;

} else {
    pageFlipperFRONT(flippedPages, frontStart);
}

return flipCount;
