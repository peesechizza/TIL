# 2. 간단한 To-Do 앱 만들며 리액트 익히기

## Create React App으로 실행된 리액트의 기본 구조 살펴보기

npx create-react=app으로 설치 시 아래와 같은 폴더와 파일이 생성된다.

```
my-app/
  README.md
  node_modules/
  package.json
  public/               public에 있는 파일들은 오직 public/index.html만 쓰일 수 있다.
    index.html
    favicon.ico
  src/                  이곳에 JS파일과 CSS 파일들을 넣으면 된다. 그리고 Webpack은 여기에
    App.css             있는 파일만 본다. 그래서 이 폴더 이외에 넣는 것은 webpack에 처리 X
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

### 이름을 수정하면 안되는 것들

1. public/index.html
   - 페이지 템플릿
2. src/index.js
   - 자바스크립트 시작점

### Package.json 파일

해당 프로젝트에 대한 정보들이 들어 있다. 프로젝트 이름, 버전, 필요한 라이브러리와 라이브러리 버전들이 명시되어 있다. 앱을 시작할 때 사용할 스크립트, 앱을 빌드할 때, 테스트할 때 사용할 스크립트 등이 명시되어 있다.

![스크린샷 2023-12-04 오후 4 36 05](https://github.com/peesechizza/TIL/assets/110324109/9a831e0b-fa8b-43c5-a8fa-1a9d4c8d6817)

## React App 실행해보기

### npm run start

`npm run start` 명령어를 입력하여 리액트 앱을 시작할 수 있다.

터미널에서 커서가 있는 채로 `control + C` 를 누르면 서버를 종료할 수 있다.

## SPA (Single Page Application)

App.js 파일의 소스 코드를 변경하면 변경한 부분이 화면에 적용된다.

### public/index.html

![스크린샷 2023-12-04 오후 4 52 40](https://github.com/peesechizza/TIL/assets/110324109/93c580b2-d9e7-4be0-b6ea-829bfe54b69a)

HTML템플릿 파일이다. div 요소의 id는 root 이다.

### src/index.js

![스크린샷 2023-12-04 오후 4 53 22](https://github.com/peesechizza/TIL/assets/110324109/a8467b13-dcd2-4daf-a53d-4a80449f050a)

자바스크립트의 시작점이다. 여기서 root이라는 id를 가진 div 요소를 잡아준다. 그래서 그 요소 안에서 화면을 꾸밀 수 있게 된다.

### Single Page Application (SPA)

index.html 템플릿이 하나면 한 개의 페이지를 만들 때는 괜찮은데 두 개의 페이지를 만들 때는 예전에는 a.html, b.html 같이 하나씩 html 파일을 만들어 주었다.

위와 같은 방식이 전통적인 웹 사이트를 만들 때 사용하는 Multi Page Application이다. 하지만 요즘에는 **웹 사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현**한다. 이것을 SPA라고 부른다.

SPA에서 화면 변경은 HTML 5의 History API를 사용해서 가능하게 만든다. 자바 스크립트 영역에서 History API를 이용해서 현재 페이지 내에서 화면 이동이 일어난 것 처럼 작동하게 해준다.

**History API**

- History.back()
  - 세션 기록의 바로 뒤 페이지로 이동하는 비동기 메서드
- History.forward()
  - 세션 기록의 바로 앞 페이지로 이동하는 비동기 메서드
- History.go()
  - 특정한 세션 기록으로 이동하게 해주는 비동기 메서드. 1을 넣어 호출하면 바로 앞 페이지로, -1 을 넣어 호출하면 바로 뒤 페이지로 이동한다.
- History.pushState()
  - 주어진 데이터를 세션 기록 스택에 넣는다. 직렬화 가능한 모든 Javascript 객체를 저장하는 것이 가능하다.
- History.replaceState()
  - 최근 세션 기록 스택의 내용을 주어진 데이터로 교체한다.

## JSX(Javascript syntax extension)

JSX는 자바스크립트의 확장 문법이다. 리액트에서는 이 JSX를 이용해서 화면에서 UI가 보이는 모습을 나타내준다.

JSX를 이용하면 UI를 나타낼 때 자바스크립트(logic)와 HTML구조(markup)를 같이 사용할 수 있기 때문에 기본 UI에 데이터가 변하는 것들이나 이벤트들이 처리되는 부분을 더욱 쉽게 구현할 수 있다.

React.createElement API를 사용해서 엘리먼트를 생성한 후 이 엘리먼트를 In-Memory에 저장한다. 그리고 ReactDOM.render 함수를 사용해서 실제 웹 브라우저에 그려준다.

```jsx
const myelement = React.createElement("h1", {}, "I d not user JSX!"); // React.createElement

