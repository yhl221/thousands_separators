'use strict';


function isFloat(str) {
    var flag;

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === '.')
            flag = 1;
    }

    return flag;
}

function separatorInt(str) {

    var lessThree = str.substring(0, str.length % 3);
    if (str.length % 3 === 0)
        lessThree = str;
    else {
        for (var i = str.length % 3; i < str.length; i = i + 3)
            lessThree = lessThree + ',' + str.substring(i, i + 3);
    }

    return lessThree;
}

function separatorFloat(str) {

    var separatorArray = str.split(".");
    var lessThree = separatorArray[0].substring(0, separatorArray[0].length % 3);
    for (var i = separatorArray[0].length % 3; i < separatorArray[0].length; i = i + 3)
        lessThree = lessThree + ',' + separatorArray[0].substring(i, i + 3);
    lessThree = lessThree + '.' + separatorArray[1];

    return lessThree;
}

function thousands_separators(num) {
    var finalPrint;

    var string = num.toString();
    var flag = isFloat(string);
    if (flag)
        finalPrint = separatorFloat(string);
    else
        finalPrint = separatorInt(string);

    return finalPrint;
}

module.exports = thousands_separators;
