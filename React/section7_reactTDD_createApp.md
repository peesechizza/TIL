# 7. React TDD 를 이용한 간단한 앱 생성 및 배포

## TDD 이용 앱 만들기

`+` 를 누르면 숫자가 올라가고 `-` 를 누르면 숫자가 내려간다. `on/off` 버튼을 누르면 `+, -` 버튼이 작동을 하지 않고 색깔이 변하는 앱.

react-button-app 생성 후 `npx create-react-app ./`

### Counter 생성

1. Counter는 0부터 시작한다.
2. 테스트 작성

   ```jsx
   import { render, screen } from "@testing-library/react";
   import App from "./App";

   test("the counter starts at 0", () => {
     render(<App />);
     const counterElement = screen.getByTestId("counter");
     expect(counterElement).toHaveTextContent(0);
   });
   ```

3. 테스트에 대응하는 실제 코드 작성

   ```jsx
   import { useState } from "react";
   import "./App.css";

   function App() {
     const [count, setCount] = useState(0);
     return (
       <div className="App">
         <header className="App-header">
           <h3 data-testid="counter">{count}</h3>
         </header>
       </div>
     );
   }

   export default App;
   ```

## +, - 버튼 생성

1. 테스트 작성

   ```jsx
   test("minus button has correct text", () => {
     render(<App />);
     const buttonElement = screen.getByTestId("minus-button");
     expect(buttonElement).toHaveTextContent("-");
   });

   test("plus button has correct text", () => {
     render(<App />);
     const buttonElement = screen.getByTestId("plus-button");
     expect(buttonElement).toHaveTextContent("+");
   });
   ```

2. 테스트에 대응하는 실제 코드 작성

   ```jsx
   import { useState } from "react";
   import "./App.css";

   function App() {
     const [count, setCount] = useState(0);
     return (
       <div className="App">
         <header className="App-header">
           <h3 data-testid="counter">{count}</h3>
           <button data-testid="minus-button">-</button>
           <button data-testid="plus-button">+</button>
         </header>
       </div>
     );
   }

   export default App;
   ```

## +, - 버튼 기능 넣기 (fire event)

### 버튼 생성

1. 테스트 작성

   ```jsx
   test("When the + button is pressed, the counter changes to 1", () => {
     render(<App />);
     const buttonElement = screen.getByTestId("plus-button");
     fireEvent.click(buttonElement);
     const counterElement = screen.getByTestId("counter");
     expect(counterElement).toHaveTextContent("1");
   });

   test("When the - button is pressed, the counter changes to -1", () => {
     render(<App />);
     const buttonElement = screen.getByTestId("minus-button");
     fireEvent.click(buttonElement);
     const counterElement = screen.getByTestId("counter");
     expect(counterElement).toHaveTextContent("-1");
   });
   ```

2. 테스트에 대응하는 실제 코드 작성

   ```jsx
   <button
     data-testid="minus-button"
     onClick={() => setCount((prev) => prev - 1)}
   >
     -
   </button>
   <button
     data-testid="plus-button"
     onClick={() => setCount((prev) => prev + 1)}
   >
     +
   </button>
   ```

### FireEvent API

유저가 발생시키는 액션(이벤트)에 대한 테스트를 해야 하는 경우에 사용한다.

