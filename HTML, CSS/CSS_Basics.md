# CSS Basics

## CSS (Cascading Style Sheets)

웹 사이트에서 화면에 표시되는 정보들을 꾸며주는 역할을 한다.

**CSS를 사용하는 방법**

1. 인라인 스타일 : HTML 안에서 Style 속성을 이용하는 방법
2. 내부 스타일 시트 : `<style>`태그를 통해 HTML 문서 내부에서 이용하는 방법
3. 외부 스타일 시트 : 별도로 CSS 파일을 분리하여 HTML의 문서에 연결하는 방법

**스타일 적용 우선 순위**

1. 인라인 스타일
2. 내부 스타일 시트 / 외부 스타일 시트
3. 웹 브라우저 기본 스타일

**CSS의 기본 구조**

- 선택자 : CSS를 적용할 위치의 HTML 요소
- 프로퍼티 (속성) : 선택자가 지정한 위치의 무엇을 바꿀 것인지 결정
- 값 : 프로퍼티로 지정한 것을 얼마나 바뀌게 할지 결정

## CSS 속성

- background-color : 배경색 지정
- color : 텍스트 색 지정
- height : 높이 지정
- width : 너비 지정
- border
- border-radius : 둥근 모서리
- cursor : 요소 위로 마우스를 가져갈 때 마우스/커서를 변경
- border-color : 테두리 색상 설정
- border-style : 테두리 스타일 설정
- border-width : 테두리 너비 설정

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>Document</title>
    <style type="text/css">
      button {
        background-color: blue;
        color: white;
        height: 50px;
        width: 200px;
        border: none;
        border-color: red;
        border-style: solid;
        border-radius: 2px;
        cursor: pointer;
        border-width: 5px;
      }
    </style>
  </head>
  <body>
    <button>버튼</button>
  </body>
</html>
```

## 색을 표현하는 방법

1. **색 이름**
2. **RGB 값**

- 빨강, 초록, 파랑의 조합을 사용
- rgb(0, 0, 0)으로 표현 (검정색)

3. **Hex 값**

- RGB를 다르게 표현하는 방법
- 16진수로 표현한다
- #0096FF 로 표현 (00 - 빨강, 96 - 초록, FF - 파랑)

4. **RGBA 값**

- rgba(0, 0, 0, 0) 으로 표현
- 마지막은 투명도를 설정

## 수치 값을 표현하는 방법

1. **픽셀**
2. **퍼센트**

- 상대적 측정

3. **em, rem**

- 환경에 따라 변하는 단위 (가변 단위)
- em
  - 같은 엘리먼트에서 지정된 font-size를 기준으로 px로 바뀌어 화면에 표시되고 같은 엘리먼트에 설정된 값이 없을 경우, 상위 요소의 폰트 사이즈가 기준이 된다.
- rem
  - 최상위 엘리먼트에서 지정된 font-size의 값을 기준으로 변경된다. HTML tag에서 지정된 사이즈가 기준이 된다.
