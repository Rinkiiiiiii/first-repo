
// var arr = [1,4,4,4,5,3];
// debugging

var typeID = [];
var count = [];

function LoggerAndCounter (i, arr, typeID, count){
    for (let j = -1 ; j < i ; j++){
        if (typeID[j] == arr[i]){
            count[j]++;
            j = i - 1;
        }else if (arr[i-1] != arr[i] && j == i-1){
            typeID.push(arr[i]);
            count.push(1);
        }
        
    }
}


for (let i = 0 ; i < arr.length ; i++){
    LoggerAndCounter(i, arr, typeID, count);
}

var highNumChecker = [count[0]];
var answer = typeID[0];

for (let k = 1 ; k < count.length ; k++){
    if (count[k] > highNumChecker[0]){
        highNumChecker.length = 0;
        highNumChecker.push(count[k]);
        answer = typeID[k];
    } else if (count[k] == highNumChecker){
        highNumChecker.push(count[k]);
    }

    if (highNumChecker.length > 1){
        if (answer > typeID[k]){
            answer = typeID[k];
        }
    }
}

return answer;






