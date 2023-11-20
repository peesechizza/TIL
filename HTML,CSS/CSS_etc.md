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
