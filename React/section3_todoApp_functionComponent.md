# 3. To-Do 앱 최적화 하기

## **React Hooks란 무엇인가?**

React Hooks는 **class 없이 state를 사용할 수 있는 새로운 기능**이다.

원래 React는 주로 Class Component를 사용하고 React Hooks는 Functional Component를 주로 사용한다.

Class Component는 더 많은 기능을 제공하고, 복잡하고 양이 긴 코드, 더딘 성능의 특징을 가지고 있다.

반면에 Functional Component는 더 적은 기능과, 심플하고 짧은 코드, 더 빠른 성능의 특징이 있다.

함수형 컴포넌트에서 더 적은 기능을 제공하지만 React Hooks가 발표되고 나서 함수형 컴포넌트에서 많은 기능을 쓸 수 있게 되었다.

![리액트생명주기](https://velog.velcdn.com/images/soyeon9819/post/0ee55c3b-4621-4bb7-9747-276accc3b254/image.png)

컴포넌트는 생성 (mounting) → 업데이트 (updating) → 제거 (unmounting) 의 생명주기를 갖는다. 리액트 클래스 컴포넌트는 라이프 사이클 메서드를 사용하고, 함수형 컴포넌트에서는 생명주기를 사용을 못했기 때문에 클래스형 컴포넌트를 써왔었다. 하지만 React Hooks 업데이트로 함수형 컴포넌트에서도 생명주기를 사용할 수 있게 되었다.

componentDidMount, componentDidUpdate, componentWillUnmount 모두를 Hooks 에서는 useEffect를 이용해서 처리해준다.

### HOC (Higher Order Component)

**화면에서 재사용 가능한 로직만을 분리해서 component로 만들고**, 재사용 불가능한 UI와 같은 다른 부분들은 parameter로 받아서 처리하는 방법이다.

공통적인 부분은 HOC 컴포넌트에 넣어주고 그 HOC 컴포넌트로 각각의 컴포넌트를 감싸주면 모든 컴포넌트에 따로 인증을 위한 부분은 넣어주지 않아도 된다. Hooks가 나오기 전에는 추천되는 방법이었다. 이 방법의 문제점은 너무 많은 Wrapper 컴포넌트가 생길 수 있다는 점이다. 이렇게 되면 데이터 흐름을 파악하기가 힘들어진다.

React Hooks 에서는 HOC 대신에 따로 Custom Hooks를 이용해서 컴포넌트를 만들어서 처리해주므로 Wrapper가 많아지는 일을 방지할 수 있다.

> 🔗 **출처**
>
> [**[React.js] 리액트 라이프사이클(life cycle) 순서, 역할, Hook**](https://velog.io/@minbr0ther/React.js-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4life-cycle-%EC%88%9C%EC%84%9C-%EC%97%AD%ED%95%A0)

## **To-Do 앱을 클래스 컴포넌트에서 함수형 컴포넌트로 바꾸기**

1. **컴포넌트 바꾸기**

   ```jsx
   export default class App extends Component // 클래스 컴포넌트

   export default function App() // 함수형 컴포넌트
   ```

   ```jsx
   import React, { Component } from "react";
   ```

   리액트에서 컴포넌트 클래스를 가져왔었는데 함수형 컴포넌트를 사용하면 필요 없으므로 삭제해준다.

   ```jsx
   import React from "react";
   ```

2. Class 컴포넌트에서는 render() 안에 return()을 사용했지만 함수형 컴포넌트에서는 render() 없이 바로 `return()`을 사용하면 된다.

   ```jsx
   // render() {
   	...
   	return(
   	...
   )
   // }
   ```

3. **State을 useState Hook를 이용해서 표현하기**

   useState Hook을 사용하기 위해서 import 해준다.

   ```jsx
   import React, { useState } from "react";
   ```

   ```jsx
   state = {
     todoData: [],
     value: "",
   };
   ```

   ```jsx
   const [todoData, setTodoData] = useState([]);
   const [value, setValue] = useState("");
   // const [변수 이름, State를 정하는 함수]
   ```

4. `this.state.todoDate` → `todoData` , `this.state.value` → `value`

   ```jsx
   // let newTodoData = this.state.todoData.filter((data) => data.id !== id);
   let newTodoData = todoData.filter((data) => data.id !== id);
   ```

   ```jsx
   value = {this.state.value}
   value = {value}
   ```

5. **state를 새로운 값으로 update**

   ```jsx
   // this.setState({ todoData: newTodoData });
   setTodoData(newTodoData);

   // this.setState({ value: e.target.value });
   setValue(e.target.value);
   ```

   ```jsx
   // this.setState({ todoData: [...todoData, newTodo], value: "" });
   setTodoData((prev) => [...prev, newTodo]);
   setValue("");
   ```

   Setter에서 이전 State를 가지고 오기 위해서는 인수에 함수를 이용해서 사용할 수 있다.

6. **함수 및 정의 방법 변경**

   ```jsx
   const handleClick
   ...
   // 모든 함수 및 변수 재정의
   ```

7. **정의된 함수 및 메서드 사용 방법 변경**

   ```jsx
   // this.handleClick(data.id)
   handleClick(data.id);
   ```

## State, Props

### props

props는 **properties**를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소이다. props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있다.

props는 읽기 전용 (immutable)으로 자녀 컴포넌트 입장에서는 변하지 않는다.

### state

리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값(mutable)을 의미한다. state이 변하면 re-render 된다.

## 할 일 목록 부분을 위한 컴포넌트 생성하기 ( 컴포넌트 분리하기 )

### 할 일 목록 부분 (리스트) 새로운 컴포넌트에 넣기

- **src 안에 components 폴더 생성 후 Lists.js 파일 생성 (es7 Extension 설치 후 rfc 입력하면 자동 생성)**

  ```jsx
  import React from "react";

  export default function Lists() {
    return <div>Lists</div>;
  }
  ```

- 해당하는 UI 코드 옮기기
  ```jsx
  return (
    <div>
      {todoData.map((data) => (
        <div style={getStyle(data.completed)} key={data.id}>
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={() => handleCompleteChange(data.id)}
          />{" "}
          {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
  ```
- 필요한 State, 함수 가져오기
  - `getStyle`, `btnStyle`, `handleCompleteChange`, `handleClick`
- Lists 컴포넌트에 Props 내려주기
  ```jsx
  <Lists todoData={todoData} setTodoData={setTodoData} />
  ```
- Props로 필요한 데이터 함수 가져오기
  ```jsx
  export default function Lists({ todoData, setTodoData }) {
  ```

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

**객체 구조 분해 할당**

```jsx
function buildAnimal(animalData) {
  let { accessory, animal, color, hairType } = animalData;
}

let obj = {
  accessory: "horn",
  animal: "horse",
  color: "purple",
  hairType: "culry",
};
```

```jsx
const studentDetails = {
  firstName: "John",
  lastName: "Mary",
};

const { firstName: fName = "not given", lastName } = studentDetails;

console.log(fName);
console.log(lastName);
```

**깊게 들어간 객체 구조 분해 할당**

```jsx
let person = {
  name: "Maya",
  age: 30,
  phone: "123",
  address: {
    zipcode: 1234,
    street: "rainbow",
    number: 42,
  },
};

let {
  address: { zipcode, street, number },
} = person;
console.log(zipcode, street, number); // 1234 rainbow 42
```

## Form 부분을 위한 컴포넌트 생성하기

- **Form 컴포넌트 생성 ( /components/Form.js )**

  ```jsx
  import React from "react";

  export default function Lists() {
    return <div></div>;
  }
  ```

- **UI 부분 가져오기**

  ```jsx
  import React from "react";

  export default function Lists() {
    return (
      <div>
        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
  ```

- **필요한 함수 가져오기**
  ```jsx
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  ```
- **Form 컴포넌트에 Props 내려주기**
  ```jsx
  <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
  ```
- **Props로 필요한 데이터 함수 가져오기**
  ```jsx
  export default function Form({ handleSubmit, value, setValue }) {
  ```

## Tailwind CSS

HTML 안에서 CSS 스타일을 만들 수 있게 해주는 CSS 프레임 워크이다.

### CSS 프레임워크

CSS 프레임워크는 레이아웃 및 여러 컴포넌트 구성, 브라우저 호환성을 보장하는데 소요되는 시간을 최소화하기 위해 여러 웹 개발/디자인 프로젝트에 적용할 수 있는 CSS 파일 모음이다. 더 빠르게 애플리케이션을 스타일링 하는데 도움을 준다.

### Tailwind CSS 장점

Tailwind CSS는 부트스트랩과 비슷하게 m-1, flex와 같이 미리 세팅된 Utiliry Class를 활용하는 방식으로 HTML에서 스타일링을 할 수 있다.

빠른 스타일링 작업이 가능하고, class 혹은 id 명을 수월하게 작성할 수 있고, 유틸리티 클래스를 사용하여 익숙하지 않지만 IntelliSense 플러그인을 사용하면 된다.

### CRA에 Tailwind CSS 적용하기

- [**Setting up Tailwind CSS in a React App project**](https://tailwindcss.com/docs/guides/create-react-app)

## Tailwind CSS로 Todo 앱 스타일링 해주기

**원래 스타일링 지우기**

- `btnStyle`, `app.css`, `Form.js`, `Inline style`, `getStyle`

### App.js

```jsx
import React, { useState } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // form 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // 원래 있던 할 일에 새로운 할 일 더해주기, 입력란에 있던 글씨 지워주기
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>Todo List</h1>
        </div>

        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
```

### Form.js

```jsx
import React from "react";

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex pt-2">
        <input
          type="text"
          name="value"
          className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
          style={{ flex: "10", padding: "5px" }}
          placeholder="해야 할 일을 입력하세요."
          value={value}
          onChange={handleChange}
        />
        <input
          className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
          type="submit"
          value="입력"
        />
      </form>
    </div>
  );
}
```

### Lists.js

```jsx
import React from "react";

export default function Lists({ todoData, setTodoData }) {
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div className="items-center">
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => handleCompleteChange(data.id)}
              />{" "}
              <span className={data.completed ? "line-through" : undefined}>
                {data.title}
              </span>
            </div>
            <div className="items-center">
              <button
                className="px-4 py-2 float-right"
                onClick={() => handleClick(data.id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```
