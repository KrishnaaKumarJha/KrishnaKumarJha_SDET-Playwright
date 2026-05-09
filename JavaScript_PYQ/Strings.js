/*---------------------------Strings--------------------------------*/

//Q1-Reverse a string without using built-in reverse methods.
let name = "Krishna";
let reverse = "";
for(let i = name.length - 1; i >= 0; i--){
    reverse += name[i];
}
console.log(`Reversed String: ${reverse}`);


//Q2-Count the number of vowels in a string.
function vowels(word){
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if("aeiouAEIOU".includes(word[i])){
            count++;
        }
    };
    console.log(`Total number of vowels are: ${count}`);
}
vowels(name);


//Q3-Check whether a string is a palindrome.
function plaindrome(word){
    let reverse = "";
    word = word.toLowerCase();
    for(let i = word.length - 1; i >= 0; i--){
        reverse += word[i];
    };
    if(reverse === word){
        return true;
    };
    return false;
}
console.log(plaindrome(name));
console.log(plaindrome("racecar"));


//Q4-Capitalize the first letter of every word in a sentence.
let sentence = "javascript is awesome";

let result = sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
console.log(`Original String: ${sentence} , Modified String: ${result}`);


//Q5-Find the longest word in a sentence.
let sentence1 = "JavaScript makes web development powerful";
let words = sentence1.split(" ");
let longest = "";

for (let word of words) {

    if (word.length > longest.length) {
        longest = word;
    }
}

console.log(`Original Sentence: ${sentence1} , Longest Word: ${longest}`);