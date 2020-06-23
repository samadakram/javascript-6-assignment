// **********************========== Chapter # 21 to 25 Start ==========**********************

//  Task # 1. Write a program that takes two user inputs for first and
//  last name using prompt and merge them in a new variable
//  titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your First name: ");
// var lastName = prompt("Enter your Last name: ");
// var fullName = firstName + " " + lastName;
// alert("Welcome to our website " + " " + fullName);

//  Task # 2. Write a program to take a user input about his favorite
//  mobile phone model. Find and display the length of user
//  input in your browser

// var favMobile = prompt("Enter your favourite Mobile name: ");
// var length = 
// document.write("My Favourite Mobile is: " + " " + favMobile)
// document.write("<br>" + "Length of String:" + " " + )

//  Task # 3. Write a program to find the index of letter “n” in the word
//  “Pakistani” and display the result in your browser .
 
// var char = "Paksitani";
// var newChar = char.indexOf("n");
// alert("String:" + " " + char + "\n" + "Index of 'n': " + " " + newChar );

//  Task # 4. Write a program to find the last index of letter “l” in the
//  word “Hello World” and display the result in your browser

// var char = "Hello World";
// var newChar = char.lastIndexOf("l");
// alert("String:" + " " + char + "\n" + "Last Index of 'l': " + " " + newChar );

//  Task # 5. Write a program to find the character at 3rd index in the
//  word “Pakistani” and display the result in your browser.

// var char = "Pakistani";
// var newChar = char.charAt("3");
// alert("String:" + " " + char + "\n" + "Character at Index 3: " + " " + newChar );

//  Task # 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your First name: ");
// var lastName = prompt("Enter your Last name: ");
// alert("Welcome to our website " + " " + firstName + " " + lastName);

//  Task # 7. Write a program to replace the “Hyder” to “Islam” in the
//  word “Hyderabad” and display the result in your browser.

// var word = "Hyderabad";
// for ( var i = 0; i < word.length; i++){
//     if ( word.slice(i,i+5) === "Hyder"){
//        var wordAfter = word.slice(0,i) + "Islam" + word.slice(i + 5);
//         alert("City:" + " " + word + "\n" + "After Replacement:" + " " + wordAfter );
//     }
// }

//  Task # 8. Write a program to replace all occurrences of “and” in the
//  string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var messageAfter = message.replace(/and/g, "&");
//         alert("Before:" + " " + message + "\n" + "After:" + " " + messageAfter );

//  Task # 9. Write a program that converts a string “472” to a number
// //  472. Display the values & types in your browser.

// var str = "472";
// var num = parseInt(str);
// document.write("Value:" + " " + str + "<br>" + "Type: String" + "<br>" + "Value:" + " " + num + "<br>" + "Type: number" ); 

//  Task # 10. Write a program that takes user input. Convert and
//  show the input in capital letters.
 
// var wordCapital = prompt("Enter any word : ");
// var newWordCapital = wordCapital.toUpperCase();
// alert("User Input:" + " " + wordCapital + "\n" + "Upper case:" + " " + newWordCapital);

//  Task # 11. Write a program that takes user input. Convert and
//  show the input in title case.

// var titleCase = prompt("Enter word:");
// var firstChar = titleCase.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = titleCase.slice(1);
// otherChar = otherChar.toLowerCase();

// var newTitleCase = firstChar + otherChar;
// alert("User Input:" + " " + titleCase + "\n" + "Title case:" + " " + newTitleCase);

//  Task # 12. Write a program that converts the variable num to
//  string.
//  var num = 35.36 ;
//  Remove the dot to display “3536” display in your browser

// var str = 35.36;
// var num = str.toString();
// alert("Value:" + " " + str + "\n" + "Result:" + " " + num ); 

//  Task # 14. You have an array
//  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//  Write a program to enable “search by user input” in an
//  array. After searching, prompt the user whether the given
//  item is found in the list or not.
//  Note: Perform case insensitive search. Whether the user
//  enters cookie, Cookie, COOKIE or coOkIE, program
//  should inform about its availability. Example:

// var userInput = prompt("Enter item name you want: ");

// var firstChar = userInput.slice(0 , 1);
// firstChar = firstChar.toUpperCase();

// var otherChar = userInput.slice(1);
// otherChar = otherChar.toLowerCase();

// var userInput_1 = firstChar + otherChar;

// var items = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"];
// for ( var i = 0; i < items.length; i+){
//     if ( userInput_1 === items[i]){
//         alert(userInput_1 + " " + "is available in our Bakery");
//         break;
//     }
//     else{
//         alert("Sorry" + " " + userInput_1 + " " + "is not available");
//         break;
//     }
// }

 Task # 

// **********************========== Chapter # 21 to 25 End ==========**********************