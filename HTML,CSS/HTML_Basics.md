# HTML Basics

## HTML 개념 및 구성요소

**HTML (Hyper Text Markup Language)**

: 웹 페이지를 만들기 위한 표준 마크업 언어, 가장 기초적인 구성 요소

**HTML 구성요소**

태그와 요소로 이루어짐

1. 태그 : 웹 문서를 구성하는 명령어, 시작 태그와 종료 태그 두 종류
2. 요소 : 시작 태그와 종료 태그, 그 사이의 내용으로 구성된다.

- 빈 요소
  : 구조적인 기능만 하는 요소 (br, hr)
- 블록 요소
  : 다른 블록요소와 인라인 요소를 포함할 수 있다. margin, padding 값을 가진다 (제목태그, div, list,t p … )
- 인라인 요소
  : 다른 인라인 요소를 포함할 수 있고 블록 요소 안에 포함되어 있다. (a, span, strong, … ), display:bock을 이용해서 너비를 생성할 수 있음

**index.html** : 방문자가 사이트를 요청할 때 다른 페이지가 저장되지 않은 경우 웹 사이트에 표시된 기본 페이지에 사용되는 가장 일반적인 이름.

**속성** (attribute) : 태그를 보조하는 명령어, width, height, alt, style, href 등이 있음

## **시맨틱 요소**

: 의미가 있는 요소, 브라우저와 개발자 모두에게 의미를 명확하게 설명

예 ) article, aside, details, figcaption, figure, footer, header, main, mark, nav, section, summary, time

- `<header>`
  - 하나 이상의 제목 요소
  - 로고, 아이콘
  - 저작권 정보
  - 작성자 이름
- `<section>`
  - 문서의 섹션
  - 장, 소개, 뉴스 항목, 연락처 정보
- `<nav>`
  - 목차, 메뉴 등
- `<footer>`
  - 문서, 섹션의 바닥글
  - 저작권 정보, 연락처 정보, 사이트맵

```html
<h1 style="width: 30px">h1</h1>
<h1>h1</h1>

<span style="display: block">span</span>
<span>span</span>

<a href="https://google.com">Link to Google</a>
```

## HTML 문서 기본 구조

html:5 입력 후 탭을 누르면 html 기본 구조를 만들어준다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

- `<DOCTYPE>`
  - HTML 문서 맨 처음에 명시되고, 문서의 버전을 나타내며 반드시 작성해야 한다.
- `<html>`
  - html로 작성됐음을 알린다.
  - 문서의 시작과 끝을 알리는 태그이다.
  - lang 속성으로 문서의 언어를 설정할 수 있다.
- `<head>`
  - 메타 데이터와 타이틀을 넣어주는 곳
  - 페이지 인코딩 방식이나 검색 엔진에 관한 정보 등을 설정하고 타이틀(창 제목)을 설정한다.
- `<body>`
  - 주로 브라우저 화면에 보이는 곳
  - 문서의 이미지, 리스트 등과 같이 콘텐츠를 나타냄

## HTML 기본 태그와 역할

1. **Heading**

   - `<h1>` ~ `<h6>`이며 주로 웹 페이지에 표시하려는 제목으로 사용된다.

   ```html
   <!DOCTYPE html>
   <html lang="ko">
     <head>
       <title>Document</title>
     </head>
     <body>
       <h1>h1</h1>
       <h2>h2</h2>
       <h3>h3</h3>
     </body>
   </html>
   ```

2. **Paragraph**
   - 문단을 정의할 때 사용된다. `<p>`
3. **Preformatted Text**
   - 미리 정의된 형식의 텍스트를 정의할 때 사용된다.
4. **List**

- 목록을 나타내는 태그이며 3가지로 나뉜다.
- type이나 reversed 같은 속성을 이용하여 목록 표시를 변경할 수 있다.
  - 순서가 있는 목록 (Ordered List; `<ol>`)
    - 기본적으로 숫자로 표시된다.
  - 순서가 없는 목록 (Unordered List; `<ul>`)
    - 글머리 기호로 표시된다.
  - 설명 목록 (Description List; `<dl>`)
    - 사전이나 백과사전처럼 항목이 나열되는 정의 목록이라고도 한다.
      - `<dl>` : 목록의 시작을 정의
      - `<dt>` : 용어를 정의
      - `<dd>` : 용어 정의(설명)를 정의

5. 텍스트 서식

- 글씨 굵게
  - `<strong>` : 글씨 강조
  - `<b>`
- 글씨 기울게
  - `<em>` : 글씨 강조
  - `<i>`
- 작은 텍스트 : `<small>`
- 하이라이트 표시 : `<mark>`
- 아랫 첨자 텍스트 표시 : `<sub>`
- 윗 첨자 텍스트 표시 : `<sup>`

6. 인용

- `<blockquote>` : 들여쓰기로 표현 (블록 요소)
- `<q>` : 따옴표로 표현시 (인라인 요소)
