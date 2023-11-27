# JavaScript 중급

## this 키워드

자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조변수이다. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있고, 일반적으로 객체의 메서드 내부 또는 생성자 함수 내부에서만 의미가 있다.

1. **Method에서 this를 사용하면 해당 객체를 가리킨다.**

   ```jsx
   const audio = {
     title: "a",
     play() {
       console.log("play this", this);
     },
   };

   audio.play();
   ```

   ![스크린샷 2023-11-24 오후 3 10 01](https://github.com/peesechizza/TIL/assets/110324109/09a0c688-3be6-49ea-b156-a0f07355133d)

   `play()`메서드에서 this를 사용하면 해당 객체를 가리켜 audio 객체가 출력된다.

1. **Function에서 this를 사용하면 Window 객체를 가리킨다.**

   ```jsx
   function playAudio() {
     console.log(this);
   }

   playAudio();
   ```

   ![스크린샷 2023-11-24 오후 3 17 50](https://github.com/peesechizza/TIL/assets/110324109/d211d228-701a-44f2-b70b-201852ad34cc)

1. **Constructor 함수에서 this를 사용하면 빈 객체를 가리킨다.**

   ```jsx
   function Audio(title) {
     console.log(this);
   }

   const audio = new Audio("a");
   ```

   ![스크린샷 2023-11-24 오후 3 21 47](https://github.com/peesechizza/TIL/assets/110324109/46ba9613-fdc3-4d92-8178-be6c647f96f6)

1. `console.log(`title: ${this.title}, category: ${category}`);` 에서의 this는 **function** 안에 있으므로 window 객체를 가리킨다.

   `this.categories.forEach(function (category)` 에서의 this는 **method** 안에 있으므로 해당 객체인 audio를 가리킨다.

   ```jsx
   const audio = {
     title: "audio",
     categories: ["rock", "pop", "hiphop"],
     dispalyCategories() {
       this.categories.forEach(function (category) {
         console.log(`title: ${this.title}, category: ${category}`);
       }, this);
     },
   };

   audio.dispalyCategories();
   ```

   forEach의 첫 번째 매개변수는 **콜백 함수**이고, 두 번째 매개변수는 **thisArg**로 여기에 넣는 것을 콜백함수에서 this로 참조할 수 있게 된다.

   ```jsx
   this.categories.forEach(function (category) {
     console.log(`title: ${this.title}, category: ${category}`);
   }, this);
   ```

   그래서 forEach의 두 번째 매개변수 `this`는 콜백함수에서 참조를 하게 되고 method 안에 있으므로 해당 객체인 audio를 가리킨다.

1. **화살표 함수의 this 항상 상위 스코프의 this를 가리키게 된다.**

   ```jsx
   const audio = {
     title: "audio",
     categories: ["rock", "pop", "hiphop"],
     dispalyCategories() {
       this.categories.forEach((category) => {
         console.log(this);
       });
     },
   };

   audio.dispalyCategories();
   ```

   `console.log(this);` 에서 this의 상위 스코프는`this.categories.forEach((category) => {` 의 this 이다. 상위 스코프 this는 method안에 있으므로 해당 객체 audio를 가리키킨다.

   ![스크린샷 2023-11-24 오후 3 36 53](https://github.com/peesechizza/TIL/assets/110324109/fd3e1092-f8c0-4dfd-9368-f3ad46c26299)

## call(), apply(), bind()

보통 함수 안에서 this를 사용하면 `Window` 객체를 참조하게 된다. 하지만 Window 객체가 아닌 다른 객체들을 참조하고 싶을 때 `call()`, `apply()`, `bind()` 메소드를 사용해보자

### call()

`call` 메서드는 함수를 호출하는 함수이며, 첫 번째 매개변수로 어떠한 것을 전달해주면 호출되는 함수의 this 안에 window 객체가 아닌 전달받은 것을 받게 된다.

```jsx
const fullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

const person1 = {
  firstName: "John",
  lastName: "Smith",
};

fullName.call(person1);
// 출력 John Smith
```

그리고 `call()` 에 인수를 넣어서 사용할 수도 있다.

```jsx
const fullName = function (city, country) {
  console.log(this.firstName + " " + this.lastName, city, country);
};

const person1 = {
  firstName: "John",
  lastName: "Smith",
};

fullName.call(person1, "Oslol", "Norway");
// 출력 John Smith Oslo Norway
```

### apply()

`apply` 메서드는 call 메서드와 비슷하지만 인수 부분을 배열로 넣어줘야 한다.

```jsx
const fullName = function (city, country) {
  console.log(this.firstName + " " + this.lastName, city, country);
};

const person1 = {
  firstName: "John",
  lastName: "Smith",
};

fullName.call(person1, ["Oslol", "Norway"]);
// 출력 John Smith Oslo Norway
```

### bind()

`bind` 메서드를 이용해서도 함수에서 this가 window 객체 대신 다른 객체를 나오게 할 수 있다. `bind` 메서드가 `call`, `apply` 와 다른 점은 직접 함수를 실행하지 않고 반환한다. 실행하기 위해서는 변수에 할당 후에 다시 함수를 호출해야 한다.

```jsx
function func(language) {
  if (language === "kor") {
    console.log(`language: ${this.korGreeting}`);
  } else {
    console.log(`language: ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: "안녕 ",
  engGreeting: "Hello ",
};

const boundFunc = func.bind(greeting);
boundFunc("kor");
// const boundFunc = func.bind(greeting)("eng")
// bind 할 때 넣어 호출을 해도 된다.
```

## 조건 (삼항) 연산자

JavaScript 삼항 연산자는 참/거짓에 따라 선택적으로 실행되는 조건문이다.

```jsx
조건문 ? 선택문1 : 선택문2;
```

조건문이 참이면 선택문1을 실행하고, 조건문이 거짓이면 선택문2를 실행한다.

## Event Loop

JavaScript는 **단일 스레드, 동기언어**이며 **동시에 하나의 작업만 처리할 수 있다.**

하지만 자바스크립트를 쓰면서 이벤트가 일어날 때 다른 작업도 진행하고 한 번에 여러 개의 HTTP 요청을 처리하기도 한다. 단일 스레드이지만 이런 여러 작업들을 처리할 수 있는 이유는 **이벤트 루프** 를 이용하기 때문이다.

JavaScript는 이벤트 루프를 이용해서 비동기 방식으로 동시성을 지원한다.

### 자바스크립트 엔진

자바스크립트 코드를 실행하려면 자바스크립트 엔진이 필요하다. 두 가지 주요 구성 요소로 되어있다.

**Heap**

메모리가 할당 되는 곳이다. 선언한 변수, 함수가 담겨져 있다.

**Call Stack**

코드가 실행될 때 쌓이는 곳이다. 단 하나의 호출 스택을 사용하기 때문에 자바스크립트의 함수가 실행되는 방식을 Run To Completion 이라고 부른다. 하나의 함수가 실행되면 이 함수가 끝날 때 까지는 다른 작업은 끼어들지 못한다.

![eventloop](https://github.com/peesechizza/TIL/assets/110324109/bf409776-0726-43d0-b674-4c0e739cad2f)

### WEB APIs

WEB APIs 는 자바스크립트 엔진이 아니다. 이는 브라우저에서 제공하는 API로 비동기인 setTimeout, Promise 등이 있다. Call Stack 에서 실행된 비동기 함수들은 모두 Web API를 호출한다. 그리고 Web API는 콜백 함수를 Callback Queue 에 넣는다.

```jsx
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);

// 출력
// 1
// 3
// 2
```

1. console.log(1) 이 콜스택에 들어가 실행된다. ( 타고 들어가는 함수가 없으므로 바로 실행되어 사라진다. )
2. setTimeout 을 만나 콜스택은 이를 Web API로 보낸다.
3. console.log(2) 이 콜스택에 들어가 실행된다.

Web API에 있는 setTimeout은 0ms 후에 해당 콜백을 Callback Queue 에 넣습니다. 그리고 콜스택이 비워지면 Callback Queue에 있는 것을 콜스택에 가져와 console.log(2)를 실행시킨다.

비동기 코드를 만나면 Web API 영역으로 빠지고 그 콜백은 바로 콜스택에 가는 것이 아닌 큐로 빠진다.

🔗 [참고]**[Javascript] Event Loop 이벤트 루프 정리**](https://talkwithcode.tistory.com/89)

## Closure

### Closure 란?

다른 함수 내부에 정의된 함수가 있는 경우 외부 함수가 실행을 완료하고 해당 변수가 해당 함수 외부에서 더 이상 엑세스 할 수 없는 경우에도 **해당 내부 함수는 외부 함수의 변수 및 범위에 엑세스 할 수 있다.**

```jsx
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer function: " + outerVariable);
    console.log("Inner function: " + innerVariable);
  };
}

