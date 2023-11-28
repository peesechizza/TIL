# Iterator, Generator

**변경 불가능한 원시 타입의 값이며, 다른 값과 중복되지 않는 고유한 값**이다. 심볼 값은 충돌 위험이 없는 오브젝트의 유일한 프로퍼티 키를 만들기 위해서 사용할 수 있다. 하위 호환성을 유지하면서 표준을 확장한다든지, 고유한 상수값을 만드는데 사용할 수 있다.

```jsx
const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2); // false
```

Symbol 값은 보이는게 같더라도 내부에서는 다른 값을 가진다.

### description

description은 이 Symbol 값이 어떠한 심볼인지 알 수 있게 해주며 디버깅할 때 사용할 수 있다.

Symbol에 매개변수로 넣어주면 사용가능하다.

```jsx
const sym2 = Symbol();
const sym3 = Symbol("hi");

console.log(sym3.description);
```

객체가 가지고 있는 유니크한 프로퍼티와 값을 설정할 때 override 되는 일이 없게 하기 위해 Symbol을 사용한다.

```jsx
let carA = {
  brand: "kia",
  id: 300,
  name: "morning",
  price: 1000,
};

const idSym = Symbol("id");
carA[idSym] = 300;
```

또는 객체 리터럴을 사용해 객체를 만든 경우, 대괄호를 사용해 심볼형 키를 만들수 있다.

```jsx
const idSym = Symbol("id");

let carA = {
  brand: "kia",
  id: 300,
  name: "morning",
  price: 1000,
  [idSym]: 300,
};
```

심볼을 이용하면 기본적으로 Property가 숨겨지게 된다. 그래서 `for.. in` 과 `getOwnPropertyNames` 를 이용할 때 Symbol로 만든 프로퍼티는 안보인다.

`getOwnPropertySymbols` 를 이용하면 Symbol 로 만든 프로퍼티를 확인할 수 있다.

### Symbol.for()

원래는 심볼로 값을 생성하면 심볼의 description이 같더라도 다른값을 가지게 된다. 그러나 `Symbol.for()` 을 이용하면 같은 description을 가졌을 때 같은 값을 가진다.

for을 이용해서 심볼을 생성하면 전역 심볼이 되어서 다른 곳에서 description을 이용해 symbol 값을 가져와서 사용할 수 있다.

```jsx
const sym1 = Symbol.for("sym1");
const sym2 = Symbol.for("sym1");

console.log(sym1 === sym2); // true
```

### Symbol.keyFor()

Symbol.keyFor()를 사용하면 심볼을 사용해 description을 얻을 수 있다.

```jsx
const sym1 = Symbol.for("sym1");
const sym2 = Symbol.for("sym12");

console.log(Symbol.keyFor(sym1)); // sym1
console.log(Symbol.keyFor(sym2)); // sym12
```

## Iterator

배열은 반복 가능한 객체이며, 반복이 가능하다는 것을 **Iterable**이라고 한다. `for…of` 를 이용할 수 있거나 `[Symbol.iterator]()`이 값을 가지면 **Iterable** 한 것이다.

반복자는 `next()`를 호출해서 `{value: , done: }` 두개의 속성을 가지는 객체를 반환하는 객체를 **Iterator** 라고 한다.

```jsx
function makeIterator(numbers) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < numbers.length
        ? { value: numbers[nextIndex++], done: false }
        : { value: undefined, done: true };
    },
  };
}

// 숫자 배열 생성
const numbersArray = [1, 2, 3];

const numbersIterator = makeIterator(numbersArray);
// [Symbol.iterator]()를 이용하면 반복가능한 값을 반복기로 생성가능
// const numbersIterator = numbersArray[Symbol.iterator]();

console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
```

## Generator

Generator Function는 사용자의 요구에 따라 다른 시간 간격으로 여러 값을 반환할 수 있다. 일반 함수는 단 한번의 실행으로 함수 끝까지 실행되고, 제너레이터 함수는 사용자의 요구에 따라 일시적으로 정지될 수도 있고, 다시 시작될 수도 있다.

### Generator 생성

```jsx
function* sayNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const number = sayNumbers();

console.log(number.next().value);
console.log(number.next().value);
console.log(number.next().value);
console.log(number.next().value);
```

generatorFunction을 생성할 때 function 뒤에 \* 를 붙인다. 제너레이터 함수 안의 yield는 제너레이터 함수의 실행을 일시적으로 정지시킨다. 즉, 일반 함수의 return과 매우 유사하다.

### yield\*

yield에 _를 붙여 사용하게 되면 yield_ 와 함께 표현된 객체를 순회하게 된다.
