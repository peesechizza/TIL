## Viewport-meta

**viewport**는 화면의 크기를 말한다. 뷰포트의 크기가 기기 크기보다 클 때 콘텐츠가 화면에 다 표시되지 않는다. 디바이스의 종류와 관계없이 뷰포트의 비율을 조정하기 위해 뷰포트 메타태그가 추가되었다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- `width=device-width` : 화면 너비를 따르도록 페이지 너비를 설정 (너비를 “width=500”과 같이 지정하는 것도 가능)
- `initial-scale=1.0` : 브라우저에서 페이지를 처음 로드할 때 초기 확대 / 축소 수준 설정, 0.1 ~ 10의 값을 가지며 기본값은 1
- `minimum-scale=1.0` : 가능한 줌아웃 비율
- `maximum-scale=1.0` : 가능한 줌인 비율
- `user-scalable=1` : 줌인 또는 줌아웃 기능 사용 여부로 0(no) 또는 1(yes)의 값을 가지며 기본값 1

## Container Query

`container` 쿼리는 **viewport** 기준이 아닌 특정 요소의 크기(container) 에 따라 반응적으로 스타일링이 가능하다.

1. **container-type**

- 특정 요소를 쿼리 컨테이너로 지정
- 자식 요소는 쿼리 컨테이너의 사이즈에 따라 반응적으로 스타일링 가능
- `container-type` 에는 size, inline-size 등이 있다.

2. **container-name**

- 쿼리 컨테이너의 이름을 지정
- 지정된 이름은 `@container container-name` 형식으로 쓰인다.

```CSS
.parent {
	container-type: inline-size;
	container-name: parent;
}

@container parent (min-width: 300px) {
	.child {
		/* styling */
	}
}
```

## Dialog Element

`dialog` 요소는 모달, 다이얼로그와 팝업을 쉽게 생성하기 위해 만들어졌다.

> dialog 요소는 사용자가 작업을 수행하기 위해 상호 작용하는 응용 프로그램의 일부를 나타낸다.

```html
<dialog>
  <span>안녕하세요</span>
</dialog>
```

브라우저를 실행하면 아무것도 볼 수 없다. `dialog` 요소는 기본적으로 숨겨져 있으며 표시 여부는 `open` 속성에 따라 달라진다.

```html
<dialog open>
  <span>안녕하세요</span>
</dialog>
```

## :is()

CSS를 작성할 때 여러 요소에 동일한 스타일을 적용하기 위해 `:is()` 를 이용하면 긴 선택자 목록을 사용하지 않고 가독성도 향상시킬 수 있다.

```css
:is(ul, ol) li {
  font-size: 3rem;
}

ul li,
ol li {
  font-size: 3rem;
}
```

## :where()

`:where()` 가상 클래스 함수는 **선택자 목록**을 인수로 취하고 해당 목록의 선택자 중 하나가 선택할 수 있는 모든 요소를 선택한다.

```css
:where(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}
```

### :where() 와 :is()의 차이점

`:where()` 은 명시도가 0이고 `:is()` 는 명시도가 10이기 때문에 각각의 스타일을 적용했을 때 명시도가 더 높은 `:is()` 의 스타일링이 적용된다.

## :has()

`:has()` 는 하위 요소에 따라 요소를 선택할 수 있다.

```css
selector:has(sub-selector) {
  /* CSS rules */
}
```

여기서 `selector`는 유효한 css 선택자이고 `sub-selector`는 원하는 하위 요소와 일치하는 유효한 CSS 선택자이다. `:has()` 선택자는 하위 선택자와 일치하는 하나 이상의 자손을 포함하는 모든 요소와 일치한다.

```css
/* 중첩된 <ul> 요소를 포함하는 모든 <li> 요소를 선택 */
li:has(ul) {
  background-color: yellow;
}
```
