// chapter no 5 

// question no 1



// var num1=10;

// var num2=5;

// var result = num1+num2

// document.write(result)



// question no 2


// (subtraction)

// var num1=10;

// var num2=5;

// var result= num1 - num2

// document.write (result)



// (multiply)

// var num1=2;

// var num2= 10;

// var result= num1 * num2

// document.write(result)


// (division)


// var num1=100;

// var num2=5;

// var result= num1 / num2

// document.write(result)




// question no 3 


// // (a)

// var num=

// document.write("value after variable declaration is"+ num + "<br>");

// var num=10;

// document.write("intail value" +  num + "<br>" );

// num++

// document.write("value after increment is" + num + "<br>");

// num +=7;

// document.write("value after addition is" + num + "<br>");

// num--

// document.write("value after decrement is " +num + "<br>");

//  var reminder= num % 3;

//  document.write("the reminder is " + reminder)





// question no 4

// var ticketPrice=600;

// var numberOfTicket=5;

// var totalCost= ticketPrice * numberOfTicket;

// console.log("total cost of buy" + numberOfTicket + "ticket to a movie is " + totalCost + "PKR");




// question no 5


// var number = parseInt(+prompt('Enter your number'));

// document.write("<p> Table of" + " " + number+  "</p>"+"<br>");

// for (i = 1 ; i <= 10 ; i++) {
  
//    document.write(`${number} * ${i} = ${number*i} <br>`)
// }



// question no 7


// var priceOfItem1 =650;

// var priceOfItem2 =100;

// var quantityOfItem1 = 3;

// var quantityOfItem2 =7;


// var costItem1 = priceOfItem1 * quantityOfItem1;
// var costItem2 = priceOfItem2 * quantityOfItem2;

// var shippingCharges =100;

// var totalCost= costItem1 + costItem2 + shippingCharges;


// document.write( "<h2> shopping card </h2>");
// document.write("price of item 1 is " + priceOfItem1 + "<br>");
// document.write("price of item 2 is " + priceOfItem2 + "<br>");
// document.write("quantity of item 1 is"  +  quantityOfItem1  + "<br>");
// document.write("quantity of itme 2 is"  +  quantityOfItem2  + "<br>");
// document.write("shipping charges" + shippingCharges + "<br>");
// document.write(" total cost of your order is " + totalCost + "<br>");


// question no 8


// var totalMark= 980;

// var marksObtained=804;


// var percentage=( marksObtained / totalMark) * 100;

// document.write("<h1> marks sheet</h1>");
// document.write("total marks :" + totalMark + "<br>");
// document.write("obtained marks: " + marksObtained + "<br>");
// document.write("percentage"+ percentage + "<br>" );



// question no 9



// var udDollar = 104.80;

// var saudiRiyal=28;

// var totalCurrency = ( (104.80*10) + (28 * 25));

// document.write("<h1> Currency in PKR </h1>" );
// document.write("total currency in pkr is :" + totalCurrency  + "<br>");





// chapter mo 6 to 9


// question no 1


// var a = 2, b = 1;


// var step1 = --a - --b;
// var step2 = --a - --b + ++b;
// var step3 = --a - --b + ++b + b--;



// document.write("a: " + a);
// document.write("b: " + b);
// document.write("result: " + step3);





// question no 2

// var num=10;

// document.write("<h1> result </h1>" );

// document.write(" the value of a is ;" + num+ "<br>" );
// document.write("the value of ++a is;" + ++num +"<br>");
// document.write("now the value of a is ;" + num+ "<br>");
// document.write("the value of a++ is ;" + num++ + "<br>");
// document.write("now the value of a is;" + num + "<br>");
// document.write("the value of --a is ;" + --num + "<br>");
// document.write(" now the value of a is ;" + num + "<br>");
// document.write(" the value of a-- is ;" + num-- + "<br>");
// document.write( " now the value of a is; " + num  +"<br>");



// // question no 3

// var userName = prompt("Please enter your name:");

// if (userName) {
    
//     alert("Hello, " + userName + "! Welcome to our website.");
// } else {
    
//     alert("Hello, there! Welcome to our website.");
// }



// question no 4


// var number = prompt("Enter a number for the multiplication table (default is 5):");

// number = parseInt(number) || 5; 

// document.write("<h2>Multiplication Table of " + number + "</h2>");
// document.write("<ul>");

// for (var i = 1; i <= 10; i++) {
//     var result = number * i;
//     document.write("<li>" + number + " x " + i + " = " + result + "</li>");
// }

// document.write("</ul>");




// question no 5


// a) Take three subjects' names from the user and store them in three different variables.
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// // b) Total marks for each subject is 100, store it in another variable.
// var totalMarks = 100;