ReactDOM.render(myelement, document.getElemendById("root")); // ReactDOM.render
```

모든 UI를 만들때마다 createElement를 사용해서 컴포넌트를 만들 수 없기 때문에 JSX를 사용한 후 그걸 바벨이 다시 createElement로 바꿔서 사용한다.

JSX를 사용하면서 지켜야 할 규칙이 많은데, 그 중 JSX는 컴포넌트에 여러 엘리먼트 요소가 있다면 반드시 부모 요소 하나로 감싸줘야 한다.

```jsx
// wrong code
function hello() {
		return (
				<div>Hello world!</div>
				<div>what are you doing </div>
		)
}

// right code
function hello() {
		return ( <div>
				<div>Hello world!</div>
				<div>what are you doing </div>
		</div>
		)
}
```

## 할 일 목록 앱 만들기 시작

- 원래 있던 안쓰는 부분들 지우기
  - App.js
  - App.css
  - index.css
    ```css
    body {
      background-color: aliceblue;
    }
    ```
- 컨테이너 만들기

  - Class형 Component 로 만들기
  - `import React, {Component} from “react”`
    - 리액트 라이브러리에서 리액트와 component 클래스를 가져온다

  ```jsx
  import React, { Component } from "react";
  import "./App.css";

  export default class App extends Component {
    render() {
      return (
        <div className="container">
          <div className="todoBlock">
            <h1>할 일 목록</h1>
          </div>
        </div>
      );
    }
  }
  ```

  css 파일을 가져오기 위해서 `import "./App.css";`

  ```css
  .container {
    margin: auto;
    max-width: 600px;
  }

  .todoBlock {
    padding: 30px;
    margin-top: 50px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: -9px 17px 13px rgb(0 0 0 / 16%);
  }
  ```

  JavaScript 에서 사용하는 것이므로 요소의 class 명은 class가 아닌 `className`으로 정한다.

## 할 일 목록 UI 만들기 (JSX, CSS 작성)

### 하나의 목록 JSX(HTML) 추가하기

```jsx
export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right ",
  };

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>Todo List</h1>
          </div>

          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false} />
            공부하기
            <button style={this.btnStyle}>X</button>
          </div>
        </div>
      </div>
    );
  }
}
```

## Map 메서드를 사용한 할 일 목록 나열

1. 객체를 만들어준다.

```jsx
todoData = [
  {
    id: "1",
    title: "공부하기",
    completed: true,
  },
  {
    id: "2",
    title: "청소하기",
    completed: false,
  },
];
```

1. map 메서드를 이용하여 목록을 나열한다.

```jsx
{
  this.todoData.map((data) => (
    <div style={this.getStyle()} key={data.id}>
      <input type="checkbox" defaultChecked={false} />
      {data.title}
      <button style={this.btnStyle}>X</button>
    </div>
  ));
}
```

## JSX Key 속성 이해하기

리액트에서 요소의 리스트를 나열할 때는 Key를 넣어줘야 한다. 넣지 않으면 에러가 발생한다.

`Warning: Each child in a list should have a unique "key" prop.`

**키는 React가 변경, 추가 또는 제거된 항목을 식별하는데 도움이 된다**. 요소에 안정적인 ID를 부여하려면 배열 내부의 요소에 키를 제공해야 한다.

Key를 선택하는 가장 좋은 방법은 리스트의 다른 항목들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 사용하는 것이다.

## Filter 메서드를 사용해서 할 일 목록 지우기

`filter()` 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

- **클릭 이벤트 발생 시 함수 호출하기**

```jsx
<button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>
```

```jsx
handleClick = (id) => {
  let newTodoData = this.todoData.filter((data) => data.id !== id);
  console.log(newTodoData);
};
```

## React State

리액트에서 데이터가 변할 때 화면을 다시 렌더링 해주기 위해서는 **React State**를 사용해야 한다.

React State는 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체이다. State가 변경되면 컴포넌트는 Re-rendring 된다. 또한 State는 컴포넌트 안에서 관리된다.

### 리액트 State 생성하기

기존에 만들었던 todoData 객체를 state에 넣어준다.

```jsx
state = {
  todoData: [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    },
  ],
};
```

```jsx
{
  this.state.todoData.map((data) => (
    <div style={this.getStyle()} key={data.id}>
      <input type="checkbox" defaultChecked={false} />
      {data.title}
      <button style={this.btnStyle}>X</button>
    </div>
  ));
}
```

기존에 객체를 이용한 map 메서드의 값도 변경해준다.

### State를 이용한 할 일 목록 삭제하기

```jsx
handleClick = (id) => {
  let newTodoData = this.state.todoData.filter((data) => data.id !== id);
  this.setState({ todoData: newTodoData });
};
```

`setState()` 는 컴포넌트의 state 객체에 대한 업데이트를 실행한다. state가 변경되면, 컴포넌트는 리렌더링 된다.

## 할 일 목록 추가하기

### 할 일 목록 입력하기

```jsx
<form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
  <input
    type="text"
    name="value"
    style={{ flex: "10", padding: "5px" }}
    placeholder="해야 할 일을 입력하세요."
    value=""
  />
  <input type="submit" value="입력" className="btn" style={{ flex: "1" }} />
