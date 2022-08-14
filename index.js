/*
Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/



Color = ["Red", "Green", "White", "Black"];
console.log(Color.toString());  // To convert a string object into a string.
console.log(Color.join());     //Returns a new string by concatenating all of the elements in an array
console.log(Color.join('+'));   //add + symbol into string by using join

document.write(Color.toString());
document.write("</br> </br>");

document.write(Color.join());
document.write("</br> </br>");

document.write(Color.join("+"));