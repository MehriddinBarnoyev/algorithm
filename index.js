const newArr = (arr) =>{
  let new1 = [];
  for (const i of arr){
    if(i % 2 === 0){
      new1.push(i);
    }
  }
  return {new1, count: new1.length};
}
console.log(newArr([1,2,3,4,5,6,7,8,9]));

// const findIndex = arr => 
//   arr.map((val, idx) => val % 2 !== 0 ? idx : -1)
//      .filter(i => i !== -1);


// console.log(findIndex([2,3,3,5]));


// const reverseArr = (arr) =>{
//   return arr.reverse()
// }
// console.log(reverseArr([1,2,3,4,5]));


// let n = 5

// let arr =[2,3];

// for (let i = 2; i< n; i++){
//   let sum = 0;
//   for (let j = 0; j < i; j++){
//     sum += arr[j];
//   }
//    arr[i] = sum;
// }
// console.log(arr);

// const getLevel2 = (num) =>{
//   const result = [];
//   for(let i = 1; i<= num; i++){
//     result.push(Math.pow(i,2))
//   }
//   return result;
// }

// console.log(getLevel2(5));

// const separeteFiles = (arr) =>{
//   let num = []
//   let str = []
//   let others = []
//   arr.forEach(element => {
//     if(typeof element === 'number'){
//       num.push(element)
//     } else if( typeof element === 'string'){
//       str.push(element)
//     }else{
//       others.push(element)
//     }
//   });
// return {num, str, others}
// }
// console.log(separeteFiles([,1,'d',5, [2,5,], 'salom']));

// const findSecondMax = (arr) =>{
//   let max = 0;
//   let second = 0;

//   arr.forEach(element => {
//     if(element > max){
//       max = element
//     }
//   });
//   arr.forEach(element => {
//     if (element > second && element < max) {
//       second = element;
//     }
//   });
//   return second;
// }

// console.log(findSecondMax([,2,3,5,8,7]));

// const isSilindrome = (str1, str2) =>{
//   const sorted1 = str1.split('').sort().join();
//   const sorted2 = str2.split('').sort().join();

//   return sorted1 === sorted2
// }

// console.log(isSilindrome('silent', "listen"));

// const isPalindrome = (str)=>{
//   return str.split('').reverse().join('') === str
// }
// console.log(isPalindrome('anna'));


// const findUniq = (arr) =>{
//   const result = arr.reduce((acc, num) =>{
//     acc[num] = (acc[num] || 0) + 1;
//     return acc;
//   }, {});

//   return Object.keys(result).find(key => result[key] === 1);
// }


// console.log(findUniq([1, 1, 2, 1, 1,2,5,8]));
// berilgan arr ichida string, number va boshqa qiymatlarni alohida arrlarga ajratish 

// const separeteArr = (arr) =>{

//   const numbers = [];
//   const strings = [];
//   const others = [];

//   arr.forEach(item => {
//     if (typeof item === 'number') {
//       numbers.push(item);
//     }
//     else if (typeof item === 'string') {
//       strings.push(item);
//     }
//     else {
//       others.push(item);
//     }
//   });
//   return {numbers, strings, others}
// }

// const inputArray = [1, 'hello', 2, 'world', true, 3.14, null, 'JavaScript', undefined];
// const result = separeteArr(inputArray);
// console.log(result);

// class ListNode{
//   constructor(val, next = null){
//     this.val = val;
//     this.next = next;
//   }
// }

// const deleDublicates = (head) =>{
//    let current = head;
  
//   while (current && current.next) {
//     if (current.val === current.next.val) {
//       // Duplicate topildi, next node'ni o‘tkazib yuboramiz
//       current.next = current.next.next;
//     } else {
//       current = current.next;
//     }
//   }

//   return head;
// }

// const head = new ListNode(1,
//                 new ListNode(1,
//                 new ListNode(2,
//                 new ListNode(3,
//                 new ListNode(3)))));


// let newHead = deleDublicates(head);

// let current = newHead;

// while (current){
//   console.log(current.val);
//   current = current.next;
// }





// const checkGap = (str) => {
// const words = str.split(' ');
//   longestWord = words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
//   wordsLength = Object.fromEntries(words.map(word => [word, word.length]));
// return {
//   longestWord,
//   wordsLength
// };  
// };

// const sentence = "Frontend development is amazing and sometimes exhausting";

// console.log(checkGap(sentence));


// const isCorrectCapitalUse = (word) => {const isCorrectCapitalUse = (word) => {
//   if(word.length <= 1) return false 
//   return (
//     word === word.toUpperCase() ||              
//     word === word.toLowerCase() ||               
//     word[0] === word[0].toUpperCase() &&
//     word.slice(1) === word.slice(1).toLowerCase() 
//   );
// };

