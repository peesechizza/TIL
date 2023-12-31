## Position CSS

position 속성은 문서 상에 요소를 배치하는 방법을 지정한다.

- static : 기본값, 다른 태그와의 관계에 의해 자동으로 배치되며 위치를 임의로 설정 불가능
- relative : 요소 자기 자신을 기준으로 배치
- absolute : 부모 요소를 기준으로 배치, 부모 요소에 `position: static` 이 아닌 것이 있으면 그것을 기준으로 배치하고 없다면 body를 기준으로 배치
- fixed : 스크롤과 상관없이 항상 문서 좌측 상단을 기준으로 좌표 고정
- sticky : 스크롤 영역 기준으로 배치, 주어진 오프셋 위치가 뷰포트에서 만날 때 까지 `static`하게 배치된 다음 제자리에 `fixed` 됨

---

<aside>
💡 `absolute`을 가진 요소는 주로 `relative`를 가진 요소 안에 사용된다. `relative`인 컨테이너 내부에 `absolute` 객체가 있으면 절대 좌표를 계산할 때 relative 기준점으로 잡게된다.

</aside>

## Z-index

- `position` 속성을 이용하면 요소를 겹치게 놓을 수 있는데 요소들의 수직 위치를
  `Z-index` 로 정하게 된다. 값은 정수이며, 숫자가 클 수록 위로, 숫자가 작을 수록 아래로 내려간다.
- `Z-index` 가 같거나 두 요소가 `position: static` 이면 코드에서 나중에 작성된 요소가 앞에 나타난다.
- 부모에게 `z-index` 값을 줄 경우 부모끼리 먼저 순서를 정한 뒤 자식이 적용된다.
- `z-index` 는 `position` 속성을 지정한 뒤에 지정해야 한다.

## Media Query

화면 해상도, 기기 방향 등의 조건으로 HTML에 적용하는 스타일을 전환할 수 있는 속성이다. 반응형 웹 디자인에서는 미디어 쿼리를 사용해 적용하는 스타일을 기기마다 전환할 수 있다.

```css
@media [only 또는 not] [미디어 유형] [and 또는 ,] (조건) {
	스타일
}
```

`[only 또는 not]`

- `only` : 미디어 쿼리를 지원하는 브라우저에서만 해석하게 해주는 키워드
- `not` : not 다음의 조건을 제외한 모든 미디어 유형에 적용

`[미디어 유형]` : 미디어별로 적용할 CSS를 따로 작성하는 것, 생략 가능하며 생략 시에는 모든 미디어에서 작동한다.

- all : 모든 장치
- print : 인쇄 장치
- screen : 컴퓨터 화면 장치 또는 스마트 기기의 화면
- tv : 영상, 음성이 출력되는 장치
- projection : 프로젝터
- handheld : 손에 들고다니는 소형 장치
- speech : 음성 출력 장치
- aural : 음성 합성 장치 (화면을 읽어 소리로 출력)
- embossed : 점자 인쇄 장치 (화면을 읽어 점자를 찍음)
- tty : 디스플레이 기능이 제한된 장치
- braille : 점자 표시 장치

`[and 또는 ,]`

- `and` : 앞뒤 조건이 모두 사실일 때 뒤에 따라오는 것 해석
- `,` : 앞뒤 조건 중 하나만 사실이더라도 뒤에 따라오는 것 해석

`(조건)` : 조건이 사실일 때 뒤에 따라오는 것 해석

- min-width : 설정 width 이상인 경우 적용
  ```css
  @media (min-width: 600px) {
    h1 {
      font-size: 100px;
    }
  }

  @media (width >=600px) {
    h1 {
      font-size: 100px;
    }
  }
  ```
- max-width : 설정 width 이하인 경우 적용

## CSS 적용 우선순위

1. `!important` 를 붙인 속성
2. HTML에서 style을 직접 지정한 속성
3. `#id`로 지정한 속성
4. `.class`, `:pseudoClass` 로 지정한 속성
