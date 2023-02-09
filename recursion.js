/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, (idx += 1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0) {
  if (idx === words.length) return 0;
  return Math.max(words[idx].length, longest(words, idx + 1));
}

/** everyOther: return a string with every other letter. */

function everyOther(word, idx = 0) {
  if (idx === word.length) return "";
  let val = idx % 2 === 0 ? word[idx] : "";
  return (val += everyOther(word, idx + 1));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(word, idx = 0) {
  let mid = Math.floor((word.length - 1) / 2);
  if (idx === mid && word.length % 2 === 0) return word[idx] === word[idx + 1];
  if (idx === mid && word.length % 2 !== 0) return true;
  let op = word.length - 1 - idx;
  if (idx < mid && word[idx] === word[op]) return isPalindrome(word, idx + 1);
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(words, toFind, idx = 0) {
  if (idx === words.length) return -1;
  if (words[idx] === toFind) return idx;
  return findIndex(words, toFind, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(word, idx = word.length - 1) {
  if (idx < 0) return "";
  return (word[idx] += revString(word, idx - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let res = [];
  let arr = Object.values(obj);
  for (let val of arr) {
    if (
      val === Object(val) &&
      Object.prototype.toString.call(val) !== "[object Array]"
    )
      res.push(...gatherStrings(val));
    if (typeof val === "string") res.push(val);
  }
  return res;
}

function gatherStrings2(obj) {
  let res = [];
  let arr = Object.values(obj);
  recursion(arr, res, 0);
  return res;
}

function recursion(arr, res, idx) {
  if (idx === arr.length) return;

  if (
    arr[idx] === Object(arr[idx]) &&
    Object.prototype.toString.call(arr[idx]) !== "[object Array]"
  ) {
    let newArr = Object.values(arr[idx]);
    recursion(newArr, res, 0);
  }
  if (typeof arr[idx] === "string") {
    res.push(arr[idx]);
  }
  recursion(arr, res, idx + 1);
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, x, start = 0, end = arr.length - 1) {
  if (x < arr[start] || x > arr[end]) return -1;

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) return mid;
  if (x < arr[mid]) return binarySearch(arr, x, start, mid - 1);
  else return binarySearch(arr, x, mid + 1, end);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
