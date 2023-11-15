## Scalable Vector Graphics; SVG

고유한 유형의 이미지 형식이고 다른 종류와 달리 사용자가 보는 이미지를 구성하기 위해 픽셀에 의존하지 않는다. 대신 ‘벡터’ 데이터를 이용한다.

### 장점

- 텍스트 에디터에서 작성하고 수정할 수 있다.
- XML 포맷으로 작성되므로 JS나 CSS로 조작할 수 있다.
- 벡터 그래픽을 사용하기 때문에 크기에 관계없이 항상 같은 해상도를 유지한다.
- 스크린 리더는 SVG 이미지에 포함된 모든 단어를 스캔할 수 있다.

### 단점

- 로고, 일러스트레이션 및 차트와 같은 웹 그래픽에 적합하나 고품질 디지털 사진을 표시하기가 어렵다. (상세한 사진은 JPEG 사용)
- 최신 브라우저에서만 SVG 이미지를 지원한다.

### SVG 이미지 만들기

1. `<svg>` 시작 태그, `</svg>` 닫는 태그
   - `<svg height=”세로 길이” width=”가로 길이”>`
2. **Circle**
   - `<circle cx=”x좌표” cy=”y좌표” r=”반지름” stroke=”선 색상” stroke-width=”선 굵기” fill=”내부 색상” />`
3. **Ellipse**
   - `<ellipse cx=”타원 중심의 x좌표” cy=”타원 중심의 y좌표” rx=”x방향 반지름” ry=”y방향 반지름” 
style=”fill=내부색상 ;stroke=선색상 ;stroke-width=선굵기 />`
4. **Line**
   - `<line x1=”점1의 x값” y1=”점1의 y값” x2="점2의 x값" y2="점2의 y값" 
style=”;stroke=선색상 ;stroke-width=선굵기 />`
5. **Polygon**
   - `<polygon points="x좌표 y좌표, x좌표 y좌표, x좌표 y좌표, ..."
style=”fill=내부색상 ;stroke=선색상 ;stroke-width=선굵기 />`
6. **Rectangle**
   - `<rect x=”좌측 상단 x값” y=”좌측 상단 y값” width=”사각형의 폭” height=”사각형의 높이” />`
7. **path**
   - 모양을 정의하는 일반 요소로 path를 이용하여 모든 기본 모양을 만들 수 있다.
