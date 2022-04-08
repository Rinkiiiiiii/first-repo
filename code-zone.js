var factors = a;
var factorsLength = factors.length;
var factorsCheck = true;
var factorsAnswerCheck = false;
var factorsIndex = 0;

var multiples = b;
var multiplesLength = multiples.length;
var multiplesCheck = true;
var multiplesAnswerCheck = false;
var multiplesIndex = 0;

var answer = 0;
var lastFactorsElement = factors[factorsLength - 1];
var upperLimit = multiples[0]+1;

var numChecker = 0;

function getFactors(factors, factorsIndex, factorsLength, factorsCheck, numChecker) {
while (factorsCheck != false && factorsIndex < factorsLength) {
    if ( numChecker % (factors[factorsIndex]) != 0 ) {
    factorsCheck = false;
    }
    factorsIndex++;
}
if (factorsCheck == true) {
    factorsAnswerCheck = true;
}
else {
    factorsAnswerCheck = false;
}
}

function getMultiples(multiples, multiplesIndex, multiplesLength, multiplesCheck, numChecker) {
while (multiplesCheck != false && multiplesIndex < multiplesLength) {
    if ( (multiples[multiplesIndex]) % numChecker != 0 ) {
    multiplesCheck = false;
    }
    multiplesIndex++;
}
if (multiplesCheck == true) {
    multiplesAnswerCheck = true;
}
else {
    multiplesAnswerCheck = false;
}
}



function runAndTally() {
for (numChecker = lastFactorsElement ; numChecker < upperLimit ; numChecker++) {

    getFactors(factors, factorsIndex, factorsLength, factorsCheck, numChecker);
    
    getMultiples(multiples, multiplesIndex, multiplesLength, multiplesCheck, numChecker);
    
    if (factorsAnswerCheck == true && multiplesAnswerCheck == true){
    answer++;
    }
}
}

runAndTally();

console.log (answer);