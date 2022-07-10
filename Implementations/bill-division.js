
// var bill = [3,10,2,9];
// var k = 1;
// var b = 7;
// debugging

var billK = bill[k];
var refundChecker = (bill.reduce((accum , curr) => accum + curr ) - billK) / 2;
var bonAppetit = ("Bon Appetit");

if (refundChecker < b){
    console.log (b - refundChecker);
} else if (refundChecker == b){
    console.log (bonAppetit);
}

