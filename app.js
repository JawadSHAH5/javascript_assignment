// chapter no 14 to 16

// question no 1

// // 1. Declare an empty array using JS literal notation to store student names in the future.
// let futureStudentNames = [];

// // 2. Declare an empty array using JS object notation to store student names in the future.
// let futureStudentNamesObj = new Array();

// // 3. Declare and initialize a strings array.
// let stringsArray = ["John", "Jane", "Alice"];

// // 4. Declare and initialize a numbers array.
// let numbersArray = [1, 2, 3, 4, 5];

// // 5. Declare and initialize a boolean array.
// let booleanArray = [true, false, true, false];

// // 6. Declare and initialize a mixed array.
// let mixedArray = ["apple", 2, true, "orange", false];

// // 7. Declare and Initialize an array and store available education qualifications in Pakistan.
// let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Display education qualifications in the browser.
// document.write("<h2>Educational Qualifications in Pakistan:</h2>");
// document.write("<ul>");

// for (let i = 0; i < educationQualifications.length; i++) {
//   document.write("<li>" + educationQualifications[i] + "</li>");
// }

// document.write("</ul>");


// question no 2




// 8. Write a program to store 3 student names in an array. Take another array to store scores of these three students.

// // Array to store student names
// let studentNames = ["John", "Jane", "Alice"];

// // Array to store scores of the students
// let studentScores = [450, 480, 400];

// // Assuming total marks are 500 for each student
// let totalMarks = 500;

// // Display scores and percentages of students
// for (let i = 0; i < studentNames.length; i++) {
//   let percentage = (studentScores[i] / totalMarks) * 100;

//   console.log(
//     `${studentNames[i]} scored ${studentScores[i]} out of ${totalMarks}. Percentage: ${percentage.toFixed(2)}%`
//   );
// }




// question no 3



// // Initialize an array with color names
// let colorArray = ["Red", "Green", "Blue"];

// // Display the original array
// document.write("<h3>Original Array:</h3>");
// document.write("<p>" + colorArray.join(", ") + "</p>");

// // a. Ask the user what color to add to the beginning & add that color to the beginning of the array.
// let colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
// colorArray.unshift(colorToAddAtBeginning);

// // Display the updated array
// document.write("<h3>Array after adding color to the beginning:</h3>");
// document.write("<p>" + colorArray.join(", ") + "</p>");

// // b. Ask the user what color to add to the end & add that color to the end of the array.
// let colorToAddAtEnd = prompt("Enter a color to add to the end:");
// colorArray.push(colorToAddAtEnd);

// // Display the updated array
// document.write("<h3>Array after adding color to the end:</h3>");
// document.write("<p>" + colorArray.join(", ") + "</p>");

// // c. Add two more colors to the beginning of the array.
// colorArray.unshift("Purple", "Orange");

// // Display the updated array
// document.write("<h3>Array after adding two more colors to the beginning:</h3>");
// document.write("<p>" + colorArray.join(", ") + "</p>");

// // d. Delete the first color in the array.
// colorArray.shift();

// // Display the updated array
// document.write("<h3>Array after deleting the first color:</h3>");
// document.write("<p>" + colorArray.join(", ") + "</p>");

// // e. Delete the last color in the array.
// colorArray.pop();

// // Display the updated array
// document.write("<h3>Array after deleting the last color:</h3>");
// document.write("<p>" + colorArray.join(", ") + "</p>");

// // f. Ask the user at which index to add a color & color name. Then add the color to the desired position/index.
// let indexToAdd = prompt("Enter the index at which to add a color:");
// let colorToAddAtIndex = prompt("Enter the color to add at the specified index:");
// colorArray.splice(indexToAdd, 0, colorToAddAtIndex);

// // Display the updated array
// document.write("<h3>Array after adding color at a specified index:</h3>");
// document.write("<p>" + colorArray.join(", ") + "</p>");

// // g. Ask the user at which index to delete color(s) & how many colors to delete. Then remove the same number of color(s) from the user-defined position/index.
// let indexToDelete = prompt("Enter the index at which to delete color(s):");
// let numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
// colorArray.splice(indexToDelete, numberOfColorsToDelete);

// // Display the updated array
// document.write("<h3>Array after deleting color(s) from a specified index:</h3>");
// document.write("<p>" + colorArray.join(", ") + "</p>");



// question no 4


// // Store student scores in an array
// let studentScores = [85, 92, 78, 95, 88];

// // Display the original array
// console.log("Original Array:", studentScores);

// // Sort the array in ascending order
// studentScores.sort(function(a, b) {
//   return a - b;
// });

// // Display the sorted array
// console.log("Sorted Array (Ascending Order):", studentScores);


// question no 4

// // Initialize an array with city names
// let cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

// // Display the original array
// console.log("Original Cities Array:", cities);

// // Copy 3 array elements from cities array to selectedCities array
// let selectedCities = cities.slice(0, 3);

// // Display the selectedCities array
// console.log("Selected Cities Array:", selectedCities);



// qestion no 5



// // Create a new array for FIFO
// let fifoArray = [];

// // Add values to the array (enqueue operation)
// fifoArray.push("Value 1");
// fifoArray.push("Value 2");
// fifoArray.push("Value 3");

// // Display the current state of the array
// console.log("Current Array:", fifoArray);

// // Remove values from the array (dequeue operation)
// let removedValue = fifoArray.shift(); // Removes the first element
// console.log("Removed Value:", removedValue);

// // Display the updated state of the array
// console.log("Updated Array:", fifoArray);



// question no 6



let array = ["jawad" , "acim", "mehar"];
array.splice(0, 1, "mehar");
array.splice(2, 2 , "jawad")
console.log(array);