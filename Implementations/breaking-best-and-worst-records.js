
var scores = [10,5,20,20,4,5,2,25,1];
var seasonRecord = scores[0];
var tallyIndex = 0;

var minimum = scores[0];
var minimumCheck = false;
var minimumTally = 0;
var minimumIndex = 0;

var maximum = scores[0];
var maximumCheck = false;
var maximumTally = 0;
var maximumIndex = 0;


function getMinimum (scores, tallyIndex, minimum) {
    if (scores[tallyIndex] < minimum) {
        console.log ("minimum= " + minimum);
        minimum = scores[tallyIndex];
        minimumTally++;
        console.log ("minimum= " + minimum);
        console.log ("minimumTally= " + minimumTally);
    }
}

function getMaximum (scores, tallyIndex, maximum) {
    if (scores[tallyIndex] > maximum) {
        maximum = scores[tallyIndex];
        maximumTally++;
    }
}

function runIndex (tallyIndex, scores) {
    for (tallyIndex = 0 ; tallyIndex < scores.length ; tallyIndex++) {
        getMinimum(scores, tallyIndex, minimum);
        getMaximum(scores, tallyIndex, maximum);
    }
    return(maximumTally, minimumTally);
}

runIndex(tallyIndex, scores);

console.log (maximumTally, minimumTally);
