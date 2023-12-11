var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var oddArray =[];
var evenArray = [];

for ( var i = 0; i < numberArray.length;  i++){

    if(numberArray[i] % 2 === 0){
        evenArray.push(numberArray[i]);
    } else {
        oddArray.push(numberArray[i]);
}
}



document.write("<p>Even Numbers: " + evenArray.join(', ') + "</p>");
document.write("<p>Odd Numbers: " + oddArray.join(', ') + "</p>");