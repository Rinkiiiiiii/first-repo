
var x = 2;
var y = 5;
var z = 4;
// debugging

if (Math.abs(x - z) < Math.abs(y - z)){
    return ("Cat A");
} else if (Math.abs(x - z) > Math.abs(y - z)){
    return ("Cat B");
} else if (Math.abs(x - z) == Math.abs(y - z)){
    return ("Mouse C");
}

