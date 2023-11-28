# 비동기

[Event Loop](https://github.com/peesechizza/TIL/blob/main/JavaScript/JavaScript_Intermediate.md) 에서 말했듯이 자바스크립트는 단일 스레드로 동시에 하나의 일만 처리할 수 있다. 이러한 문제점을 해결하기 위해서 비동기 방식을 사용한다.

## Callback

- 다른 함수가 실행을 끝낸 뒤 실행되는 함수를 말한다.
- 코드를 통해 명시적으로 호출하는 함수가 아니라 함수를 등록해 놓은 후 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수를 말한다.
- 파라미터로 함수를 전달받아, 함수의 내부에서 실행된다.

### Callback Function 사용 이유

- 자바스크립트에서 비동기적 프로그래밍을 할 수 있기 때문이다.
- 자바스크립트는 싱글스레드를 사용하는데, 멈춤을 방지해준다. 블록킹을 방지하여 싱글 스레드가 논블록킹으로 동작하게 한다.

### Callback Function 사용 유형

1. **익명 함수 사용**
   - 콜백 함수는 이름 없는 **익명의 함수**를 사용한다. 함수의 내부에서 실행되기 때문에 이름을 붙이지 않아도 된다.
2. **함수의 이름 넘기기**
   - 자바스크립트는 **null** 과 **undefined** 타입을 제외하고 모든 것을 객체로 다룬다. 함수를 변수 또는 다른 함수의 변수처럼 사용할 수 있다. 함수를 콜백 함수로 사용할 경우, 함수의 이름만 넘겨주면 된다.
3. **전역변수, 지역변수를 콜백함수의 파라미터로 전달 가능**

### Callback 함수 주의할 점

1. this를 사용한 콜백 함수
2. 콜백 지옥
   - 콜백 함수를 익명 함수로 전달하는 과정이 반복되어 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상이다. 주로 이벤트 처리나 서버 통신과 같은 비동기적인 작업을 수행하기 위해 이런 형태가 자주 등장하는데, 가독성이 떨어지면서 코드를 수정하기 어려워진다.
   - 비동기적인 작업을 수행하기 위해 콜백 함수를 익명 함수로 전달하는 과정에서 생기는 콜백 지옥을 **Promise, async/await, Generator** 등을 사용해 방지할 수 있다.

🔗 [참고]

[**[JavaScript] Callback Function**](https://velog.io/@minidoo/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%9C%EB%B0%B1-%ED%95%A8%EC%88%98Callback-Function)

**[[JavaScript] 비동기적 방식 처리 방법](https://hi-zini.tistory.com/entry/%EB%B9%84%EB%8F%99%EA%B8%B0%EC%A0%81-%EB%B0%A9%EC%8B%9D-%EC%B2%98%EB%A6%AC-%EB%B0%A9%EB%B2%95-Callback-Promise-async-await)**

## Promise

- Promise 객체는 비동기 작업의 최종 완료 또는 실패를 나타내는 Array나 Object 처럼 독자적인 객체라고 보면 된다.

### Promise 객체 사용법

**Promise 객체 생성**

객체를 생성하려면 `new` 키워드와 Promise 생성자 함수를 사용하면 된다. 이때 Promise 생성자 안에 두 개의 매개변수를 가진 콜백 함수를 넣게 되는데, **첫 번째 인수는 작업이 성공했을 때 성공임을 알려주는 객체**이며, **두 번째 인수는 작업이 실패했을 때 실패임을 알려주는 오류 객체**이다.

```jsx
const myPromise = new Promise((resolve, reject) => {
  // 비동기 작업 성공 시 resolve() 호출
  // 비동기 작업 실패 시 reject() 호출
});
```

**Promise 객체 처리**

이렇게 만들어진 Promise 객체는 비동기 작업이 완료된 이후에 다음 작업을 연결시켜 진행할 수 있다. 작업 결과에 따라 `.then()` 과 `.catch()` 메서드 체이닝을 통해 성공과 실패에 대한 후속 처리를 진행할 수 있다.

만약 처리가 성공하여 프로미스 객체 내부에서 `resolve()` 를 호출하게 되면 바로 `.then()` 으로 이어져 `then` 메서드의 콜백 함수에서 성공에 대한 추가 처리를 진행한다. 이 때 호출한 `resolve()` 함수의 매개변수 값이 `then` 메서드의 콜백 함수 인자로 들어가 then 메서드 내부에서 프로미스 객체 내부에서 다룬 값을 사용할 수 있게 된다.

반대로 처리가 실패하여 프로미스 객체 내부에서 `reject()`를 호출하게 되면, 바로 `.catch()` 로 이어져 catch 메서드의 콜백 함수에서 성공에 대한 추가 처리를 진행한다.

```jsx
myPromise
	.then(
			// resolve가 호출되면 then이 실행
	})
	.catch(
			// reject가 호출되면 catch가 실행
	})
	.finally(
			// 콜백 작업을 마치고 무조건 실행되는 finally
	})
```

`Promise()` 생성자는 프로미스를 지원하지 않는 함수를 감쌀 때 사용한다. 따로 생성자 사용을 하지 않는 `fetch()` 메서드를 사용하는 방법이 있다.

`fetch()`로 받아오게 되면 값을 json 형식으로 변환시켜줘야한다.

```jsx
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response1) => response1.json())
  .then((json1) => console.log(json1))
  .then(() => fetch("https://jsonplaceholder.typicode.com/todos/2"))
  .then((response2) => response2.json())
  .then((json2) => console.log(json2))
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("작업 끝!");
  });
```

## Async Await

기존의 비동기 처리 방식인 Callback 함수의 단점을 보완하기 위해 Promise 를 사용했지만, 코드가 장황하다는 단점이 있었다. 이러한 단점을 해결하기 위해 도입된 비동기 처리 방식의 가장 최신 문법이다.

async & await 는 Promise 객체를 반환하기 때문에 then을 사용할 수 있다.

### async & await 사용법

```jsx
async function 함수명() {
		awiat 비동기처리메서드명()
}
```

- 함수의 앞에 **async** 라는 예약어를 붙인다.
- 함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 **await** 을 붙인다.

1. **async 함수**
   - async는 function 앞에 위치하며 해당 함수는 항상 프로미스를 반환한다.
   - 프로미스가 아닌 값을 반환하더라도 이행 상태의 프로미스로 값을 감싸 이행된 프로미스가 반환되도록 한다.
   - async 함수는 화살표 함수로도 정의가 가능하고, 함수 표현식으로도 정의가 가능하다.
2. **await**
   - **await**은 **async** 함수 안에서만 동작한다.
   - 자바 스크립트는 **await** 키워드를 만나면 프로미스가 처리될 때까지 기다리고, 결과는 그 이후 반환된다.

### async & await 예외처리

async & await 에서 예외를 처리하는 방법은 **try…catch** 구문을 사용하는 것이다.

```jsx
async function makeRequests() {
  try {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const jsonResponse1 = await response1.json();
    console.log(jsonResponse1);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("작업 끝!");
  }
}
makeRequests();
```