</form>
```

input에 데이터를 입력할 때 state 변경이 되어야 한다. state에 value 값을 추가하고, 데이터를 입력할 때 함수를 호출한다.

```jsx
state = {
  todoData: [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    },
  ],
  value: "", // 추가
};
```

```jsx
handleChange = (e) => {
  this.setState({ value: e.target.value });
};

<form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
  <input
    type="text"
    name="value"
    style={{ flex: "10", padding: "5px" }}
    placeholder="해야 할 일을 입력하세요."
    value={this.state.value}
    onChange={this.handleChange}
  />
  <input type="submit" value="입력" className="btn" style={{ flex: "1" }} />
</form>;
```

### 할 일 목록 추가하기

```jsx
<form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
  ...
</form>
```

입력 버튼 클릭 시 목록에 추가하고, 입력란에 있던 글씨를 지워준다.

```jsx
handleSubmit = (e) => {
  // form 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
  e.preventDefault();

  // 새로운 할 일 데이터
  let newTodo = {
    id: Date.now(),
    title: this.state.value,
    completed: false,
  };

  // 원래 있던 할 일에 새로운 할 일 더해주기, 입력란에 있던 글씨 지워주기
  this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
};
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

## 마무리 된 일 표시하기 (조건부 삼항 연산자)

- `completed: true` 인 목록에만 선 긋기

```jsx
{
  this.state.todoData.map((data) => (
    <div style={this.getStyle(data.completed)} key={data.id}>
      <input
        type="checkbox"
        defaultChecked={false}
        onChange={() => this.handleCompleteChange(data.id)}
      />{" "}
      {data.title}
      <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>
        X
      </button>
    </div>
  ));
}
```

- completed가 true일 경우 취소선, false 일 경우 none

```jsx
getStyle = (completed) => {
  return {
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: completed ? "line-through" : "none",
  };
};
```

- `handleCompleteChange` 체크 박스 클릭해서 완료 상태 바꾸기

```jsx
handleCompleteChange = (id) => {
  let newTodoData = this.state.todoData.map((data) => {
    if (data.id === id) {
      data.completed = !data.completed;
    }
    return data;
  });
  this.setState({ todoData: newTodoData });
};
```
