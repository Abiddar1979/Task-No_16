/*Task no #16 :More Guest : You just found a bigger dinner table , so now more space
is avelible.Think of more three guests to invite to dinner.
*Start with your program from exercise 15 . Add a print statement to the end of your
program informing people that you found a bigger dinner table .
*Add one new guest to the bignning of your array.
*Add one new guest to the middle of your array.Use append() to add one new guest
to the end of your list.
*Print a new set of invitation message, one for each person in your list*/
var Guest_List = ["Abid", "Sabtain", "Zohair"];
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear ".concat(Guest_List[i], ", \nYou are invited to dinner! \n"));
}
console.log("\"Unluckily\" ".concat(Guest_List[1], " , can't come to dinner\""));
Guest_List[1] = "Nayer";
console.log("\"\nAlternate List of Guest\"\n");
for (var j = 0; j < Guest_List.length; j++) {
    console.log("Dear ".concat(Guest_List[j], ", \nYou are invited to dinner\"\n"));
}
console.log("Good news that we found a bigger Dinner table , so more space is  avelible .so our new guests are :\n");
Guest_List.unshift("Komal");
Guest_List.splice(2, 0, "Saba");
Guest_List.push("Qadir");
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear ".concat(Guest_List[i], " : \n you are invited in dinner Party!\n"));
}
