## Grid CSS

Flexbox는 1차원 레이아웃을 제공하는 반면에 Grid는 2차원의 레이아웃을 제공한다.

**Grid Containers Properties (`grid-properties`)**

- `grid-gap` : 상하좌우 여백, <br>
  [grid-column-gap | grid-row-gap] 대신 [column-gap | row-gap] 사용 권장
- `grid-template-columns` , `grid-template-rows` : 공백으로 구분된 값 목록으로 그리드의 열과 행 이름을 정의하고 크기를 정의한다.
  - `repeat(횟수, 크기)`
  - `fr` (fraction) : 사용 가능한 공간에 대한 비율
- `grid-column-start` , `grid-column-end` : 그리드 아이템의 열 시작 위치 지정, 열 끝 위치 지정
- `grid-row-start`, `grid-row-end` : 그리드 아이템의 행 시작 위치 지정, 행 끝 위치 지정

## Table

display를 table로 설정하면 요소가 테이블처럼 작동한다. 테이블 요소를 사용하지 않고 HTML 테이블의 복제본을 만들 수 있다.

- `display: table` : <table>
- `display: table-row` : <tr>
- `display: table-cell` : <td>
<br>
<aside>
💡 <b>요소 + 요소 선택자</b>는 다른 특정 요소 바로 뒤에 있는 요소를 선택한다

</aside>
