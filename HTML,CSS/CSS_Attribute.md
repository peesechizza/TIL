# 버튼 만들기

## class 속성

- CSS로 특정 요소를 대상으로 지정할 수 있다.
- 여러 요소가 동일한 클래스를 가질 수 있다.
- 요소는 공백으로 구분된 클래스를 여러개 가질 수 있다.
- Pseudo-Classes
  - hover : 마우스를 요소에 가져갈 때만 적용
  - active : 요소를 클릭할 때만 적용

**transition**

```css
transition: <property> <duration>;
transition: opacity 0.2s;
transition: background-color 3s;
transition: opcity 0.2s, background-color 3s;
transition: all 1s; /* 변화된 모든 속성에 적용 */
```

- 스타일 변경 시 부드럽게 전환한다. 선택자가 변화되는 것을 시간의 흐름을 줘서 변화시키는 속성이다.
- ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(n, n, n, n) 등을 사용해 변화되는 속도를 조정할 수 있다.

## 가상 클래스 (의사 클래스) & 가상 요소 (의사 요소)

**가상 클래스 (Pseudo-Class)**

: 별도의 class를 지정하지 않아도 지정한 것처럼 요소를 선택할 수 있다.

- `:hover`
- `:active`
- `:focus`
- `:first-of-type`, `:last-of-type`
  - 모든 자식 요소 중에서 첫 번째(마지막)에 등장하는 특정 요소 선택
- `:first-child`, `:last-child`
  - 모든 자식 요소 중에서 첫 번째(마지막)에 위치하는 자식을 선택

**가상 요소 (Pseudo-Element)**

: 선택자에 추가되며, 존재하지 않는 요소를 존재하는 것처럼 부여하여 문서의 특정 부분 선택이 가능하다.

- `::before`, `::after`
  - 요소의 콘텐츠 시작 (끝) 부분에 생성된 콘텐츠를 추가한다.
  - 꼭 `content`와 같이 쓰여야 한다.

## Float CSS

컨테이너의 왼쪽 또는 오른쪽에 요소를 배치하여 텍스트 및 인라인 요소가 주위를 둘러쌀 수 있도록 한다.

## Clear CSS

float의 영향을 받지 않도록 할 수 있다. float 속성을 사용하고 아래 다음 요소를 원할 때 clear 속성을 사용해야 한다.

- none : 기본값
- left : 요소가 왼쪽 부동 요소 아래로 푸시
- right : 요소가 오른쪽 부동 요소 아래로 푸시
- both : 요소가 왼쪽 및 오른쪽 부동 요소 아래로 푸시
- inherit : 요소는 부모로부터 clear값을 상속

**box-shadow**

`box-shadow: <offset-x> <offset-y> <blur> <color>`

## Margin, Padding, Border (CSS Box Model)

CSS Box Model은 기본적으로 모든 HTML 요소를 감싸는 상자다.

`margin: <top> <right> <bottom> <left>`

`padding: <top> <right> <bottom> <left>`

`border: <width> <style> <color>`

## Text 스타일링

- `font-family` : 글꼴을 변경한다. 여러개의 글꼴을 설정하면 앞의 글꼴을 사용할 수 없는 경우 다음 글꼴로 설정된다.
- `font-size` : 글꼴 크기
- `font-weight` : 글꼴 굵기 (100, 200, … bold=700, semi-bold=500)
- `font-style` : 글꼴 스타일 변경
- `text-align` : 텍스트 정렬 (left, right, center, justify - 가지런하게 맞추기 위해 양쪽 정렬, initial, inherit)
- `line-height`

## Google 폰트 사용하기

1. [fonts.google.com](http://fonts.google.com) 접속 후 원하는 글꼴 찾기
2. link 복사하여 사용

## Image

`<img class=”image” src=”image.jpeg” alt=”이미지 이름”>`

- src : 이미지 소스의 URL
- alt : 해당 이미지를 보여줄 수 없을 때 대체할 텍스트

**object-fit**

컨테이너에 맞게 <img> 또는 <vidoe> 크기를 조정하는 방법을 지정하는 데 사용된다.

- fill : 기본값
- contain : 종횡비를 유지하지만 주어진 치수에 맞게 크기가 조정된다.
- cover : 종횡비를 유지하고 주어진 치수를 채우고 이미지에 맞게 잘린다.
- none : 이미지의 크기가 조정되지 않는다.
- scale-down : 이미지가 none 또는 포함의 가장 작은 버전을오 축소된다.

**object-position**

컨테이너 내에서 `<img>` 또는 `<video>`를 배치하는 방법을 지정하는 데 사용된다.

## Input

다양한 타입의 input 요소를 사용하여 입력을 받을 수 있다.

- text
- password
- radio
- checkbox
- file
- select
- textarea
- button
- submit
- fieldset

## Transform

요소를 회전, 크기 조절, 기울이기, 이동 효과를 부여할 수 있다. 애니메이션 효과를 제공하지 않고 적용하고 싶다면 트랜지션이나 애니메이션과 함께 사용하여야 한다.

`transform: none | transform-functions | initial | inherit;`

- none : 변환이 없어야 함을 정의
- initial : 이 속성을 기본값으로 설정
- inherit : 부모 요소에서 이 속성을 상속

**transform-functions**

- scale(x, y) : 요소의 크기게 영향을 준다.
- skew(x-angle, y-angle) : 요소를 왼쪽 또는 오른쪽으로 기울인다.
- translate(x, y) : 옆, 위아래로 이동한다.
- rotate(angle) : 현재 위치에서 시계 방향으로 회전한다.
- matrix() : 모든 변환을 하나로 결합한다.
- perspective() : 하위 요소의 3D 변환에 영향을 미치므로 모든 요소가 일관된 깊이 관점을 가질 수 있다.

## Animation

요소를 한 스타일에서 다른 스타일로 점진적으로 변경할 수 있다. CSS 애니메이션을 사용하려면 애니메이션에 대한 keyframes을 지정해야 한다.

**animation 속성값**

- animation-name : @keyframes 애니메이션의 이름을 지정
- animation-duration : 애니메이션이 한 주기를 완료하는데 걸리는 시간 지정
- animation-timing-function : 애니메이션의 속도 곡선을 지정
- animation-delay : 시작 지연을 지정
- animation-iteration-count : 재생해야 하는 횟수 지정
- animation-direction : 앞으로, 뒤로, 번갈아 재생해야 하는지 지정 ( normal, reverse, alternate, alternate-reverse )
- animation : 모든 속성을 설정하기 위한 약식 속성

## background-clip

요소 내에서 배경이 확장되어야 하는 거리를 정의한다.

- border-box : 기본값, 테두리 영역과 그 안쪽 영역
- padding-box : 패딩까지만 확장
- content-box : 내용부분만 확장
- initial
- inherit
