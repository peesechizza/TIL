# JavaScript 기초

## Console 객체

`console` 객체는 브라우저의 디버깅 콘솔에 접근할 수 있는 메서드를 제공한다. console 을 이용하면 개발자도구의 콘솔창에 여러 정보를 출력할 수 있다.

### Console method

`console.log`

일반 메시지를 출력한다.

`console.dir`

주어진 JavaScript 객체의 속성 목록을 상호작용 가능한 형태로 표시한다.

`console.error`

오류 메시지를 출력한다.

`console.warn`

경고 메시지를 출력한다.

`console.time`

주어진 이름의 타이머를 실행한다.

`console.timeEnd`

지정한 타이머를 멈추고, 소요시간을 출력한다.

`console.clear`

콘솔의 내용을 지운다.

## 변수 선언 방식

### **var**

- 중복 선언과 재할당이 가능하며 마지막에 할당된 값이 변수에 저장된다.

```jsx
var greeting = "hello";
console.log(greeting); // hello

var greeting = "hi";
console.log(greeting); // hi

greeting = "how are you?";
console.log(greeting); // how are you
```

### **let**

- 중복 선언은 불가, 재할당은 가능하다.

```jsx
let greeting = "hello";
console.log(greeting); // hello

let greeting = "hi";
console.log(greeting);
//Uncaught SyntaxError: Identifier 'greeting' has already been declared

greeting = "how are you?";
console.log(greeting); //how are you?
```

### **const**

- 중복 선언과 재할당 둘 다 불가하다.

```jsx
const greeting = "hello";
console.log(greeting); // hello

const greeting = "hi";
console.log(greeting);
//Uncaught SyntaxError: Identifier 'greeting' has already been declared

greeting = "how are you?";
console.log(greeting);
//Uncaught TypeError: Assignment to constant variable
```

## 유효한 참조 범위 (Scope)

### var

- **함수 레벨 스코프;** 함수 내에서 선언된 var 변수는 함수 내에서만 유효하고 함수 외부에서는 참조할 수 없다.
  ```jsx
  function func() {
    if (true) {
      var a = "a";
      console.log(a); // 'a'
    }
    console.log(a); // 'a'
  }

  func();
  console.log(a); // ReferenceError: a is not defined
  ```

### let, const

- **블록 레벨 스코프; 함수,** if, for, while, try/catch 문 등의 모든 코드 블록 내부에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다.
  ```jsx
  function func() {
    if (true) {
      let a = "a";
      console.log(a); // 'a'
    }
    console.log(a); // ReferenceError: a is not defined
  }

  console.log(a); // ReferenceError: a is not defined
  ```

## Hoisting

**함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언**하는 것을 말한다.

- JavaScript 함수는 실행되기 전에 함수 안에 필요한 변수값들을 모두 모아서 유효 범위의 최상단에 선언한다. 즉, 함수 내에서 아래쪽에 존재하는 내용 중 필요한 값들을 끌어올리는 것이다.

### var

```jsx
console.log(greeting); // undefined

var greeting = "hello";
```

코드가 실행되면 undefined가 반환된다.

에러가 발생되지 않는 이유는 호이스팅 때문인데, JavaScript 인터프리터는 변수 생성의 **선언 단계** 및 **할당 단계**를 분할한다. 선언 부분은 코드가 실행되기 전에 현재 범위의 맨 위로 호이스팅 되고 초기에 undefined 값이 할당된다.

함수 선언문도 함수 생성전에 호출하면 출력이 된다.

```jsx
func(); // hoisting test

function func() {
  console.log("hoisting test");
}
```

### let / const

let, const 로 변수를 선언하면 실제로 변수는 호이스팅된다. var는 실제 할당 값이 할당되기 전까지 undefined 값이 할당되지만, **let/const는 변수 초기에 어떤 값도 할당되지 않는다.**

## JavaScript Type

JavaScript는 원시 타입에 대한 값을 저장하기 위해 **Call Stack 메모리 공간을 사용**하고 값은 고정된 크기로 저장되며 실제 데이터가 변수에 할당된다.

참조 타입에 대한 값은 데이터 크기가 정해지지 않고 Call Stack 메모리에 저장되고 데이터의 값이 **heap에 저장**되며 변수에 heap 메모리의 주소값이 할당된다.

