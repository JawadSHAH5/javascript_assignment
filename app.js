var username = prompt("enter user name")
var phoneNumber = +prompt("enter phoneNumber")
var emailAddress = prompt("enter email address")
var password = prompt("Please enter your password: ")
var confirmPassword = prompt("Confirm Password:")

if(username==""|| phoneNumber == ""||emailAddress== ""||password==""||confirmPassword==""){
    alert('All fields must be filled out')
}

if(password===confirmPassword){
    alert("Welcome , Your account has been created. Please log in to continue")

} else {
    alert("enter same password")
}