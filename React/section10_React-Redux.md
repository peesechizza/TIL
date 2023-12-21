# 10. Redux

## Redux란?

자바스크립트 애플리케이션을 위한 상태 관리 라이브러리이다. Redux는 State를 관리한다.

**Props**

- properties의 줄임말이다.
- Props는 구성 요소가 서로 통신하는 방법이다.
- Props는 상위 구성 요소에서 아래쪽으로 흐른다.
- 해당 값을 변경하려면 자신 관점에서 Props를 변경할 수 있으며, 부모는 내부 상태를 변경해야 한다.

**State**

- 컴포넌트 안에서 데이터를 전달할 때 사용한다.
- State는 변경 가능하다.
- state이 변하면 re-render 된다.

### Redux Data Flow

![reduxflow](https://github.com/peesechizza/Algorithm/assets/110324109/d82c9517-0727-4461-8be1-0a4933bd56f5)

![reduxdataflow](https://github.com/peesechizza/Algorithm/assets/110324109/67c134c6-d961-493c-bcc9-848d9be96f03)

**Action**

**Action은 간단한 JavaScript 객체이다**. 수행하는 작업의 유형을 지정하는 `type` 속성이 있으며 선택적으로 redux 저장소에 일부 데이터를 보내는데 사용되는 `payload` 속성을 가질수도 있다.

**Reducer**

Reducer는 애플리케이션 **상태의 변경 사항을 결정하고 업데이트된 상태를 반환하는 함수이다.** 인수로 조치를 취하고 **store 내부의 상태를 업데이트 한다.**

**Redux Store**

객체 저장소 Redux Store는 **애플리케이션의 전체 상태 트리를 보유한다**. **내부 상태를 변경하는 유일한 방법은 해당 상태에 대한 Action을 전달하는 것**이다. Redux Store는 클래스가 아닌 몇 가지 method가 있는 객체이다.

**Dispatch**

Dispatch는 스토어의 내장 함수 중 하나로 reducer 함수에게 action을 발생하라고 시킨다.

## 미들웨어 없이 리덕스 카운터 앱 만들기

1. **리액트 앱 설치**

   `npx create-react-app my-app —template typescript`

2. **리덕스 라이브러리 설치**

   `npm install redux —save`

3. **Counter UI 및 함수 생성**

   `./src/App.tsx`

   ```
   import "./App.css";

   function App() {
     return (
       <div className="App">
         Clicked: times
         <button> + </button>
         <button> - </button>
       </div>
     );
   }

   export default App;
   ```

4. **Reducer 생성**

   `./src/reducers/index.tsx`

   ```tsx
   const counter = (state = 0, action: { type: string }) => {
     switch (action.type) {
       case "INCREMENT":
         return state + 1;
       case "DECREMENT":
         return state - 1;
       default:
         return state;
     }
   };

   export default counter;
   ```

5. **Store 생성 및 Action 전달**

   ```tsx
   import React from "react";
   import ReactDOM from "react-dom/client";
   import "./index.css";
   import App from "./App";
   import reportWebVitals from "./reportWebVitals";
   import { createStore } from "redux";
   import counter from "./reducers";

   const root = ReactDOM.createRoot(
     document.getElementById("root") as HTMLElement
   );

   const store = createStore(counter);

   root.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );

   reportWebVitals();
   ```

   > **CreateStore()**
   >
   > 앱의 전체 상태 트리를 보유하는 Redux 저장소를 만든다. 앱에는 하나의 스토어만 있어야 한다.

   ```tsx
   import React from "react";
   import ReactDOM from "react-dom/client";
   import "./index.css";
   import App from "./App";
   import reportWebVitals from "./reportWebVitals";
   import { createStore } from "redux";
   import counter from "./reducers";

   const root = ReactDOM.createRoot(
     document.getElementById("root") as HTMLElement
   );

   const store = createStore(counter);

   root.render(
     <React.StrictMode>
       <App
         value={store.getState()}
         onIncrement={() => store.dispatch({ type: "INCREMENT" })}
         onDecrement={() => store.dispatch({ type: "DECREMENT" })}
       />
     </React.StrictMode>
   );

   reportWebVitals();
   ```

   > **getState()**
   >
   > 애플리케이션의 현재 상태 트리를 반환한다. 스토어의 리듀서가 반환한 마지막 값과 같다.

   ```tsx
   import "./App.css";
   type Props = {
     value: number;
     onIncrement: () => void;
     onDecrement: () => void;
   };

   function App({ value, onIncrement, onDecrement }: Props) {
     return (
       <div className="App">
         Clicked: {value} times
         <button onClick={onIncrement}> + </button>
         <button onClick={onDecrement}> - </button>
       </div>
     );
   }

   export default App;
   ```

   현재까지는 action을 dispatch 해서 실제로 스토어에 있는 값은 변경이 되었지만 화면에서 바뀐 것을 보여주려면 다시 바뀐 값을 가져와서 보여줘야 한다. 그럴 때는 `subscribe()` 메소드를 사용하면 된다. subscribe 메소드에 리스너를 넣어주면 action이 dispatch 될 때 마다 리스너 콜백 함수가 다시 호출되어서 바뀐 값을 보여주게 된다.

   > **subscribe()**
   >
   > listener 함수를 등록한다. Action이 dispatch 될 때 마다 리스너 함수가 호출되고 getState()를 호출하여 콜백 내부의 현재 상태 트리를 읽을 수 있다.

   ```tsx
   import React from "react";
   import ReactDOM from "react-dom/client";
   import "./index.css";
   import App from "./App";
   import reportWebVitals from "./reportWebVitals";
   import { createStore } from "redux";
   import counter from "./reducers";
   import { subscribe } from "diagnostics_channel";

   const root = ReactDOM.createRoot(
     document.getElementById("root") as HTMLElement
   );

   const store = createStore(counter);

   const render = () =>
     root.render(
       <React.StrictMode>
         <App
           value={store.getState()}
           onIncrement={() => store.dispatch({ type: "INCREMENT" })}
           onDecrement={() => store.dispatch({ type: "DECREMENT" })}
         />
       </React.StrictMode>
     );

   render();
   store.subscribe(render);
   reportWebVitals();
   ```

## combineReducers

### root reducer, sub reducer

현재까지 counter 리듀서만 있는데 하나를 더 추가하려면 Root 리듀서를 만들어서 그 아래 counter와 todos라는 서브 리듀서를 넣어주면 된다. Root 리듀서를 만들 때 사용하는 것이 combineReducers이다.

1. `**./src/reducers/counter.tsx` , `./src/reducers/index.tsx` , `./src/reducers/todos.tsx` 생성\*\*

   ```tsx
   import { combineReducers } from "redux";
   import counter from "./counter";
   import todos from "./todos";

   const rootReducer = combineReducers({ todos, counter });

   export default rootReducer;
   ```

   ```tsx
   enum ActionType {
     ADD_TODO = "ADD_TODO",
     DELETE_TODO = "DELETE_TODO",
   }

   interface Action {
     type: ActionType;
     text: string;
   }

   const todos = (state = [], action: Action) => {
     switch (action.type) {
       case "ADD_TODO":
         return [...state, action.text];
       default:
         return state;
     }
   };

   export default todos;
   ```

   ```
   interface Action {
     type: string;
   }

   const counter = (state = 0, action: Action) => {
     switch (action.type) {
       case "INCREMENT":
         return state + 1;
       case "DECREMENT":
         return state - 1;
       default:
         return state;
     }
   };

   export default counter;
   ```

2. **createStore에 루트 리듀서로 대체**

   ```tsx
   import rootReducer from "./reducers";

   // ...

   const store = createStore(rootReducer);
   ```

## Redux Provider

### Provider란?

<Provider> 구성 요소는 Redux Store 저장소에 액세스해야 하는 모든 중첩 구성 요소에서 Redux Store 저장소를 사용할 수 있도록 한다.

1. **Provider 컴포넌트 이용하기**

   `npm install react-redux --save` 설치 후 `npm run start` 재실행

2. **Provider 렌더링**

   React Redux 앱의 모든 React 구성 요소는 저장소에 연결할 수 있으므로 대부분의 응용 프로그램은 전체 앱의 구성 요소 트리가 내부에 있는 최상위 수준에서 <Provider>를 렌더링 한다.

   그런 다음 Hooks 및 연결 API는 React의 컨텍스트 메커니즘을 통해 제공된 저장소 인스턴스에 액세스 할 수 있다. → Index.js에서 Provider 이용

   ```tsx
   const store = createStore(rootReducer);

   store.dispatch({
     type: "ADD_TODO",
     text: "Use Redux",
   });

   const render = () =>
     root.render(
       <React.StrictMode>
         <Provider store={store}>
           <App
             value={store.getState()}
             onIncrement={() => store.dispatch({ type: "INCREMENT" })}
             onDecrement={() => store.dispatch({ type: "DECREMENT" })}
           />
         </Provider>
       </React.StrictMode>
     );
   ```

3. **Todo UI 생성**

   ```tsx
   import { useState } from "react";
   import "./App.css";

   type Props = {
     value: any;
     onIncrement: () => void;
     onDecrement: () => void;
   };

   function App({ value, onIncrement, onDecrement }: Props) {
     const [todoValue, setTodoValue] = useState("");

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setTodoValue(e.target.value);
     };

     const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       setTodoValue("");
     };

     return (
       <div className="App">
         {/* Clicked: {value} times */}
         <button onClick={onIncrement}> + </button>
         <button onClick={onDecrement}> - </button>
         <form onSubmit={addTodo}>
           <input type="text" value={todoValue} onChange={handleChange} />
           <input type="submit" />
         </form>
       </div>
     );
   }

   export default App;
   ```

## useSelector & useDispatch

provider로 둘러싸인 컴포넌트에서 store에 접근 가능하다.

### useSelector

useSelector Hooks를 이용해서 스토어의 값을 가져올 수 있다.

`const result: any = useSelector(selector: Function, equalityFn?: Function)`

```tsx
function App({ value, onIncrement, onDecrement }: Props) {
  const counter = useSelector((state) => state.counter);
```

`'state'은(는) 'unknown' 형식입니다.ts(18046)` 라는 에러가 발생한다.

### 에러 해결 방법

1. **Root Reducer에 RootState 타입을 생성하기**

   ```tsx
   import { combineReducers } from "redux";
   import counter from "./counter";
   import todos from "./todos";

   const rootReducer = combineReducers({ todos, counter });

   export default rootReducer;

   export type RootState = ReturnType<typeof rootReducer>;
   ```

2. **생성한 RootState을 State 객체에 제공하기**

   ```tsx
   function App({ value, onIncrement, onDecrement }: Props) {
     const counter = useSelector((state: RootState) => state.counter);
     const todos: string[] = useSelector((state: RootState) => state.todos);
   ```

   ```tsx
   return (
     <div className="App">
       Clicked: {counter} times
       <button onClick={onIncrement}> + </button>
       <button onClick={onDecrement}> - </button>
       <ul>
         {todos.map((todo, index) => (
           <li key={index}>{todo}</li>
         ))}
       </ul>
       <form onSubmit={addTodo}>
         <input type="text" value={todoValue} onChange={handleChange} />
         <input type="submit" />
       </form>
     </div>
   );
   ```

### useDispatch

store에 있는 dispatch 함수에 접근하는 hooks이다.

```tsx
const dispatch = useDispatch();

// ...

const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // store.dispatch({type: "ADD_TODO", text: todoValue})
  dispatch({ type: "ADD_TODO", text: todoValue });
  setTodoValue("");
};
```

## 리덕스 미들웨어

### 리덕스 미들웨어란 ?

Redux 미들웨어는 **액션을 전달하고(dispatch)** 리듀서에 도달하는 순간 사이에 사전에 지정된 작업을 실행할 수 있게 해주는 중간자이다.

### 리덕스 로깅 미들웨어 생성하기

1. **로깅 미들웨어 함수 생성 후 함수를 applyMiddleware 함수에 넣어주기**

   ```tsx
   const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
     console.log("store", store);
     console.log("action", action);
     next(action);
   };

   const middleware = applyMiddleware(loggerMiddleware);
   ```

   applyMiddleware는 하나 혹은 더 많은 미들웨어를 받은 후에 함수를 리턴하는 함수이다. applyMiddleware에서 언급한 모든 미들웨어는 차례로 실행된다.

2. **createStore에서 미들웨어 넣어주기**

   ```
   const middleware = applyMiddleware(loggerMiddleware);
   const store = createStore(rootReducer, middleware);
   ```

## Redux Thunk

### 리덕스 Thunk란?

리덕스를 사용하는 앱에서 비동기 작업을 할 때 많이 사용하는 방법이다. Redux 스토어의 dispatch 및 getState 메서드와 상호 작용할 수 있는 내부 로직이 있는 함수를 작성할 수 있다.

### Thunk는?

**일부 지연된 작업을 수행하는 코드 조각을 의미**하는 프로그래밍 용어이다.

### json placeholer api를 이용한 데이터 가져오기

비동기로 https://jsonplaceholder.typicode.com 에 요청을 보내면 Dummy 데이터를 받을 수 있다.

1. **Axios 모듈 설치**

   `npm install axios —save`

2. **posts 리듀서 생성**

   ```tsx
   enum ActionType {
     FETCH_POSTS = "FETCH_POSTS",
     DELETE_POSTS = "DELETE_POSTS",
   }

   interface Post {
     userId: number;
     id: number;
     title: string;
   }

   interface Action {
     type: ActionType;
     payload: Post[];
   }

   const posts = (state = [], action: Action) => {
     switch (action.type) {
       case "FETCH_POSTS":
         return [...state, ...action.payload];
       default:
         return state;
     }
   };

   export default posts;
   ```

   ```tsx
   import { combineReducers } from "redux";
   import counter from "./counter";
   import todos from "./todos";
   import posts from "./posts";

   const rootReducer = combineReducers({ todos, counter, posts });

   export default rootReducer;

   export type RootState = ReturnType<typeof rootReducer>;
   ```

### posts 데이터를 위한 요청 보내기

```tsx
useEffect(() => {
  dispatch(fetchPosts());
}, [dispatch]);

const fetchPosts = (): any => {
  return async function fetchPostsThunk(dispatch: any, getState: any) {
    const response = await axios.get(
      "https://jsonplacehorder.typicode.com/posts"
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};
```

### 에러 발생

위의 코드를 입력하면 에러가 난다. 원래 Actions은 객체여야 하는데 현재는 함수를 Dispatch하고 있다. `dispatch(fetchPosts());`

함수를 dispatch 할 수 있게 해주는 Redux-Thunk 미들웨어를 설치해서 사용한다.

1. **redux-thunk 설치**

   `npm install redux-thunk —save`

2. **redux-thunk 적용**

   ```tsx
   const middleware = applyMiddleware(thunk, loggerMiddleware);
   ```

3. **posts 데이터 화면에 표출**

   ```tsx
   interface Post {
     userId: number;
     id: number;
     title: string;
   }

   function App({ value, onIncrement, onDecrement }: Props) {
     const dispatch = useDispatch();
     const counter = useSelector((state: RootState) => state.counter);
     const todos: string[] = useSelector((state: RootState) => state.todos);
     const posts: Post[] = useSelector((state: RootState) => state.posts);
     const [todoValue, setTodoValue] = useState("");
   ```

   ```tsx
   return (
       <div className="App">
         Clicked: {counter} times
         <button onClick={onIncrement}> + </button>
         <button onClick={onDecrement}> - </button>
         <ul>
           {todos.map((todo, index) => (
             <li key={index}>{todo}</li>
           ))}
         </ul>
         <form onSubmit={addTodo}>
           <input type="text" value={todoValue} onChange={handleChange} />
           <input type="submit" />
         </form>
         <ul>
           {posts.map((posts, index) => (
             <li key={index}>{posts.title}</li>
           ))}
         </ul>
       </div>
   ```

### actions 폴더로 따로 분리

미들웨어는 중앙 집중식 접근 방식이므로 구성 요소를 더 간단하고 일반화해서 한 곳에서 데이터 흐름을 제어할 수 있다.

1. `actions/posts.tsx` 생성
