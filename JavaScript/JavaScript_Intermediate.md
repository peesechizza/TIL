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

🔗 [참고]**[Javascript] Event Loop 이벤트 루프 정리**](https://talkwithcode.tistory.com/89)