### 원시 타입; Primitive types

- **string**
- **number**
- **boolean**
- null
- undefined
- symbol

### 참조 타입; Object types

- function
- array
- classes
- object

array와 object 타입 확인 시 둘 다 object라고 나오는데, 배열임을 확인하기 위해서는 `Array.isArray()`를 사용하면 된다.

### 동적 타입

JavaScript는 느슨한 타입의 동적 언어이다. 변수는 어떤 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당 및 재할당이 가능하다.

```jsx
let foo = 42; // number
foo = "bar"; // string
foo = true; // boolean
```

## JavaScript Type Conversion

### 함수를 사용하는 방법 (명시적 타입 변환)

- **to String**

```jsx
let val;

// Converting Number to string
val = String(111);
val = String(8 + 4);

// Converting Bool to string
val = String(false);

// Converting Date to string
val = String(new Date());

// Converting Array to string
val = String([1, 2, 3, 4]);
```

- **to Number**

```jsx
// toString()
val = (5).toString();
val = true.toString();

// String to number
val = Number("1");
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number("hello");
val = Number([1, 2, 3]); // NaN : Not a Number

val = parseInt("111.40"); // 111
val = parseFloat("111.40"); // 111.4
```

### 자동으로 변환하는 방법 (묵시적 타입 변환)

자바 스크립트에서는 특정 타입의 값을 기대하는 곳에 다른 타입의 값이 오면 자동으로 타입을 변환해서 사용한다.

```jsx
const val1 = String(2);
const val2 = 3;
const sum = var1 + var2;

console.log(sum); // 23
console.log(typeof sum); // string
```

## 자바 스크립트 연산 및 Math Object

### 산술 연산자

- `+`

- `*`

- `-`

- `/`

- `%`

### Math Ojbect

- `Math.E`
  자연 로그의 밑 값 e = 약 2.718
- `Math.PI`
- `Math.round(x)`
- `Math.ceil(x)`
- `Math.floor(x)`
- `Math.abs(x)`
- `Math.sqrt(x)`
  x의 제곱근
- `Math.pow(x, y)`
  x의 y 제곱
- `Math.min(), Math.max()`
  최소값, 최대값 반환
- `Math.random()`
  0과 1사이의 난수

## Template Literals

`` backtick(`) ``문자를 사용하여 문자열을 표현한 것을 템플릿 리터럴이라고 한다.

줄바꿈을 할 수 있고, 문자열 내부에 표현식을 포함할 수 있게 된다.

```jsx
console.log("string text line 1\n" + "string text line 2");

console.log(`string test line1
string text line2`);
```

```jsx
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + "and/nnot " + (2 * a + b) + ".");

console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
```

## Loops

자바스크립트에서 Loop를 사용하면 코드 블록을 여러 번 실행할 수 있게 해준다.

### **for**

코드를 여러 번 반복한다.

`for (stat1; stat2; stat3) { //code }`

- **stat1**
  루프가 시작되기 전 실행
- **stat2**
  루프 실행을 위한 조건
- **stat3**
  루프 실행된 후마다 실행

```jsx
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log("It is 3");
    continue; // i가 3일 경우 이후 실행문 스킵
  }

  if (i === 5) {
    console.log("5 Stop the loop");
    break; // i가 5일 경우 반복문 실행 중지
  }
  console.log("Number " + i);
}
```

### for/in

객체의 속성을 따라 반복한다.

```jsx
const user = {
  name: "Han",
  province: "경기도",
  city: "성남시",
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
```

### while

지정된 조건이 true인 동안 반복

```jsx
let i = 0;

while (i < 10) {
  console.log("Number " + i);
  i++;
}
```

### do/while

`do` 코드 블록을 한 번 실행한 뒤에 조건이 true인 동안 루프를 반복한다.

```jsx
let i = 0;

do {
  console.log("Number " + i);
  i++;
} while (i < 10);
```

### for과 forEach 차이

for 루프는 원래 사용되었던 접근 방식이지만 forEach는 배열 요소를 반복하는 새로운 접근 방식이다.

for 루프는 필요한 경우 break 문을 사용하여 for 루프를 중단할 수 있지만 forEach에서는 불가능하다.
