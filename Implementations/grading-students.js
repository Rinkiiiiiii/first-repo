
function gradingStudents(grades) {
    // Write your code here
    
    var fGrades = [];
    var size = grades.length;
    
//    for (let i = 0 ; i < size ; i++ ) {
//        if ( grades[i] < "38" ){
//            fGrades += grades[i];
//        }
//        else if ( grades[i] == "38" || grades[i] == "39" ) {
//            fGrades += "40";
//        }
//        else if ( grades[i] == "43" || grades[i] == "44" ) {
//            fGrades += "45";
//        }
//        else if ( grades[i] == "48" || grades[i] == "49" ) {
//            fGrades += "50";
//        }
//        else if ( grades[i] == "53" || grades[i] == "54" ) {
//            fGrades += "55";
//        }
//        else if ( grades[i] == "58" || grades[i] == "59" ) {
//            fGrades += "60";
//        }
//        else if ( grades[i] == "63" || grades[i] == "64" ) {
//            fGrades += "65";
//        }
//        else if ( grades[i] == "68" || grades[i] == "69" ) {
//            fGrades += "70";
//        }
//        else if ( grades[i] == "73" || grades[i] == "74" ) {
//            fGrades += "75";
//        }
//        else if ( grades[i] == "78" || grades[i] == "79" ) {
//            fGrades += "80";
//        }
//        else if ( grades[i] == "83" || grades[i] == "84" ) {
//            fGrades += "85";
//        }
//        else if ( grades[i] == "88" || grades[i] == "89" ) {
//            fGrades += "90";
//        }
//        else if ( grades[i] == "93" || grades[i] == "94" ) {
//            fGrades += "95";
//        }
//        else if ( grades[i] == "98" || grades[i] == "99" ) {
//            fGrades += "100";
//        }
//        else {
//            fGrades += grades[i];
//        }
//        if ( grades[i] = "0"){
//            fGrades += "\n";
//        }
//    }
    
    for (let i = 0 ; i < size ; i++ ) {
        if ((grades[i] >= "38") && (((grades[i] % 5) == "3" ) || (grades[i] % 5) == "4")) {
            fGrades += grades[i] + ("5" - (grades[i] % 5));
        }
        else{
            fGrades += grades[i]
        }
        if (grades[i] = "0"){
            fGrades += "\n";
        }
    }
    
    
    return (fGrades);
    
}
