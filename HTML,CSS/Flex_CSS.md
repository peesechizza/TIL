## Flexbox CSS

1차원이며 공간이 균등하게 분산된 컨테이너 내부에 요소를 배치할 수 있고 효율적이고 동적으로 배열할 수 있는 레이아웃 모델이다.

### **Flex Container**

Flexbox의 이 구성 요소는 flex 또는 inline-flex로 설정하여 상위 요소의 속성을 정의한다.

`display: flex | inline-flex`

**Flex Container Properties**

- `flex-direction` : 컨테이너 내의 아이템을 배치할 때 사용할 주축 및 방향을 지정하는 속성
  - `row(기본값)` : 행 방향 (→)
  - `row-reverse` : 행 역방향 (←)
  - `column` : 열 방향 (↓)
  - `column-reverse` : 열 역방향 (↑)
- `flex-wrap` : 컨테이너가 더 이상 아이템들을 한 줄에 담을 공간이 없을 때 줄바꿈을 결정하는 속성
  - `nowrap(기본값)` : 한 줄에 표시
  - `wrap` : 위에서 아래로
  - `wrap-reverse` : 아래에서 위로
- `flex-flow` : flex-direction, flex-wrap 속성의 약어로 컨테이너의 기본 축과 교차 축을 정의
  - `flex-flow: <flex-direction> <flex-wrap>`
- `justify-content` : 메인 축으로 콘텐츠 항목 사이와 주위에 공간을 분배하는 방법을 정의
  - `flex-start(기본값)` : 플렉스 방향 시작 부분
  - `flex-end` : 방향 끝
  - `center` : 중앙
  - `space-between` : 고르게 분포
  - `space-around` : 아이템 사이 동일 간격
  - `space-evenly` : 공간과 아이템 사이 간격 동일
- `align-items:` : 축의 수직 방향을 기준으로 정렬
  - `flex-start` : 컨테이너 시작 부분
  - `flex-end` : 끝 부분
  - `center` : 중앙
  - `stretch` : 전체 차지
  - `baseline` : 기준선 위치
- `align-content:` 축의 수직 방향을 기준으로 (두 줄 이상일 때) 정렬
  - `normal(기본값)` : 기본 위치
  - `flex-start` : 컨테이너 시작 부분
  - `flex-end` : 끝 부분
  - `center` : 중앙
  - `stretch` : 공간 차지
  - `space-between` : 고르게 분포
  - `space-around` : 아이템들이 동일한 간격으로 분포
  - `space-evenly` : 아이템들이 주변에 동일한 공간으로 분포
- `align-self:` : 개별 플렉스 항목에 대해 기본 정렬을 재정의, `align-content` 속성은 지워줘야 제대로 적용 가능하다.

### **Flex Items**

flex 컨테이너의 직계 자식이다.

**Flex Items Properties**

- `order:` : 컨테이너에 나타나는 순서를 제어 (기본값 0)
- `flex-grow:` : 아이템의 기본 너비를 자동으로 늘여서 적절한 너비로 배치되도록 맞추는 기능 (기본값 0)
- `flex-shrink:` : 아이템의 기본 너비를 자동으로 줄여서 적절한 너비로 배치되도록 맞추는 기능 (기본값 1), `flex-wrap: wrap` **속성을 부여한 경우 적용되지 않는다.**
- `flex-basis:` : 아이템의 기본 사이즈를 지정하는 속성, width에서 사용하는 모든 단위를 사용할 수 있음 (기본값 auto)
- `flex:` : flex-grow, flex-shrink 및 flex-basis가 결합
  - `flex: none | <flex-grow> <flex-shrink> <flex-basis>`
  - 값 한 개
    - 단위가 없으면 flex-grow, 단위가 있으면 flex-basis
  - 값 두 개
    - 첫 번째 값은 단위가 없는 숫자 flex-grow
    - 두 번째 값은 단위가 없으면 flex-shrink, 단위가 있거나 auto면 flex-basis
  - 값 세 개
    - 첫 번째 값은 단위가 없는 숫자 flex-grow
    - 두 번째 값은 단위가 없는 숫자 flex-shrink
    - 세 번째 값은 단위가 있거나 auto flex-basis
