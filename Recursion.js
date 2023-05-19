// Name: Is palindrome. 
// Description: 
// Test if a word is a palindrome. A word is a palindrome if only if
//  it can be read from left to right or from right to left: gag; kayak; php; radar;....
// Instructions
// Instructions:
// Breakdown of the processing: we compare the characters located at the ends of the word:
// if equality we test the rest of the word
// if difference we stop
// Stop condition: an empty word or a word containing a single character is a palindrome.
function palindrome(word) {

    if (word.length <= 1) {
        return true;
    }
    if (word[0] === word[word.length - 1]) {
        return palindrome(word.slice(1, word.length - 1));
    } else {
        return false;
    }
    }