// console.log(isCorrectCapitalUse("UZB")); 

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// const climbStairs = (n) => {
//     if (n <= 2) {
//         return n;
//     }
//     let prev = 1;
//     let curr = 2;
//     for (let i = 3; i <= n; i++) {
//         const temp = curr;
//         curr += prev;
//         prev = temp;    
//         return curr;
//     }
// }
// console.log(climbStairs(5));

//  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// // You must write an algorithm with O(log n) runtime complexity.

// const findIndex = (nums, target) => {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
        
//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return left;
// }
// console.log(findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));


// const strStr = (haystack, needle) => {
//     for (let i = 0; i < haystack.length; i++) {
//        if (haystack.slice(i, i + needle.length) === needle) {
//            return i;
//        }
//     }
//     return -1
// }

// console.log(strStr("hello", "ll"));

// var removeElement = function(nums, val) {
//     const result = [];
//     for(let i = 0; i< nums.length; i++){
//         if(nums[i] !== val){
//             result.push(nums[i])
//         }
//     }
//     return result;
// };

// console.log(removeElement([3,2,2,3], 3));

// let x = Boolean(300);

// console.log(x);


// const removeDublicates = (nums) =>{
//   if (nums.length === 0) return 0;
//     let slow = 0;
//     for (let fast = 1; fast < nums.length; fast++) {
//         if (nums[fast] !== nums[slow]) {
//             slow++;
//             nums[slow] = nums[fast];
//         }
//     }

//     return slow + 1;
// }

// const arr = [1,2,2,1,3,4]
// console.log(removeDublicates(arr));


// const lengthOfLongestSubstring = (s) =>{
//     let maxLength = 0;
//     let start = 0;
//     const charIndexMap = {};
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
//             start = charIndexMap[char] + 1;
//         }
//         charIndexMap[char] = i;
//         maxLength = Math.max(maxLength, i - start + 1);
//     }
//     return maxLength;
// }

// console.log(lengthOfLongestSubstring("abcabcbb"));

// var twoSum = function (nums, target) {
//     let map = []

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.hasOwnProperty(complement)){
//             return [map[complement], i];
//         }
//         map[nums[i]] = i;
//     }
//     return null;
// };

// console.log(twoSum([2, 7, 11, 15], 9))

// const flattenObject = (obj) => {
//     const result = {};
//     console.log(obj);


//     const flatten = (currentObj, parentKey = '') => {
//         for (const key in currentObj) {
//             const newKey = parentKey ? `${parentKey}.${key}` : key;
//             if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
//                 flatten(currentObj[key], newKey);
//             } else {
//                 result[newKey] = currentObj[key];
//             }
//         }
//     }
//     flatten(obj);
//     return result;
// }


// const nestedObject = {
//     a: {
//         b: {
//             c: 1,
//             d: 2,
//             e: 3,
//         }
//     }
// }
// console.log(flattenObject(nestedObject));

// const longestWOrd = (str) => {

//     return str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '')
// }
// console.log(longestWOrd('Frontend development is amazing'));


// const pairProduct = (numbers, targetProduct) => {
//     const result = [];
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[i] * numbers[j] === targetProduct) {
//                 result.push(i, j);
//             }
//         }
//     }
//     return result;
// };

// console.log(pairProduct([1, 2, 3, 4, 5], 8));

// need to shown that results index in array

// const pairsum = (nums, target) => {
//     const result = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] * nums[j] === target) {
//                 result.push([i, j]);
//             }
//         }
//     }
//     return result;
// }

// console.log(pairsum([1, 2, 3, 4, 5], 8)); 


// const mostFrequent = (s) => {
//     const freq = {};
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     let maxFreq = 0;
//     let maxChar = '';
//     for (const char in freq) {
//         if (freq[char] > maxFreq) {
//             maxFreq = freq[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;

// }

// need to for strings

// const pairs = (arr) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             result.push([arr[i], arr[j]]);
//         }
//     }
//     return result;
// }
// const isPrime = (num) => {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(2017));

// Write a function, longestWord, that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is a tie, return the word that occurs later in the sentence.

// You can assume that the sentence is non-empty.


// const longestWord = (str) => {
//     const words = str.match(/\b\w+\b/g);
//     if (!words) return '';
//     let longest = '';
//     for (const word of words) {
//         if (word.length >= longest.length) {
//             longest = word;
//         }
//     }
//     return longest;
// }
// console.log(longestWord("have a nice day"));