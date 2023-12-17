# **1. 리액트란**

## 리액트는 라이브러리

**React 는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리이다.** 리액트는 주로 인터렉션이 많은 웹앱을 개발하기 위해서 주로 사용된다.

웹 앱을 만드는 다른 Tool인 Vue 나 Angualar 와 많이 비교하게 되는데, Vue와 Angualar 는 **프레임워크**이고, 리액트는 **라이브러리이다**.

리액트는 전적으로 UI를 렌더링 하는데 관여한다. 화면을 바꾸는 라우팅은 react-router-dom 모듈을 사용하며, 상태 관리를 위해서는 redux, mobx 등 여러 모듈을 사용하며, 빌드를 위해서 webpack, npm 등을 사용하고 테스팅을 할 때는 Eslint, Mocha 등을 이용한다.

### Framework, Library

Framework는 어떠한 앱을 만들기 위해 필요한 대부분의 것을 가지고 있는 것이고, Library는 어떠한 특정 기능을 모듈화 해놓은 것이다.

Framework는 Library를 포함하고 또한 작성한 소스 코드를 호출한다. 그리고 소스 코드는 어떠한 기능을 구현하기 위해서 라이브러리를 호출하게 된다.

## 리액트 컴포넌트

**컴포넌트는** 리액트로 만들어진 앱을 이루는 최소한의 단위로, **리액트는 여러 컴포넌트 조각으로 되어 있다.**

하나의 페이지를 리액트로 만들면 여러 개의 컴포넌트로 이루어져 있다. 컴포넌트가 여러 개로 나누어져 있으면 하나의 컴포넌트를 여러 곳에서 사용할 수 있고 여러 명이 각자 맡은 컴포넌트를 동시에 수정할 수도 있다.

**클래스형 컴포넌트 (Class Components)**

```jsx
class App extends Component {
  render() {
    return <h1>안녕하세요.</h1>;
  }
}
```

**함수형 컴포넌트 (Functional Components)**

```jsx
function App() {
  return <h1>안녕하세요.</h1>;
}
```

원래 리액트로 개발할 때는 클래스형 컴포넌트를 이용해서 많이 개발했지만, 리액트 Hooks가 발표되고 나서는 함수형 컴포넌트를 이용해서 개발을 많이 한다고 한다.

## 브라우저가 그려지는 원리와 가상돔

리액트의 주요 특징 중 하나는 가상돔(Virtual Dom)을 사용한다는 것이다.

### 웹 페이지 빌드 과정 (Critical Rendering Path; CRP)

브라우저가 서버에서 페이지에 대한 HTML 응답을 받고 화면에 표시하기 전 여러 단계가 있다.

![CRP](https://dimension85.com/images/critical-render-path-large.jpg)

1. **DOM tree 생성 ( HTML, DOM, JavaScript, CSSOM; CSS Object Mode, CSS)**

   렌더 엔진이 문서를 읽어들여서 그것들을 파싱하고 어떠한 내용을 페이지에 렌더링 할 지 결정한다.

2. **Render tree 생성**

   이 단계는 브라우저가 DOM과 CSSOM을 결합하는 곳이며, 이 프로세스는 화면에 보이는 모든 콘텐츠와 스타일 정보를 모두 포함하는 최종 렌더링 트리를 출력한다. 즉, **화면에 표시되는 모든 노드의 콘텐츠 및 스타일 정보를 포함한다.**

3. **Layout (reflow)**

   이 단계는 브라우저가 페이지에 표시되는 각 요소의 크기와 위치를 계산하는 단계이다.

4. **Paint**

   이 단계는 실제 화면에 그리는 단계이다.

CRP 과정에서 어떤 인터렉션에 의해 DOM에 변화가 발생하면 Render tree가 그 때 마다 재생성 되어 모든 요소들의 스타일을 다시 계산하고 CRP 과정이 다시 거쳐지게 된다.

이러한 문제를 개선하기 위해 나온 것이 가상 돔(Virtual DOM)이다.

### 가상 돔 (Virtual DOM)

실제 DOM을 메모리에 복사해준 것이다. 자바스크립트 객체 형태로 메모리 안에 저장되어 있다.

가상 돔은 실제 돔과 같은 모양이지만 Real DOM 처럼 직접적으로 브라우저 문서에 접근 할 수 없다. 그래서 화면에 보이는 요소를 직접 수정할 수 없다.

리액트에서는 항상 렌더링 이전의 객체(가상돔)와 렌더링 이후의 객체를 가지고 있다.

![VirtualDom](https://teropa.info/blog/2015/03/02/images/onchange_vdom_change.svg)

리액트에서는 어떠한 State(데이터)가 바뀌면 가상돔이 새로 생성되고 이것을 이전에 생긴 가상돔과 비교해서 바뀐 부분만 실제 돔에 적용르 시켜준다.

바뀐 부분을 찾는 과정을 **Diffing** 이라고 부르며, 바뀐 부분만 실제 돔에 적용시켜주는 것을 **재조정(reconciliation)**이라고 부른다.

## 리액트 설치를 위해 필요한 것들 (Node.js, VSCode)

### Node.js

리액트 프로젝트를 만들기 위해서 Node.js 와 npm을 설치해야 한다. Node.js를 받을 때 NPM도 같이 설치 된다.

Node.js는 크롬 V8 자바스크립트 엔진으로 빌드한 자바스크립트 런타임으로서, 웹 브라우저 환경이 아닌 곳에서도 자바스크립트를 사용하여 연산할 수 있다.

### **리액트 설치 시 Node.js가 필요한 이유**

리액트 앱은 웹 브라우저에서 실행되는 코드이기 때문에 Node.js와 직접적인 연관은 없지만 프로젝트를 개발하는데 주요 도구들이 Node.js를 사용하기 때문에 필요하다. 이 때 사용하는 개발 도구는 **바벨**, 모듈화된 코드를 한 파일로 합치고 코드를 수정할 때 마다 웹 브라우저를 리로딩하는 등의 여러 가지 기능을 지닌 **웹팩** 등이 있다.

**웹팩 (Webpack)**

웹팩은 오픈 소스 자바스크립트 모듈 번들러로써 여러개로 나누어져 있는 파일들을 하나의 자바스크립트 코드로 압축하고 최적화하는 라이브러리이다.

여러 파일의 자바스크립트 코드를 압축하여 최적화할 수 있기 때문에 로딩에 대한 **네트워크 비용을 줄일 수 있고**, **모듈 단위로 개발**이 가능하여 **가독성과 유지보수가 쉽다**.

**바벨 (Babel)**

최신 자바스크립트 문법을 지원하지 않는 브라우저들을 위해 최신 스크립트 문법을 구형 브라우저에서도 돌 수 있게 변환 시켜주는 라이브러리이다.

### Visual Studio Code

## Create React App을 사용해서 리액트 설치하기

### 리액트 앱 설치 방법

`npx create-react-app <폴더 이름>` 명령어로 간단하게 설치할 수 있다.

npx는 노드 패키지 실행을 도와주는 도구이다. create-react-app이란 npm 레지스트리에 있는 패키지를 react-tictactoe-app 폴더에서 실행해서 리액트를 설치해준다.