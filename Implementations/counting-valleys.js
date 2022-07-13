
// var steps = 8;
// var path = ("UDDDUDUU");
// debugging

var UPCounter = 0;
var DOWNCounter = 0;
var numOfValleys = 0;

for (let i = 0 ; i < path.length ; i++){
    if (path[i] == "U" && DOWNCounter == 0){
        UPCounter++;
    } else if (path[i] == "U" && DOWNCounter != 0){
        DOWNCounter--;
    } else if (path[i] == "D" && UPCounter == 0 && DOWNCounter == 0){
        DOWNCounter++;
        numOfValleys++;
    } else if (path[i] == "D" && UPCounter == 0 && DOWNCounter != 0){
        DOWNCounter++;
    } else if (path[i] == "D" && UPCounter != 0){
        UPCounter--;
    }
    // console.log ("path[i] =",path[i]);
    // console.log ("UPCounter =",UPCounter);
    // console.log ("DOWNCounter =", DOWNCounter);
    // console.log ("numof valleys =", numOfValleys);
    // console.log ("      ");
}

// console.log ("numOfValleys =", numOfValleys);
// console.log ("path =", path);

return numOfValleys;