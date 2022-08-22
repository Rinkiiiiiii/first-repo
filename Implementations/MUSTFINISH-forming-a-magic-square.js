
var s = [[5,3,4],[1,5,8],[6,4,2]];
// debugging

var difference = 15;
var cost = 0;

function checker(s,i,j){
    let x = s[i];
    difference = 15;

    if (x != 15){
        difference -= s[i][0] + s[i][1] + s[i][2];
    }
    console.log ("difference =" , difference);
}

for (let i = 0 ; i < s.length ; i++){
    for (let j = 0 ; j < s.length ; j++){
        if (s[i][j] == 1){
            checker(s,i,j);
        } else if (s[i][j] ==2){
            checker(s,i,j);
        } else if (s[i][j] ==3){
            checker(s,i,j);
        } else if (s[i][j] ==4){
            checker(s,i,j);
        } else if (s[i][j] ==5){
            checker(s,i,j);
        } else if (s[i][j] ==6){
            checker(s,i,j);
        } else if (s[i][j] ==7){
            checker(s,i,j);
        } else if (s[i][j] ==8){
            checker(s,i,j);
        } else if (s[i][j] ==9){
            checker(s,i,j);
        }
    }
}

console.log (difference)

