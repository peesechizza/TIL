## Box Sizing 속성

박스의 크기를 어떤 것을 기준으로 계산할지 정하는 속성

`box-sizing: content-box | border-box | initial | inherit`

- content-box : 컨텐츠 영역 기준
- border-box : 테두리 기준
- initial : 기본값 설정
- inherit : 부모 요소 속성 값 상속받음

## 사용자 지정 속성 (CSS Variable)

사용자가 CSS를 정의하는 개체로 문서 전반적으로 재사용할 임의의 값을 담는다.

### 사용자 지정 사용법

    /* CSS 변수 생성 */
    --css-variable-name: css property value;

     :root {
     	--main-bg-color: #000080;
     	--main-text-color: #fff;
     }

     /* 생성한 CSS 변수 사용 */
     css property: var(--css-variable-name);

     body {
         background-color: var(--main-bg-color);
         color: var(--main-text-color);
     }
