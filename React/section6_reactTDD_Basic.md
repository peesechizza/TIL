# 6. React TDD 기본

## 테스트 주도 개발이란 무엇인가?

### Test Driven Development

실제 코드를 작성하기 전에 테스트 코드를 먼저 작성하고 테스트 코드를 Pass 할수 있는 실제 코드를 작성하는 것이다.

### TDD를 하면 좋은 점

1. 많은 기능을 테스트하기에 소스 코드에 안정감이 부여된다.
2. 디버깅 시간이 줄어들고 실제 개발 시간도 줄어든다.
3. 소스 코드를 신중하게 짤 수 있기 때문에 깨끗한 코드가 나올 확률이 높다.

## React Testing Library

React Testing Library는 React 구성 요소 작업을 위한 API를 추가하여 DOM Testing Library 위에 구축된다.

DOM Testing Library는 Dom 노드를 테스트 하기 위한 매운 가벼운 솔루션이다.

Create React App으로 생성된 프로젝트는 즉시 React Testing Library를 지원한다. 그렇지 않은 경우 `npm install —save-dev @testing-library/react` 을 통해 추가할 수 있다.

React Testing Library는 에어비앤비에서 만든 Enzyme를 대처하는 솔루션이다. Enzyme(구현 주도 테스트; Implementation Driven Test)이 구성 요소의 구현 세부 정보를 테스트하는 대신 React Testing Library(행위 주도 테스트; Behavior Driven Test)는 개발자를 React 애플리케이션의 사용자 입장에 둔다.

## Jest

React Application을 테스트 하기 위해서 React Testing Library와 함께 사용된다. React Testing Library가 컴포넌트를 렌더링해주면 렌더링 된 것을 Jest를 이용해서 테스트한다.

FaceBook에 의해서 만들어진 테스팅 프레임 워크이다. 최소한의 설정으로 동작하며 TestCase를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인해준다. 단위 테스트를 위해서 이용한다.

### Jest가 Test 파일을 찾는 방법

1. `{filename}.test.js`
2. `{filename}.spec.js`
3. `All file insde “tests” folders`

## Jest 파일 구조 및 사용법

### Jest 파일 구조

