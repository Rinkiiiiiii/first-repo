let matches = 0
for (let i = 0 ; i < s.length ; i++){
    let sub_array = s.slice(i, i + m);
    let sum = sub_array.reduce((prev, curr) => prev + curr);
    if (sum == d) {
        matches++;
    }
}
return matches;
