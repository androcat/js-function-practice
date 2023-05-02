(function () {
  "use strict";

  // ---------------------
  // Define a function max() that takes two numbers as arguments and
  // returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
  function max(n1, n2) {
    if (n1 > n2) {
      return n1;
    } else {
      return n2;
    }
    return n1;
  }

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
  function maxOfThree(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
      return n1;
    } else if (n2 > n1 && n2 > n3) {
      return n2;
    } else {
      return n3;
    }
  }

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel,
  //false otherwise.
  // ---------------------
  function isVowel(l) {
    if ("aeiou".includes(l)) {
      return true;
    }
    return false;
  }

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is,
  // double every consonant and place an occurrence of "o" in between. For example, translate("this is fun")
  // should return the string "tothohisos isos fofunon".
  // ---------------------
  function rovarspraket(str) {
    let newStr = "";
    for (let l in str) {
      if (!"aeiou ".includes(str[l])) {
        newStr += str[l] + "o" + str[l];
      } else {
        newStr += str[l];
      }
    }
    return newStr;
  }
  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all
  // the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  function sum(arr) {
    let sum = 0;
    for (let i in arr) {
      sum += arr[i];
    }
    return sum;
  }
  function multiply(arr) {
    let product = 1;
    for (let i in arr) {
      product *= arr[i];
    }
    return product;
  }
  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar")
  // should return the string "ratset gaj".
  // ---------------------
  function reverse(str) {
    let rStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      rStr += str[i];
    }
    return rStr;
  }
  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
  function findLongestWord(arr) {
    let maxLength = 0;
    for (let i in arr) {
      if (arr[i].length > maxLength) {
        maxLength = arr[i].length;
      }
    }
    return maxLength;
  }
  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of
  // words that are longer than i.
  // ---------------------
  function filterLongWords(arr, i) {
    return arr.filter((word) => word.length > i);
  }
  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency
  // listing of the characters contained
  // in it. Represent the frequency listing as a Javascript object.
  // Try it with something
  // like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  function charFreq(str) {}

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, "function max error");

  console.assert(maxOfThree(1, 2, 3) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(2, 3, 1) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(3, 2, 1) === 3, "ERROR maxOfThree");

  console.assert(isVowel("a") === true, "ERROR function isVowel");

  console.assert(isVowel("b") == false, "ERROR function isVowel");

  console.assert(
    rovarspraket("this is fun") === "tothohisos isos fofunon",
    "ERROR function rovarspraket"
  );

  console.assert(sum([1, 2, 3, 4]) === 10, "ERROR function sum");

  console.assert(multiply([1, 2, 3, 4]) === 24, "ERROR function multiply");

  console.assert(
    reverse("jag testar") === "ratset gaj",
    "ERROR function reverse"
  );

  console.assert(
    findLongestWord([
      "hello",
      "world",
      "does",
      "anyone",
      "really",
      "know",
      "what",
      "time",
      "it",
      "is",
    ]) === 6,
    "ERROR function findLongestWord"
  );

  console.assert(
    filterLongWords(
      [
        "hello",
        "world",
        "does",
        "anyone",
        "really",
        "know",
        "what",
        "time",
        "it",
        "is",
      ],
      4
    ).length === 4,
    "ERROR function filterLongWords"
  );

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").a === 7);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").b === 14);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").c === 3);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").d === 3);
})();