![스크린샷 2023-12-11 오후 6 40 12](https://github.com/peesechizza/TIL/assets/110324109/e7bfe397-f26d-40e1-9d98-2e5014225790)

- “describe”
  - argument (name, fn)
  - 여러 관련 테스트를 **그룹화**하는 블록을 만든다.
- “it”

  - same as test
  - arguament(name, fn, timeout)
  - **개별 테스트**를 수행하는 곳, 각 테스트를 작은 문장처럼 설명한다.
    <br>
    <br>

![스크린샷 2023-12-11 오후 6 40 47](https://github.com/peesechizza/TIL/assets/110324109/44544cb4-5fb4-46bb-90f3-c5be2843dd39)

- “expect”
  - expect 함수는 값을 테스트할 때 마다 사용된다. 그리고 expect 함수 혼자서는 거의 사용되지 않으며 matcher와 함께 사용된다.
- “matcher”
  - **다른 방법**으로 값을 테스트 하도록 matcher를 사용한다.

## React Testing Library 주요 API

1. 폴더 생성 (react-testing-app) 후 `npx create-react-app ./` 설치
2. 기본 테스트 진행 `npm test`
3. `a` : run all tests
4. `q` : quit watch mode
5. App.test.js 는 기본 테스트가 진행 되는 곳이다.
   - **render 함수 :** Dom에 컴포넌트를 렌더링하는 함수이다. 인자로 렌더링할 react 컴포넌트가 들어간다. Return은 RTL에서 제공하는 쿼리 함수와 기타 유틸리티 함수를 담고 있는 객체를 리턴한다.

## 쿼리 함수

쿼리는 **페이지에서 요소를 찾기 위해** 테스트 라이브러리가 제공하는 방법이다. 여러 유형의 쿼리(**”get”, “find”, “query” 등**) 가 있다. 이들 간의 차이점은 요소가 발견되지 않으면 쿼리에서 오류가 발생하는지 또는 Promise를 반환하고 다시 시작하는지의 여부이다. 선택하는 페이지 콘텐츠에 따라 다른 쿼리가 다소 적절할 수 있다.

### get, find, query의 차이점

1. `getBy` : 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없거나 둘 이상의 일치가 발견되면 설명 오류를 발생시킨다. (둘 이상의 요소가 예상되는 경우 `getAllBy` 사용)
2. `queryBy` : 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없으면 **null을 반환**한다. 이것은 존재하지 않는 요소를 어설션하는데 유용하다. 둘 이상의 일치 항목이 발견되면 오류가 발생한다. (확인된 경우 `queryAllBy` 사용)
3. `findBy` : 주어진 쿼리와 일치하는 요소가 발견되면 Promise를 반환한다. 요소가 발견되지 않거나 기본 제한 시간인 1000ms 후에 둘 이상의 요소가 발견되면 promise가 거부된다. 둘 이상의 요소를 찾아야 하는 경우 `findAllBy`를 사용해야한다. ( getBy + `waitFor` )

> `waitFor`
> 일정 시간 동안 기다려야 할 때 waitFor을 사용하여 기대가 통과할 때 까지 기다릴 수 있다.

## Create react app으로 리액트 설치 및 Prettier 설정

### ESLint

개발자들이 특정한 규칙을 가지고 코드를 깔끔하게 짤 수 있게 도와주는 라이브러리이다. 자바스크립트를 쓰는 가이드 라인을 제시하고, 문법에 오류가 나면 알려주는 역할 등등, ESLint는 formatter 역할도 하지만 주요 기능은 문법 오류를 잡는 것이다.

이미 Create React App으로 리액트를 설치할 때 기본 eslint가 설정되어 잇다. 하지만 이 상태로는 VSCode에서 바로 에러 확인을 할 수 없고 앱을 시작했을 때 터미널 상에서 볼 수 있다.

1. eslint Extension에서 설치
2. root directory/src/.eslintrc.json 이라는 eslint 설정 파일 생성을 한다. package.json에 eslintConfig 부분을 지우고, 그 부분을 eslint 설정 파일에 넣는다.

   ```jsx
   {
   		"extends": [
   				"react-app",
   				"react-app/jest"
   		]
   }
   ```

3. ESLint Testing Plugins 설치
   - eslint에서 기본으로 제공하지 않는 다양한 규칙을 플러그인을 통해 사용할 수 있다.
4. `npm install eslint-plugin-testing-library eslint-plugin-jest-dom —same-dev`
   - testing-library : render로 Dom 그리는 부분
   - jest-dom : expect-matcher로 테스트
5. 내부 설정해주기
   - plugins 항목 : 플러그인 추가, 추가할 때 eslint-plugin- 부분 생략 가능
   - extends 항목 : 플러그인을 추가한 후에 **규칙을 정해줘야 사용 가능**하다. 그래서 extends 항목에 사용하고자 하는 규칙을 설정한다. vue, angular, react 중에 react를 위한 규칙이다. recommended는 추천이 되는걸 사용한다. 만약 **규칙을 변경하고자 할 때는 rule 항목을 추가**한다.
     ```jsx
     {
     		"plugins": [
     				"testing-library",
     				"jest-dom"
     		          ],
     		"extends": [
     				"react-app",
     				"react-app/jest",
     				"plugin:testing-library/react",
     				"plugin:jest-dom/recommended"
     		          ]
     }
     ```

### Prettier

주로 코드 형식을 맞추는데 사용한다.

1. npm 설치
   - 여러 개발자와 같은 포맷 유지에 좋음
2. Extension 설치
   - 혼자서 사용해서 편리함
