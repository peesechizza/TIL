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

## Drag and Drop 기능 추가하기

### Drag and Drop 기능 구현 순서

- HTML 드래그 앤 드롭 API를 사용하여 원하는 목록을 드래그 가능하게 한다.
- 사용자가 드래그를 할 때 적절한 애니메이션을 준다.
- 사용자가 드래그를 멈췄는지 확인하고 애니메이션을 준다.
- 클라이언트가 목록을 재정렬한 경우 항목의 위치를 새 항목으로 업데이트한다.

### 필요 모듈 설치하기

터미널에 `npm install react-beautiful-dnd —save` 입력 후 설치한다.

![DragDropContext](https://blog.kakaocdn.net/dn/KN8Z6/btrsi8RiTdz/4fkz2ZOk4Ul0PkLG7vYBi0/img.gif)

### API를 이용한 틀 만들어주기

```jsx
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
```

사용하기 위해 import 해줘야한다.

```jsx
<div>
  <DragDropContext>
    <Droppable droppableId="todo">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {todoData.map((data, index) => (
            <Draggable
              key={data.id}
              draggableId={data.id.toString()}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  key={data.id}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded"
                >
                  <div className="items-center">
                    <input
                      type="checkbox"
                      defaultChecked={false}
                      onChange={() => handleCompleteChange(data.id)}
                    />{" "}
                    <span
                      className={data.completed ? "line-through" : undefined}
                    >
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
              )}
            </Draggable>
          ))}
          // placeholder 속성은 목록에 빈 공간을 만든다. 이렇게 하면 드래그 작업이
          자연스럽게 된다.
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
</div>
```

provided object에는 스타일 지정 및 조회를 위한 속성이 포함되어 있다.

### Dragging 하는 요소의 스타일링 변경

```jsx
<div
  key={data.id}
  {...provided.draggableProps}
  ref={provided.innerRef}
  {...provided.dragHandleProps}
  className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded}
>
```

### Dragging 한 후 데이터 순서 적용

```jsx
<DragDropContext onDragEnd={handleEnd}>
```

```jsx
const handleEnd = (result) => {
  // result 매개변수에는 source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함된다.
  console.log(result);

  // 목적지가 없으면 (이벤트 취소) 이 함수를 종료한다.
  if (!result.destination) return;

  // 리액트 불변성을 지켜주기 위해 새로운 todoData 생성
  const newTodoData = [...todoData];

  // 1. 변경시키는 아이템을 배열에서 지워준다.
  // 2. return 값으로 지워진 아이템을 잡아준다.
  const [reorderedItem] = newTodoData.splice(result.source.index, 1);

  // 원하는 자리에 reorderedItem을 insert 해준다.
  newTodoData.splice(result.destination.index, 0, reorderedItem);
  setTodoData(newTodoData);
};
```

### Drag and Drop 오류

리액트 18버전을 사용할 때 드래그 앤 드랍 기능을 사용하면 아래같은 에러가 나온다.

```
Uncaught runtime errors:

ERROR

Invariant failed: Cannot find droppable entry with id [todo]
    at handleError (http://localhost:3000/static/js/bundle.js:49817:58)
    at http://localhost:3000/static/js/bundle.js:49836:7
```

그럴 때는 index.js에서 React.StrictMode를 제거해주면 된다.

```jsx
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

🔗 [출처]

[**[React.js] react strict 모드란?**](https://velog.io/@kysung95/%EC%A7%A4%EB%A7%89%EA%B8%80-react-strict-%EB%AA%A8%EB%93%9C%EB%9E%80)

## 리액트 불변성 지키기

### 리액트에서 불변성이란 무엇인가?

불변성이란 사전적 의미로는 값이나 상태를 변경할 수 없는 것을 의미한다.

### 자바스크립트 타입을 통한 불변성 의미

원시 타입은 불변성(immutable)을 가지고 있고 참조 타입은 그렇지 않다(mutuable).

- 원시 타입 : Boolean, String, Number, null, undefined, Symbol
- 참조 타입 : Object, Array

![스크린샷 2023-12-06 오후 7 28 13](https://github.com/peesechizza/TIL/assets/110324109/d7aa8e97-ccb7-4bca-b7cc-27184c0679ea)

기본적으로 Javascript는 원시 타입에 대한 참조 및 값을 저장하기 위해 Call Stack 메모리 공간을 사용하고 실제 데이터가 변수에 할당된다. 참조 타입의 경우 Heap이라는 별도의 메모리 공간을 사용한다. 이 경우 Call Stack은 개체 및 배열 값이 아닌 메모리에만 Heap 메모리 참조 ID를 값으로 지정한다.

원시 타입의 예로 `let username = “walter”` 에서 `username = “john”` 으로 값을 변경 시 대체한 것이 아니라 메모리 영역 a에 있는 walter라는 값을 그대로 두고 메모리 영역 b에 john을 새로 할당한 것이다.

하지만, 배열에 대한 요소를 추가하거나 객체 속성값을 변경할 때 Call Stack의 참조 ID는 동일하게 유지되고 Heap 메모리에서만 변경된다.

### 불변성을 지켜야 하는 이유

1. 참조 타입에서 객체나 배열의 값이 변할 때 원본 데이터가 변경되기 때문에 이 원본 데이터를 참조하고 있는 다른 객체에서 예상치 못한 오류가 발생할 수 있어 프로그래밍의 복잡도가 올라간다.
2. 리액트에서 화면을 업데이트 할 때 불변성을 지켜서 값을 이전 값과 비교해서 변경된 사항을 확인한 후 업데이트하기 때문에 불변성을 지켜줘야한다.

### 불변성을 지키는 방법

참조 타입에서 값을 바꿨을 때 Call Stack 주소 값은 같은데 Heap 메모리 값만 바꿔주기에 불변성을 유지할 수 없었으므로 새로운 배열을 반환하는 메소드를 사용하면 된다.

- `spread operator`, `map`, `filter`, `slice`, `reduce`
- 원본 데이터를 변경하는 메서드 - `splice`, `push`

## List 컴포넌트 생성하기

1. **components 폴더에 List.js 파일 생성**
2. **함수형 컴포넌트 생성**

   ```jsx
   import React from "react";

   const List = () => {
     return <div>List</div>;
   };

   export default List;
   ```

3. **UI 부분 List 컴포넌트 이동**

   ```jsx
   import React from "react";

   const List = () => {
     return (
       <div
         key={data.id}
         {...provided.draggableProps}
         ref={provided.innerRef}
         {...provided.dragHandleProps}
         className={`${
           snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
         } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
       >
         <div className="items-center">
           <input
             type="checkbox"
             defaultChecked={false}
             onChange={() => handleCompleteChange(data.id)}
           />{" "}
           <span className={data.completed ? "line-through" : undefined}>
             {title}
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
     );
   };

   export default List;
   ```

4. **함수 List 컴포넌트 이동**

   ```jsx
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
   ```

5. **Lists 컴포넌트에서 List 컴포넌트 import 및 props 내려주기**

   ```jsx
   <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
     {(provided, snapshot)} => (
     <List
       key={data.id}
       id={data.id}
       title={data.title}
       completed={data.completed}
       todoData={todoData}
       setTodoData={setTodoData}
       provided={provided}
       snapshot={snapshot}
     />
     )}
   </Draggable>
   ```

6. **List 컴포넌트에서 Props 받아오기**

   ```jsx
   const List = ({ id, title, completed, todoData, setTodoData, provided, snapshot}) => {
   ```

7. `data.id` ⇒ id 변경 …

## React.memo 를 이용한 컴포넌트 렌더링 최적화

### 현재 Todo 앱의 문제점

현재 Todo 앱에서 App, Lists, List, Form 컴포넌트로 나눠져 있다. 이렇게 나눠준 이유는 재사용성과 각 컴포넌트의 최적화를 위해서이다.

현재 Form 에서 글을 타이핑할 때 Form 컴포넌트와 그 State 값을 가지고 있는 App 컴포넌트만 렌더링이 되어야하는데, 글자 입력마다 props가 바뀌지 않아서 렌더링 하지 않아도 되는 Lists 컴포넌트와 List 컴포넌트까지 다시 렌더링 된다.

### React.memo

React.memo 적용은 간단하게 원하는 컴포넌트를 `React.memo` 로 감싸주면 된다.

```jsx
const Lists = React.memo(({ todoData, setTodoData })) => {
```

## useCallback을 이용한 함수 최적화

원래 컴포넌트가 렌더링 될 때 안에 있는 함수도 다시 만들게 된다. 컴포넌트가 리렌더링 될 때 마다 함수를 계속 다시 만든다고 하면 자식 컴포넌트에 props로 내려 주게되면 함수를 포함하고 있는 컴포넌트가 리렌더링 될 때 마다 자식 컴포넌트도 함수가 새롭게 만들어지면서 계속 리렌더링 되게 된다.

1. 삭제 버튼 함수 App 컴포넌트로 이동
2. props로 함수 넘겨주기
   - 원래는 React.memo로 감싸줘서 리렌더링 되지 않던 컴포넌트들이 한 글자 입력마다 Lists 컴포넌트와 List 컴포넌트까지 다시 리렌더링 되는 걸 볼 수 있다.

### `React.useCallback` 적용으로 문제 해결

useCallback 적용은 useCallback 안에 콜백함수와 의존성 배열을 순서대로 넣으면 된다.

```jsx
onst handleClick = useCallback((id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  }, [todoData]);
```

함수 내에서 참조하는 state, props가 있다면 의존성 배열에 추가하면 된다.

`useCallback`으로 인해서 todoData가 변하지 않는다면 함수는 새로 생성되지 않는다. 새로 생성되지 않기 떄문에 메모리에 새로 할당되지 않고 동일 참조 값을 사용하게 된다.

의존성 배열에 아무것도 없다면 컴포넌트가 최초 렌더링 시에만 함수가 생성되며 그 이후에는 동일한 참조값을 사용하는 함수가 된다.

## useMemo를 이용한 결과값 최적화

### Memoization

memoization은 비용이 많이 드는 함수 호출 결과를 저장하고 동일한 입력이 발생할 때 캐시된 결과를 반환하여 컴퓨터 프로그램의 속도를 높이는데 주로 사용되는 최적화 기술이다.

```jsx
function Component({ a, b }) {
  const result = compute(a, b);
  return <div>{result}</div>;
}
```

component 내의 compute 함수가 만약 복잡한 연산을 수행하면 결과 값을 리턴하는데 오랜 시간이 걸리게 된다. 컴포넌트가 계속 리렌더링 된다면 연산을 수행하는데 오랜 시간이 걸려 성능이 안좋아지고, UI 지연 현상이 일어날 것이다.

이러한 현상을 해결해주기 위해서 사용하는 것이 useMemo이다.

### useMemo

useMemo로 감싸준 후에 함수를 넣어주고, 의존성 배열을 넣어준다.

```jsx
function Component({ a, b }) {
  const result = useMemo(() => compute(a, b), [a, b]);
  return <div>{result}</div>;
}
```

## 리액트 확장 프로그램 추가하기

chrome 에서 [**React Developer Tools**](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)을 다운 받는다.

### 익스텐션을 이용해서 렌더링 되는 부분 표시하기

Components 탭에서 Highlight updates 부분을 체크해주면 쉽게 컴포넌트가 렌더링 되는 것을 볼 수 있다.

## 할 일 리스트 모두 지우기 버튼 생성

```jsx
<div className="flex justify-between mb-3">
  <h1>Todo List</h1>
  <button onClick={handleRemoveClick}>Delete All</button>
</div>
```

```jsx
const handleRemoveClick = () => {
  setTodoData([]);
};
```

## 할 일 목록을 수정하는 기능 추가

1. **다른 UI 제공을 위한 State 생성**

   ```jsx
   const [isEditing, setIsEditing] = useState(false);
   const [editedTitle, setEditedTitle] = useState(title);
   ```

2. Edit 버튼 추가, 클릭 시 isEditing State 변경

   ```jsx
   <div className="items-center">
     <button className="px-4 py-2 float-right" onClick={() => handleClick(id)}>
       X
     </button>
     <button
       className="px-4 py-2 float-right"
       onClick={() => setIsEditing(true)}
     >
       edit
     </button>
   </div>
   ```

3. 조건에 따른 UI 렌더링

   ```jsx
   if (isEditing) {
   		return (
   				<div>editing...</div>
   		)
   } else {
   		return ( ...

   ```

4. editing시 UI 작성

   ```jsx
   <div
     className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
   >
     <div className="items-center">
       <form>
         <input
           className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
           value={editedTitle}
         />
       </form>
     </div>
     <div className="items-center">
       <button
         className="px-4 py-2 float-right"
         onClick={() => setIsEditing(false)}
       >
         X
       </button>
       <button className="px-4 py-2 float-right" type="submit">
         save
       </button>
     </div>
   </div>
   ```

5. editing 입력할 때 editedTitle State 변경

   ```jsx
   <input
     className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
     value={editedTitle}
     onChange={handleEditChange}
     autoFocus
   />
   ```

   ```jsx
   const handleEditChange = (event) => {
     setEditedTitle(event.target.value);
   };
   ```

6. editing 입력 후 Save

   ```jsx
   <form onSubmit={handleSubmit}>

   <button onClick={handleSubmit}>
   ```

   ```jsx
   const handleSubmit = () => {
     let newTodoData = todoData.map((data) => {
       if (data.id === id) {
         data.title = editedTitle;
       }
       return data;
     });
     setTodoData(newTodoData);
     setIsEditing(false);
   };
   ```