const newFunction = outerFunction("outside");

newFunction("inside");

/*
	출력
	Outer function: outside
	Inner function: inside
*/
```

1. `outerFunction("outside")`은 변수 “newFunction”에 할당되는 즉시 호출된다.
2. 호출되면 outerFunction은 변수 “newFunction”을 outerFunction(outerVariable) 대신 `innerFunction(innerVariable)`을 반환한다.
3. 그런 다음 변수를 newFunction(”inside”)으로 호출하여 `innerFunction(”inside”)`을 호출한다. closure는 innerFunction이 원래 outerFunction(’outside’)으로 설정한 outerVariable 매개 변수를 기억하고 엑세스 할 수 있다는 것이다. 따라서 ‘inside’로만 호출되었더라도 ‘outside’와 ‘inside’를 모두 console.log 할 수 있다.

## 구조 분해 할당 (Destructuring)

배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 Javascript 표현식이다.

### 배열 구조 분해

**기본 변수 할당**

```jsx
var foo = ["one", "two", "three"];

var [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

**선언에서 분리한 할당**

변수의 선언이 분리되어도 구조 분해를 통해 값을 할당할 수 있다.

```jsx
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

**기본값**

변수에 기본값을 할당하면, 분해한 값이 undefined 일 때 그 값을 대신 사용한다.

```jsx
var a, b;
[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7
```

**변수 값 교환하기**

하나의 구조 분해 표현식만으로 두 변수의 값을 교환할 수 있다.

구조 분해 할당 없이 두 값을 교환하려면 임시 변수가 필요하다.

```jsx
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

## 전개 연산자 (Spread Operator)

전개 연산자는 ECMAScript(2015)에서 새롭게 추가되었으며, 특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 때 사용한다.

### 배열 조합

```jsx
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const arrWrap = arr1.concat(arr2, arr3);

console.log(arrWrap); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

concat 메서드는 인자로 전달받은 값 순으로 기존 배열 끝에서부터 값을 추가하지만, 전개 연산자는 배열의 아무 곳에나 추가할 수 있다는 장점이 있다.

```jsx
const arr = [4, 5, 6];
const arrWrap = [1, 2, 3, ...arr, 7, 8, 9];

console.log(arrWrap); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

**배열에 배열을 붙이기 위해 apply 사용하기**

```jsx
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // [1, 2, 3, 4, 5]
```

그냥 `push`에 배열을 전달하면 배열 내부에 배열이 들어간다. 그래서 `concat`을 사용하면 되지만 concat은 기존 배열을 사용하지 않고 새 배열에 만들어서 반환한다. 그래서 기존 배열에 배열을 추가하고 싶으면 `push.apply`를 사용하면 된다.

```jsx
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
arr1.push(...arr2);

console.log(arr1); // [1, 2, 3, 4, 5]
```

### 객체 조합

```jsx
const obj1 = {
  a: "A",
  b: "B",
};
const obj2 = {
  c: "C",
  d: "D",
};
const objWrap = { obj1, obj2 };
console.log(objWrap);
// obj1: {a: 'A', b: 'B'}
// obj2: {c: 'C', d: 'D'}
```

obj1 객체와 obj2 객체를 하나의 objWrap 객체로 묶으면 **객체 각각의 값이 아닌, 객체 자체가 들어가 2차원 객체**가 되었다.

```jsx
const obj1 = {
  a: "A",
  b: "B",
};
const obj2 = {
  c: "C",
  d: "D",
};
const objWrap = { ...obj1, ...obj2 };
console.log(objWrap);
/*
{
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D'
}
*/
```

전개 연산자를 사용하면 객체 자체가 할당되는 것이 아닌, **각각의 값이 할당**된다.

### 기존 배열을 보존

```jsx
const arr1 = [1, 2, 3];
const arr2 = arr1.reverse();

console.log(arr1); // [3, 2, 1]
console.log(arr2); // [3, 2, 1]
```

`reverse()` 는 배열의 각 요소를 역순으로 바꾸는 메소드이다. 기존 배열도 바꿔버리는 단점이 있다.

```jsx
const arr1 = [1, 2, 3];
const arr2 = [...arr1].reverse(); // arr1을 복사하고 reverse하는거라 원본은 아무 문제 없다.

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [3, 2, 1]
```

**전개 연산자는 원본 배열을 그대로 유지하면서 새로운 배열을 만든다.**

🔗 [참고]

- [**[JavaScript] 구조 분해 할당**](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- **[[JavaScript] 전개 연산자(Spread 문법) 정리](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%84%EA%B0%9C-%EC%97%B0%EC%82%B0%EC%9E%90Spread-%EB%AC%B8%EB%B2%95#es5_vs_es6_%EB%B0%B0%EC%97%B4_%EB%AC%B8%EB%B2%95)**

## Map, Filter, Reduce

### Map()

map 메서드는 배열의 모든 요소에 콜백 함수를 적용시켜 새로운 배열을 만들고 싶을 때 사용하는 메서드이다.

```jsx
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);

console.log(map1); // Array [2, 8, 18, 32]
```

```jsx
arr.map(callback(currentValue[, index[, array]])[, thisArg]
```

`callback` : 배열의 모든 요소에 적용되어 새로운 배열 요소를 생성하는 함수

`currentValue` : callback이 적용될 현재 요소

`index` : 처리할 현재 요소의 index

`array` : map을 호출한 배열

`thisArg` : callback을 실행할 때 this로 사용되는 값, window객체가 아닌 다른 객체를 가리키게 하기 위해 설정

```jsx
const array1 = [1, 4, 9, 16];

const map1 = array1.map(
  function (item, index, array) {
    console.log(item, index, array, this);
    return item * 2;
  },
  { a: "a" }
);

console.log(map1);
```

화살표 함수를 사용하면 this에 thisArg가 들어가지 않는다.

### Filter()

filter 메서드는 Boolean 만 반환할 수 있다. true 일 경우 해당 요소를 새로운 배열에 추가하고, false 일 경우 추가하지 않는다. filter 메서드는 특정 조건에 일치하는 요소만 배열에 담고 싶을 때 사용한다.

```jsx
arr.filter(callback(element[, index[, array]])[, thisArg])
```

```jsx
const words = ["spray", "limit", "exuberant", "destruction", "presnet"];

const result = words.filter((word) => word.length > 6);

console.log(result); // ['exuberant', 'destruction', 'present']
```

```jsx
const words = ["spray", "limit", "exuberant", "destruction", "presnet"];

const result = words.filter(
  function (word, index, array) {
    console.log(word, index, array, this);
    return word.length > 6;
  },
  { a: "a" }
);

console.log(result);
```

### Reduce()

reduce 메서드는 배열의 각 요소에 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환한다.

```jsx
arr.reduce(callback[, initialValue])
```

reduce의 callback 핵심은 `accumulator` 와 `currentValue`를 갖는다는 것이다.

`accumulator` : 누산기, 콜백의 반환값을 누적한다. 만약 누적값이 없다면 initialValue가 된다.

`currentValue` : 현재 값

`currentIndex` : 현재 인덱스

`src` : 원본 배열

만약 initialValue를 설정하지 않았다면 첫번째 accumulator는 배열의 0번째 index가 되고 currentValue는 1번째 index가 된다.

initialValue를 설정했다면 첫 번째 accumulator는 initialValue가 되고 currentValue는 0번째 index가 된다.

```jsx
[0, 1, 2, 3, 4].reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  return accumulator + currentValue;
});
// 10
```

첫 번째 accumulator는 0이고 currentValues는 1이다.

```jsx
[0, 1, 2, 3, 4].reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  return accumulator + currentValue;
},
10);
// 20
```

두 번째 인수로 초기값 제공한 경우, 첫 번째 accumulator 는 10이 되고 currentValue는 0이다.

🔗 [참고]

- **[[JavaScript] map, filter, reduce 메서드 사용법](https://velog.io/@onezerokang/ES6-map-filter-reduce-%EB%A9%94%EC%84%9C%EB%93%9C-%EC%82%AC%EC%9A%A9%EB%B2%95)**

## Undefined, null

둘 다 원시 자료형이다. undefined 타입은 undefined 값이 유일하고, null 타입은 null 값이 유일하다.

### Undefined

- undefined는 **아무 값도 할당받지 않은 상태** 를 의미한다.
- var 키워드로 선언한 변수는 호이스팅으로 올라간 후 undefined로 초기화 된다. 그 이후 인터프레터가 해당 소스 코드에 도달했을 때 할당한 값이 들어가게 된다.
  ```jsx
  console.log(a); // undefined
  var a = 5;
  ```
- 변수를 선언한 이후 값을 할당하지 않은 변수를 출력하면 undefined가 반환된다.
  ```jsx
  let hello;
  console.log(hello); // undefined
  ```
- 이렇게 undefined는 개발자가 의도적으로 할당하기 위한 값이 아닌 자바스크립트 엔진이 변수를 초기화 할 때 사용한다. 그래서 개발자가 의도적으로 undefined를 할당하는 것은 권장되지 않는다.
  그래서 변수에 의도적으로 값이 없다고 할 때는 null을 사용한다.

### null

- null은 **비어있는, 존재하지 않는 값**을 의미한다.
- NULL, Null 과 다르다.
- 의도적으로 변수에 값이 없다는 것을 명시하기 위해서 undefined가 아닌 null을 사용한다.
- null을 할당하면 변수가 이전에 참조하던 값을 명시적으로 참조하지 않겠다고 하는 것이므로, 자바스크립트 엔진이 이 변수에 메모리 공간에 대해 가비지 컬렉션을 수행한다.

## 얕은 비교, 깊은 비교

### 얕은 비교 Shallow Compare란?

숫자, 문자열 등 **원시 자료형은 값**을 비교한다. 배열, 객체 등 **참조 자료형**은 **참조되는 위치**를 비교한다.

```jsx
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

console.log(obj1 === obj2); // false
```

값 대신 참조되는 위치를 비교하기 때문에 false가 나온다.

### 깊은 비교 Deep Compare란?

얕은 비교와 달리 깊은 비교는 **객체의 경우에도 값**으로 비교한다.

1. Object depth가 깊지 않은 경우 : `JSON.stringify()` 사용
2. Object depth가 깊은 경우 : lodash 라이브러리의 `isEqual()` 사용

```jsx
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
```

## 얕은 복사, 깊은 복사

참조 타입의 데이터는 복사 시 데이터 값이 아닌 값이 **저장된 메모리의 주소**가 저장된다.

따라서 참조 타입의 복사 방법은 얕은 복사와 깊은 복사로 나뉜다.

### 얕은 복사

객체를 복사할 때 원본 값과 복사된 값이 같은 **참조 (=메모리 주소)를 가리키는 것**이다. 또한, 객체 안에 객체가 있을 경우에 한 개의 객체라도 원본 객체를 참조한다면 얕은 복사라고 볼 수 있다.

- **일반적인 복사**
  ```jsx
  const obj1 = { a: 1, b: 2 };
  const obj2 = obj1;

  obj2.a = 3;

  console.log(obj1.a); // 3
  console.log(obj1 === obj2); // true
  ```
- **전개 구문**
  ```jsx
  const aArray = [1, 2, 3];
  const bArray = [...aArray, 4];

  console.log("aArray", aArray); // [1, 2, 3]
  console.log("bArray", bArray); // [1, 2, 3, 4]
  console.log("aArray === bArray", aArray === bArray); // false
  ```
- **Object.assign()**
  ```jsx
  const aArray = [1, 2, 3];
  const bArray = [...aArray, 4];
  const cArray = Object.assign([], bArray);

  console.log("cArray", cArray); // [1, 2, 3, 4]
  console.log("bArray === cArray", bArray === cArray); // false
  ```
- 중첩된 배열, 객체
  ```jsx
  cArray.push([5, 6, 7]);
  console.log("cArray", cArray); // [1, 2, 3, 4, [5, 6, 7]]
  const dArray = [...cArray, 10];
  console.log("dArray", dArray); // [1, 2, 3, 4, [5, 6, 7], 10]
  dArray[4].push(8);
  console.log("cArray", cArray); // [1, 2, 3, 4, [5, 6, 7, 8]]
  console.log("dArray", dArray); // [1, 2, 3, 4, [5, 6, 7, 8], 10]
  ```
  중첩된 배열이나 객체가 있다면 cArray를 얕은 복사해서 dArray를 만들고 dArray를 변경했을 때 cArray에 있는 그 중첩된 부분은 따라서 변경되는걸 볼 수 있다.

spread operator, Object.assign 이외에도 Array.from(), slice 도 shallw copy를 한다.

### 얕은 동결

`Object.freeze()` 메서드는 객체를 동결하고, 동결된 객체는 더 이상 변경될 수 없다.

동결된 객체는 새로운 속성을 추가하거나 존재하는 속성을 제거하는 것을 방지하며 존재하는 속성의 불변성, 설정 가능성, 작성 가능성이 변경되는 것을 방지하고, 존재하는 속성의 값이 변경되는 것도 방지한다. 또한, 동결 객체는 그 프로토타입이 변경되는 것도 방지한다. `freeze()`는 전달된 동일한 객체를 반환한다.

```jsx
const aObject = {
  a: "a",
  b: "b",
  cObject: { a: 1, b: 2 },
};

Object.freeze(aObject);
aObject.a = "c";
console.log("aObject", aObject);
/*
{a: 'a', b: 'b', cObject: {…}}
a: "a"
b: "b"
cObject: {a: 1, b: 2}
*/

aObject.cObject.a = 3;
console.log("aObject", aObject);
/*
{a: 'a', b: 'b', cObject: {…}}
a: "a"
b: "b"
cObject: {a: 3, b: 2}
*/
```

얕은 복사나 얕은 동결은 중첩된 구조에서 올바른 역할을 수행하지 못한다.

### 깊은 복사

깊은 복사는 복사된 객체가 다른 주소를 참조하여 내부의 값만 복사된다.

- **JSON 객체 이용 (`JSON.parse()`와 `JSON.stringify()`)**
  ```jsx
  const aObject = {
    a: "a",
    b: "b",
    cObject: { a: 1, b: 2 },
  };

  const newAObject = JSON.parse(JSON.stringify(aObject));

  console.log("aObject", aObject);
  console.log("newAObject", newAObject);
  aObject.cObject.a = 3;
  console.log("aObject", aObject);
  console.log("newAObject", newAObject);
  ```
- **전개 구문**
  ```jsx
  const aObject = {
    a: "a",
    b: "b",
    cObject: { a: 1, b: 2 },
  };

  const newAObject = { ...aObject, cObject: { ...aObject.cObject } };
  console.log("aObject", aObject);
  console.log("newAObject", newAObject);
  aObject.cObject.a = 3;
  console.log("aObject", aObject);
  console.log("newAObject", newAObject);
  ```
- **lodash 라이브러리 이용**
  https://www.jsdelivr.com/package/npm/lodash?tab=collection
  Deep Copy는 주로 lodash, Ramda 등 라이브러리를 이용해서 진행해준다.
- **structuredClone**
  [**[structuredClone MDN]**](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)

## 함수 표현식, 선언문

### 함수 선언문

```jsx
function funcDeclaration() {
  return "A function declaration 함수 선언문";
}
```

함수 선언은 함수를 만들고 이름을 지정하는 것이다. function 키워드 다음에 함수 이름을 작성할 때 함수 이름을 선언한다.

### 함수 표현식

```jsx
let funcExpression = function () {
  return "A function expression 함수 표현식";
};
```

함수 표현식은 함수를 만들고 변수에 할당하는 경우이다. 함수는 익명이므로 이름이 없다.

**함수 선언식은 호이스팅에 영향을 받지만**, 함수 표현식은 호이스팅에 영향을 받지 않게 된다.

```jsx
// Function Expression
alert(foo()); // ERROR
var foo = function () {
  return 5;
};

// Function Declaration
alert(foo()); // 5
function foo() {
  return 5;
}
```

함수 선언은 코드가 실행되기 전에 로드되지만 함수 표현식은 인터프리터가 해당 코드 줄에 도달할 때만 로드된다.

## IIFE (Immediately Invoked Function Expression);

즉시 실행 함수 표현은 정의되자마자 즉시 실행되는 JavaScript Function을 말한다.

**기본적인 형태**

```jsx
(function () {
  // 첫 번째 소괄호
  // -> 전역 선언 막고, IIFE 내부 안으로 다른 변수 접근 막기
})(); // 두 번째 소괄호
// 즉시 실행 함수를 생성하는 괄호
// 이를 통해 자바스크립트 엔진은 함수를 즉시 해석 및 실행
```

### IIFE의 주된 사용 목적

IIFE를 사용하는 주된 이유는 변수를 전역으로 선언하는 것을 피하기 위해서이다. 또한 IIFE 내부 안으로 다른 변수들이 접근하는 것을 막을 수도 있다.

- 표현 내부의 변수는 외부로부터의 접근이 불가능하다.

```
(function () {
  var aName = "Barry";
})();

console.log(aName);
```

- IIFE를 변수에 할당하면 IIFE 자체는 저장되지 않고, 함수가 실행된 결과만 저장된다.

```
var result = (function () {
  var name = "Barry";
  return name;
})();

console.log(result); // Barry
```

### 이름 없는 함수를 위해서도 사용 가능

함수 리터럴 (Function Literal) 은 함수를 정의하는 표현식이다.

```jsx
function 함수이름 (매개변수1, 매개변수2) {
		함수 본문
}
```

- 함수 이름 (선택) : 함수 이름은 선택 사항이나 이름이 없으려면 두 가지 조건을 충족해야 한다.
  1. 이 함수를 할당받을 변수를 지정해야 한다.

     ```jsx
     const minus = function (a, b) {
       return a - b;
     };
     ```

  2. 이 함수를 즉시 호출해야 한다.

     ```jsx
     (function (a, b) {
       return a - b;
     })(1, 2);
     ```
- 매개변수 집합 (필수)
- 함수 본문 (필수)

### IIFE는 앞에 연산자를 붙여서 사용 가능

하지만 화살표 함수 안에서는 무조건 “ ( “ 로 시작해야 한다.

[**MDN - 표현식과 연산자**](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%EC%97%B0%EC%82%B0%EC%9E%90)

## Intersection observer

기본적으로 브라우저 뷰포트와 설정한 요소의 교차점을 관찰하며, 요소가 뷰포트에 포함되는지 아닌지, 더 쉽게는 사용자 화면에 지금 보이는 요소인지 아닌지를 구별하는 기능을 제공한다.

### 사용 방법

Intersection Observer API는 다음과 같은 상황에 콜백 함수를 호출한다.

1. 대상 (target) 요소가 기기 뷰포트나 특정 요소 (이 API에서 이를 root 요소 혹은 root로 칭함)와 교차할 때
2. 관찰자(observer)가 최초로 타겟을 관측하도록 요청받을 때

### 기본 문법

Intersection Observer는 `new IntersectionObserver()` 생성자를 통해 인스턴스(`io`)를 만든다. 그리고 해당 인스턴스로 관찰자를 초기화하고 관찰할 대상을 지정한다.

이때, `new IntersectionObserver()` 생성자는 2개의 인수 (`callback`, `options`) 를 갖는다.

```jsx
let io = new IntersectionObserver(callback, options);

io.observe(element);
```

🔗 [참고]

[**[JavaScript] intersection observer란?**](https://velog.io/@khy226/intersection-observer%EB%9E%80-feat-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0)

## Pure Function

순수함수는 함수형 프로그래밍에서 뺴놓을 수 없는 중요한 개념이다.

### 함수의 목적

- **매핑 (mapping)** : 입력값에 기반하여 결과값을 리턴한다.
- **프로시저 (procedure) :** 함수는 일련의 과정을 수행하기 위해 실행된다. 이 일련의 과정을 프로시저라고 부른다. 또한, 이러한 스타일로 프로그래밍하는 것을 절차형 프로그래밍이라고 한다.
- **I/O (입출력) :** 스크린, 저장소, 시스템 로그나 네트워크 등과 대화하기 위해 함수를 사용할 수도 있다.

함수는 결국 입력한 값을 가공한 결과값이 필요할 때, 이 결과값으로 여러 과정을 거쳐야 할 때, 다른 시스템과 정보를 주고 받기 위해 사용한다.

### 순수하지 않은 함수가 가지는 문제점들

1. 공유 상태(Shared state)로 인한 문제
   - 특정 함수가 다른 함수에 미치는 예기치 못한 영향이 발생된다.
2. 병렬 처리(parallel processing)와 비결정성 이슈
   - 동시적으로 작동하는 여러 시스템들이 변수를 공유하고 조작하게 되면 함수를 만들고 실행할 때 어떤 결과값을 리턴할지 예측할 수 없다.

### 순수 함수의 2가지 조건

1. 같은 입력값이 주어졌을 때, 언제나 같은 결과값을 리턴한다.

   (same input ⇒ same output)

   ```jsx
   const add = (x, y) => x + y;
   console.log(add(10, 20));

   const fullName = (first, last) => `${first} ${last}`;
   console.log(fullName("John", "Ahn"));
   ```

2. 순수 함수는 사이드 이펙트를 만들지 않는다.

   즉, 순수 함수는 **외부 상태를 바꿀 수 없다.**

   ```jsx
   const z = 1;
   const sum = (x, y) => x + y + z;
   console.log(sum(10, 20));
   ```

   이런 식으로 함수 밖에 스코프에 접근하는 것도 이 함수를 impure 함수로 만든다.

3. 클린 코드를 위해서
4. 테스트를 쉽게 하기 위해서
5. 디버그를 쉽게 하기 위해서
6. 독립적인 코드를 위해서

## Curry Function

Currying은 한 번에 하나의 인자를 가지고 다음 인자를 함께 새로운 함수에 반환하는 함수이다. 함수를 f(a, b, c)로 호출할 수 있는 함수에서 f(a)(b)(c)로 호출할 수 있는 함수로 변환하는 함수의 변환이다.

### Currying 을 사용하는 이유

1. Currying은 실행 전 필요한 것을 모두 얻었는지 확인하는 메소드이다.
2. 동일한 변수를 재전달하는 것을 피하는데 도움이 된다.
3. 다수의 하나의 책임을 다룰 수 있는 더 작은 함수들로 함수를 쪼갠다. 순수함수로 만들어주고 오류 및 부작용이 적어진다.
4. 고차 함수를 생성하기 위한 함수형 프로그래밍에 사용되곤 한다.

### Currying의 예

```jsx
const sum = (x, y) => x + y;
console.log(sum(10, 20));

const curriedSum = (x) => (y) => x + y;
console.log(curriedSum(10)(20));
```

**Basic Currying**

- Noncurried version

```jsx
const makeFood = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1} ${ingredient2} ${ingredient3}`;
    };
  };
};

const hamburger = makeFood("Bread")("Ham")("Tomato");
console.log(hamburger);
```

- Curried version

```jsx
const cleanerMakeFood = (ingredient1) => (ingredient2) => (ingredient3) =>
  `${ingredient1} ${ingredient2} ${ingredient3}`;

const newHamburger = cleanerMakeFood("Bread")("Ham")("Tomato");

console.log(newHamburger);
```

makeFood 함수는 하나의 인자로서 ingredient1를 가지고 음식을 만들기 위해 필요한 다른 ingredient들을 가진 일련의 함수들을 반환한다.

이 함수는 모든 매개변수를 받기 전까지 완성되지 않는다.

## Strict Mode

ECMAScript 5에서 소개된 JavaScript 의 엄격 모드는 JavaScript의 제한된 버전을 선택하여 암묵적인 느슨한 모드를 해제하기 위한 방법이다.

엄격 모드는 평범한 JavaScript 시멘틱스에 몇 가지 변경이 일어나게 한다.

1. 기존에는 조용히 무시되던 에러들을 throwing 한다.
2. JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로 잡는다.

### String Mode 적용 방법

1. js 파일에 “use strict” 지시자를 입력한다.
2. js 파일 함수 안에 “use strict”를 사용해서 그 함수만 strict mode 적용된다.
3. class를 사용하면 자동으로 strict mode가 적용된다.
4. js 파일의 타입을 Module로 사용하면 적용된다.

### use strict 사용으로 발생하는 제약 조건

- 전역 변수를 허용하지 않으며, 전역 변수 선언시 오류 발생
- 변수 이름 선언 및 사용시 `var`가 누락되면 오류 발생
- 값 할당 실패는 오류 발생 (NaN = 1;)
- 삭제할 수 없는 속성을 삭제하려고 하면 (Object.prototype 삭제) 오류 발생
- 읽기 전용 속성에 쓰기를 하려고 하면 오류 발생
- 객체 리터럴의 모든 속성 이름은 고유해야 한다.
- 함수의 파라미터는 고유해야 한다. ( 같은 파라미터 이름 중복 사용 금지 )
- 8진수 구문과 8진수 이스케이프 표현 금지
- with 키워드 금지
- `eval`, `argument` 는 예약어로 변수명 사용 불가능
- 변수를 생성하는 eval()은 보안상 사용 불가능
- 변수 이름과 함수 이름 삭제 금지
