function init() {

    arr = [1, 2, 3];

}

const map = new Map();
const myFunction = () => console.log('I am a function.');
const myNumber = 1234;
const myObject = {
    name: 'plainObjectValue',
    otherKey: 'otherValue'
};

map.set(myFunction, 'function as a key');
map.set(myNumber, 'number as a key');
map.set(myObject, 'object as a key');

console.log(map.get(myFunction)); // key 로 function을 사용한 예
console.log(map.get(myNumber)); // key 로 number를 사용한 예
console.log(map.get(myObject)); // key 로 object를 사용한 예
console.log()

const map2 = new Map();
map2.set('someKey1', 1);
map2.set('someKey2', 2);
map2.set('someKey3', 3);

for (let [key, value] of map2) {
    console.log(`${key} = ${value}`);
}
// someKey1 = 1
// someKey2 = 2
// someKey3 = 3

const plainObjMap = {};
plainObjMap['someKey1'] = 1;
plainObjMap['someKey2'] = 2;
plainObjMap['someKey3'] = 3;

for (let key of Object.keys(plainObjMap)) {
    const value = plainObjMap[key];
    console.log(`${key} = ${value}`);
}
// someKey1 = 1
// someKey2 = 2
// someKey3 = 3

// charAt() : 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환합니다.
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
console.log(`index 2 : ${sentence.charAt(2)}`);
// expected output: "The character at index 4 is q"

var obj = {a: '가', b: '나', c: '다'};
for (var key in obj) {
    console.log(key, obj[key]); // a 가, b 나, c 다
}

/*
for of 반복문은 ES6에 추가된 새로운 컬렉션 전용 반복 구문입니다.
for of 구문을 사용하기 위해선 컬렉션 객체가 [Symbol.iterator] 속성을 가지고 있어야만 합니다
출처: https://dydals5678.tistory.com/66 [아빠개발자의 노트]
 */
var iterable = [10, 20, 30];
for (var value of iterable) {
    console.log(value); // 10, 20, 30
}

Object.prototype.objCustom = function () {}; // Object 프로퍼티에 객체 생성
Array.prototype.arrCustom = function () {};  // array 프로퍼티에 객체 생성
var iterable = [3, 5, 7];
iterable.foo = "hello";
for (var key in iterable) {
    console.log("key : " + key); // 0, 1, 2, "foo", "arrCustom", "objCustom"
} //기본 js 내장함수에 프로퍼티를 추가해서 프로퍼티까지 다뽑힌다
for (var value of iterable) {
    console.log(value); // 3, 5, 7
}

// 1.올림
const ceil = Math.ceil(1.222); // 2
console.log("ceil : " + ceil);
// 2.내림
const floor = Math.floor(1.22); // 1
console.log(`floor : ${floor}`);

/*
숫자 -> 문자로 변환 String(), 객체.toString()
 */

var num = 10;
var s1 = String(num);
var s2 = num.toString();
console.log(`${num} : ${s1} : ${s2}`);
console.log(typeof num);
console.log(typeof s1);
console.log(typeof s2);


/**
 * split
 */
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

/**
 String -> Number , toNumber, 숫자로 변환
 */
// 숫자를 스트링로 바꾸기
var tt = 2
tt += "";

// 스트링을 숫자로 바꾸기
tt = "2"
tt *= 1;


// 스트링을 숫자로 바꾸기
tt = "2"
tt = Number(tt);
tt = parseInt(tt);
tt = parseFloat(tt);

parseInt("123.456");        // 123
parseInt("100mile");        // 100
parseInt("w25");               // NaN
parseInt("05");                  // 5
/*
Javascript에서 "0"으로 시작하는 숫자는 8진수 "0x"로 시작하는 숫자는 16진수로 정의되고 있기 때문에
아래에서 9가 8진수에서 사용할 수 없기 때문에 의도하지 않은 0이 나왔습니다.
 */
parseInt("09");                  // 0

parseInt("0x35");              // 53
parseInt("1101", 2);         // 13
parseInt("09", 10);            // 9
parseInt("10", 8);              // 8

parseFloat("123.456");       // 123.456
parseFloat("100.5mile");    // 100.5
parseFloat("w25");               // NaN
parseFloat("05");                  // 5
parseFloat("09");                  // 9
parseFloat("0x35");              // 0

let originalArray = [1, 2, 3];
let changedArray = Array.from(originalArray, (x) => x * 2);
console.log("originalArray : " + originalArray);
console.log("changedArray : " + changedArray);
[originalArray[0], originalArray[1]] = [originalArray[1], originalArray[0]];
console.log("after swap originalArray : " + originalArray);
