
// var keyboards = [4];
// var drives = [5];
// var b = 5;
// debugging

var possibilities = [];

for (let i = 0 ; i < keyboards.length ; i++){
    for (let j = 0 ; j < drives.length ; j++){
        if (keyboards[i] + drives[j] <= b){
            possibilities.push (keyboards[i]+drives[j]);

        }
    }
}

possibilities.sort((first, second) => second - first);
if (possibilities.length != 0){
    return possibilities[0];
} else if (possibilities.length == 0){
    return ("-1");
}

// console.log (possibilities)