// // c) Take obtained marks for the first subject from the user and store it in a different variable.
// var obtainedMarks1 = parseFloat(prompt("Enter the obtained marks for " + subject1 + ":"));

// // d) Take obtained marks for the remaining 2 subjects from the user and store them in variables.
// var obtainedMarks2 = parseFloat(prompt("Enter the obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseFloat(prompt("Enter the obtained marks for " + subject3 + ":"));

// // e) Calculate total marks and percentage and display the result in the browser.
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<h2>Result:</h2>");
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
// document.write("<tr><th>Percentage</th><td colspan='2'>" + percentage + "%</td></tr>");
// document.write("</table>");




// chapter no 9 to 11

// question no 1


// var cityName = prompt("enter the name of you city ;");

// if( cityName && cityName. toLocaleLowerCase ()=== "karachi"){

// alert(" welcome to the city of lights, karachi "); 


// }else {
//     alert ( "welcome to the " + cityName);

// }




// question no 2

// var gender = prompt("enter your gender ( male or female)");

// gender = gender.toLocaleLowerCase();

// if( gender === " male" ) {
//     alert( " good morning sir");
// } 
// else if( gender ===  "female" ) {
//     alert( " good morning ma'am");
// }
// else {
//     alert( " good morning")
// }




// question no 3
     
// var signalColor = prompt("Enter the color of the traffic signal:");

// signalColor = signalColor.toLowerCase();


// switch (signalColor) {
//     case "red":
//         alert("Must Stop");
//         break;
//     case "yellow":
//         alert("Ready to move");
//         break;
//     case "green":
//         alert("Move now");
//         break;
//     default:
//         alert("Invalid color entered. Please enter Red, Yellow, or Green.");
// }



// question no 4


// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));


// if (remainingFuel < 1  ) {
//     alert("Please refill the fuel in your car.");
// } else {
//     alert("You have enough fuel to continue your journey.");
// // }


// question no 5


// var subject1Marks = parseFloat(prompt("Enter marks obtained in the first subject:"));
// var subject2Marks = parseFloat(prompt("Enter marks obtained in the second subject:"));
// var subject3Marks = parseFloat(prompt("Enter marks obtained in the third subject:"));

// // 
// var totalMarks = parseFloat(prompt("Enter the total marks for the three subjects:"));

// // Calculate the total obtained marks and percentage
// var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// // Determine the grade based on the percentage
// var grade;
// if (percentage >= 90) {
//     grade = 'A+';
// } else if (percentage >= 80) {
//     grade = 'A';
// } else if (percentage >= 70) {
//     grade = 'B';
// } else if (percentage >= 60) {
//     grade = 'C';
// } else if (percentage >= 50) {
//     grade = 'D';
// } else {
//     grade = 'F';
// }

// // Determine remarks
// var remarks;
// if (percentage >= 60) {
//     remarks = 'Pass';
// } else {
//     remarks = 'Fail';
// }

// // Display the results on the page
// document.write("<h2>Result:</h2>");
// document.write("Total Marks: " + totalMarks * 3 + "<br>");
// document.write("Marks Obtained: " + totalObtainedMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks);



// question no 6


// Prompt the user for a number
// var number = parseInt(prompt("Enter a number:"));

// // Check if the number is even or odd and display the result
// if (isNaN(number)) {
//     alert("Invalid input. Please enter a valid number.");
// } else if (number % 2 === 0) {
//     alert(number + " is an even number.");
// } else {
//     alert(number + " is an odd number.");
// }



// question no 7



// Prompt the user for a number
// var number = parseInt(prompt("Enter a number:"));

// // Check if the number is divisible by 3 and display the result
// if (isNaN(number)) {
//     alert("Invalid input. Please enter a valid number.");
// } else if (number % 3 === 0) {
//     alert(number + " is divisible by 3.");
// } else {
//     alert(number + " is not divisible by 3.");
// }



// question no 8


// Prompt the user for the first number
var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user for the second number
var secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt the user for the operation (+, -, *, /, %)
var operation = prompt("Enter the operation (+, -, *, /, or %):");

// Check if the inputs are valid numbers
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Invalid input. Please enter valid numbers.");
} else {
    // Check the operation and perform the corresponding calculation
    var result;
    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        if (secondNumber === 0) {
            alert("Division by zero is not allowed.");
        } else {
            result = firstNumber / secondNumber;
        }
    } else if (operation === '%') {
        result = firstNumber % secondNumber;
    } else {
        alert("Invalid operation. Please enter +, -, *, /, or %.");
    }

    // Display the result to the user
    if (result !== undefined) {
        alert("Result: " + result);
    }
}