**🔗 참고 [React Testing Library을 사용하여 테스트3 - Fire Event](https://velog.io/@suld2495/React-Testing-Library%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%ED%85%8C%EC%8A%A4%ED%8A%B82-Fire-Event)**

## on/off 버튼 만들기 (toHaveStyle)

### on/off 버튼 생성

1. 테스트 작성

   ```jsx
   test("on/off button has blue color", () => {
     render(<App />);
     const buttonElement = screen.getByTestId("on/off-button");
     expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
   });
   ```

2. 테스트에 대응하는 실제 코드 작성

   ```jsx
   <div>
     <button style={{ backgroundColor: "blue" }} data-testid="on/off-button">
       on/off
     </button>
   </div>
   ```

### toHaveStyle

특정 요소에 특정 CSS 속성이 있는지 확인할 수 있다.

**🔗 참고 [toHaveStyle()](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohavestyle)**

## on/off 버튼 클릭 시 버튼 disabled

### on/off 버튼 설정

1. 테스트 작성

   ```jsx
   test("Prevent the -, + button from being pressed when the on/off button is clicked", () => {
     render(<App />);
     const onOffButtonElement = screen.getByTestId("on/off-button");
     fireEvent.click(onOffButtonElement);
     const plusButtonElement = screen.getByTestId("plus-button");
     expect(plusButtonElement).toBeDisabled();
   });
   ```

2. 테스트에 대응하는 실제 코드 작성

   ```jsx
   import { useState } from "react";
   import "./App.css";

   function App() {
     const [count, setCount] = useState(0);
     const [disabled, setDisabled] = useState(false);
     return (
       <div className="App">
         <header className="App-header">
           <h3 data-testid="counter">{count}</h3>
           <button
             data-testid="minus-button"
             onClick={() => setCount((prev) => prev - 1)}
             disabled={disabled}
           >
             -
           </button>
           <button
             data-testid="plus-button"
             onClick={() => setCount((prev) => prev + 1)}
             disabled={disabled}
           >
             +
           </button>
           <div>
             <button
               style={{ backgroundColor: "blue" }}
               data-testid="on/off-button"
               onClick={() => setDisabled((prev) => !prev)}
             >
               on/off
             </button>
           </div>
         </header>
       </div>
     );
   }

   export default App;
   ```

## Github Action을 이용한 AWS S3로 앱 자동 배포하기

### 레파지토리 생성 후 연결

### workflow 생성

레파지토리 → Actions → Node.js → Configure

```jsx
# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

`run: npm ci` 에서 `run: npm i` 로 변경해준다.

## 앱 배포를 위한 AWS S3 버킷 생성하기

1. S3 서비스 검색
2. 버킷 만들기
   - 알맞은 버킷 이름 이용, AWS 리전 선택
   - AWS 리전 : AWS 인프라를 지리적으로 나누어 배포한 것을 의미한다. 사용자와 리전이 가까울수록 네트워크 지연을 최소화 할 수 있다.
3. 생성한 버킷을 웹사이트 호스팅을 위해서 사용할 수 있게 설정
   - 속성 탭 이동
   - 정적 웹 사이트 호스팅
     - 정적 웹 사이트 호스팅 → 활성화
     - 호스팅 유형 → 정적 웹 사이트 호스팅
     - 인덱스 문서 → index.html

## AWS S3 버킷 설정 및 애플리케이션 배포하기

### 버킷 정책 변경

S3에 올라간 React 정적 파일을 웹에서 액세스 할 수 있게 버킷 정책을 변경해주고 추가해준다. (S3 버킷에 익명의 사용자들이 파일들을 조회할 수 있도록 권한 설정)

1. 권한 탭으로 이동
2. 퍼블릭 액세스 차단 설정 편집 (웹에서 액세스 할 수 있게 차단 비활성화)
3. 버킷 정책 작성
   - https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteAccessPermissionsReqd.html
     ```jsx
     {
         "Version": "2012-10-17",
         "Statement": [
             {
                 "Sid": "PublicReadGetObject",
                 "Effect": "Allow",
                 "Principal": "*",
                 "Action": [
                     "s3:GetObject"
                 ],
                 "Resource": [
                     "arn:aws:s3:::<버킷 이름>/*"
                 ]
             }
         ]
     }
     ```
4. 소스 코드 업로드

## S3로 앱 자동 배포를 위한 yml 파일 완성하기

https://github.com/awact/s3-action

### github workflow에 추가

```jsx
- uses: awact/s3-action@master
      with:
        args: --acl public-read --follow-symlinks --delete
      env:
        SOURCE_DIR: './build'
        AWS_REGION: 'ap-northeast-2'
        AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

### IAM(Identity and Access Management) 란?

AWS 리소스에 대한 액세스를 안전하게 제어할 수 있는 웹 서비스이다. IAM을 사용하여 리소스를 사용하도록 인증(로그인) 및 권한 부여(권한 있음)된 대상을 제어한다.

**루트 사용자** : 현재 우리가 가입하여 사용하고 있는 AWS 계정

**IAM 사용자** : 루트 사용자가 부여한 권한만 가지고 있음

일상적인 작업 또는 관리 작업이든 루트 사용자를 사용하는 방법은 보안 문제로 바람직하지 않다. 그래서 IAM 유저를 사용한다.

### 사용자 추가

1. IAM 검색
2. 사용자 선택 후 사용자 추가
3. 사용자 이름 입력 후 액세스 키 선택
4. 사용자 권한 부여 (AmazonS3FullAccess)
5. 액세스 키 ID, 비밀 액세스 키 → 저장 잘 해야 함
6. node.js.yml에 입력 → Settings → Secrets → New Repository Secret
7. 환경 변수 각각 설정
