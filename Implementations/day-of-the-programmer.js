// DO THIS LIKE NOW OR SOMETHIN SMH
// var year = 2017;
// debugging

var dd = 0;
var mm = 0;
var yyyy = year;
var dotp = 256;

var date = (dd+"."+mm+"."+yyyy);

var normalYear = [31,28,31,30,31,30,31,31,30,31,30,31];
var leapYear = [31,29,31,30,31,30,31,31,30,31,30,31];
var calendarSwitchYear = [31,15,31,30,31,30,31,31,30,31,30,31];

function normalDateFinder(normalYear,dotp,mm,dd){
    for (let i = 0 ; i < normalYear.length ; i++){
        if (dotp - normalYear[i] > 0){
            dotp = dotp - normalYear[i];
            mm++;
        } else if (dotp - normalYear[i] < 0){
            dd = dotp;
            mm++;
            i = normalYear.length - 1;
        }
    }
    if (mm < 10){
        date = (dd+"."+0+mm+"."+yyyy);
    } else {
        date = (dd+"."+mm+"."+yyyy);
    }
}

function leapDateFinder(leapYear,dotp,mm,dd){
    for (let i = 0 ; i < leapYear.length ; i++){
        if (dotp - leapYear[i] > 0){
            dotp = dotp - leapYear[i];
            mm++;
        } else if (dotp - leapYear[i] <= 0){
            dd = dotp;
            mm++;
            i = leapYear.length;
        }
    }
    if (mm < 10){
        date = (dd+"."+0+mm+"."+yyyy);
    } else {
        date = (dd+"."+mm+"."+yyyy);
    }
}

function switchDateFinder(calendarSwitchYear,dotp,mm,dd){
    for (let i = 0 ; i < calendarSwitchYear.length ; i++){
        if (dotp - calendarSwitchYear[i] > 0){
            dotp = dotp - calendarSwitchYear[i];
            mm++;
        } else if (dotp - calendarSwitchYear[i] <= 0){
            dd = dotp;
            mm++;
            i = calendarSwitchYear.length;
        }
    }
    if (mm < 10){
        date = (dd+"."+0+mm+"."+yyyy);
    } else {
        date = (dd+"."+mm+"."+yyyy);
    }
}

if (year > 1918){
    if (year % 4 == 0 && year % 100 != 0){
        leapDateFinder(leapYear,dotp,mm,dd);

    } else if (year % 400 == 0){
        leapDateFinder(leapYear,dotp,mm,dd);

    } else {
        normalDateFinder(normalYear,dotp,mm,dd);

    }

} else if (year < 1918){
    if (year % 4 == 0){
        leapDateFinder(leapYear,dotp,mm,dd);
    } else {
        normalDateFinder(normalYear,dotp,mm,dd);
    }
} else if (year = 1918){
    switchDateFinder(calendarSwitchYear,dotp,mm,dd);
}

return date;