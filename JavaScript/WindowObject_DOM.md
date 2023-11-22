# Window 객체 및 DOM

## Window Object

`window` 객체는 브라우저에 의해 자동으로 생성되며 웹 브라우저의 창을 나타낸다. window 객체를 이용해서 브라우저 창에 대한 정보를 알 수 있고, 창을 제어할 수 있다. 또한 `var` 키워드로 변수를 선언하거나 함수를 선언하면 window 객체의 프로퍼티가 된다.

**대표적인 window 메서드 몇가지**

- `window.location.href`
  다른 페이지로 이동
- `window.open(url)`
  새 창 열기, 여는 방식 등을 추가로 설정 가능
- `window.close()`
  현재 창 닫기
- `window.setTimeout(function, time)`
  일정 시간 후 함수 실행

## DOM; Document Object Model

XML이나 HTML 문서의 각 항목을 계층으로 표현해 제어할 수 있도록 돕는 인터페이스이다. 웹 페이지는 일종의 문서인데, 구조화된 논리 트리로 표현되어 있으며 웹 페이지의 각 요소는 노드와 객체로 표현된다. DOM은 이러한 문서의 구조화된 표현 형식을 제공해, 스크립트와 페이지를 연결시켜준다.

### DOM 트리 구조

**Document Node**

웹 페이지 문서를 나타내는 노드. 트리의 최상위 노드로, 시작점이 된다.

**Element Node**

태그를 나타내는 노드 ( `<p>`, `<h1>`, … )

**Attribute Node**

태그가 가지는 속성을 나타내는 노드 ( `<input>` 태그에서 placeholder )

**Text Node**

태그 내의 텍스트를 나타내는 노드 ( `<span>lorem</span>` )

### Document Object

`document` 객체는 HTML 문서의 루트 노드로 `window` 개체의 속성이다.

**Document 객체 프로퍼티**

- `document.head` : `<head>` 태그 반환
- `document.body` : `<body>` 태그 반환
- `document.doctype` : 웹 페이지의 문서 형식을 반환
- `document.cookie` : 웹 페이지의 쿠키를 반환
- `document.forms` : `<form>` 태그 반환
- `document.forms[0].id` : `<form>` 요소의 id 반환
- `document.links` : href 속성이 있는 `<a>` 태그 반환
- `document.links[0].className` : href 속성이 있는 `<a>` 요소의 className 반환
- …

**Document 객체 메소드**

1. 하나의 요소에 접근
   - `document.getElementById(요소아이디)` : 파라미터로 전달한 id를 가진 태그 반환
   - `document.getElementByName(name 속성값)` : 파라미터로 전달한 name 속성을 가진 태그 반환
   - `document.querySelector(선택자)` : 파라미터로 전달한 선택자에 맞는 첫 번째 태그를 반환
     <br>
     <br>
2. 여러 요소에 접근
   - `document.getElementByTagName(태그이름)` : 파라미터로 전달한 태그 이름을 가진 모든 태그 반환
   - `document.getElementByClassName(클래스이름)` : 파라미터로 전달한 클래스 이름을 가진 모든 태그 반환
   - `document.querySelectorAll(선택자)` : 파라미터로 전달한 선택자에 맞는 모든 태그 반환

**innerHTML, innerText, textContent 차이점**

- `innerHTML` : html 까지 같이 보여준다.
- `innerText` : 사용자에게 보여지는 텍스트 값을 읽어오며 여러 공백은 무시하고 하나의 공백만 처리한다.
- `textContent` : display:none 스타일이 적용된 텍스트 값도 보여준다.
  <br>

### Document 탐색하기

특정 DOM 요소에서 탐색을 통해 다른 DOM 요소에 접근할 수 있다.

**모든 노드에 적용 가능한 탐색 프로퍼티**

- `parentNode`

  부모 노드를 탐색하여 HTML Element 객체로 반환

- `childNodes`

  텍스트 요소를 포함한 모든 자식 요소를 NodeList(배열)로 반환 (line break도 포함됨-text로 나타남)

- `firstChild`, `lastChild`

  자식 노드를 탐색하여 HTML Element 객체로 반환

- `previousSibling`, `nextSibling`

  텍스트 요소를 포함한 모든 형제 노드를 탐색하여 HTML Element 객체로 반환

- `hasChildNodes`

  자식 노드가 있는지 확인하여 Boolean 값을 반환

**요소 노드에만 적용 가능한 탐색 프로퍼티**

- `parentElement`

  노드의 부모 Element를 반환

- `children`

  Element type의 모든 자식 요소를 HTML Collection으로 반환 (line break 포함X)

- `firstElementChild`, `lastElementChild`

  Element type의 자식 요소를 HTML Element 객체로 반환 (line break 포함X)

- `previousElementSibling`, `nextElementSibling`

  Element type의 형제 노드를 탐색하여 HTML Element 객체로 반환
  <br>
  <br>

**nodeType**

- 1 - Element
- 2 - Attribute (deprecated)
- 3 - Text node
- 8 - Comment node
- 9 - Doucument itself
- 10 - Doctype

### createElement

`document.createElement(tagName)` 의 tagName에 태그 이름을 넣어서 요소를 생성할 수 있다.

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>CreateElement</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div id="body-container" class="container">
      <ul class="list-group">
        <li class="list-group-item">An item</li>
      </ul>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

```jsx
const li = document.querySelector("li");
li.className = "list-group-item";

document.querySelector("ul.list-group").appendChild(li);
```

`createElement` 로 요소를 생성한 후 HTML 요소 안에 삽입하기 위해 `appendChild()` 나 `insertBefore()` 를 사용하여 document 요소를 삽입할 수 있다.

### appendChild

```jsx
parentNode.appendChild(childNode);
```

childNode는 부모 노드에 추가할 노드를 의미한다. 리턴 값으로는 방금 추가된 자식 노드를 리턴한다.

### insertBefore

**[[Java Script] insertBefore 자바스크립트 요소 삽입](https://shinyks.com/2023/07/javascript/%ec%9e%90%eb%b0%94%ec%8a%a4%ed%81%ac%eb%a6%bd%ed%8a%b8-insertbefore-%ec%82%ac%ec%9a%a9-%eb%b0%a9%eb%b2%95/)**

### removeChild

`removeChild()` 메소드는 부모 노드에서 자식 노드를 제거하고 제거된 노드를 리턴한다.

```jsx
parentNode.removeChild(childNode);
```

### replaceChild

`replaceChild` 메소드는 자식 노드를 새로운 노드로 대체한다.

```jsx
parentNode.replaceChild(newNode, oldNode);
```
