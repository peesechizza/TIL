# 5. Netflix 앱 완성하기

## 영화 나열을 위한 Row 컴포넌트 생성하기

1. Row 컴포넌트 생성 - `rafce`

   ```jsx
   import React from "react";

   const Row = () => {
     return <div>Row</div>;
   };

   export default Row;
   ```

2. App에 Row 가져오기

   ```jsx
   import "./App.css";
   import requests from "./api/requests";
   import Banner from "./components/Banner";
   import Nav from "./components/Nav";
   import Row from "./components/Row";

   function App() {
     return (
       <div className="app">
         <Nav />
         <Banner />
         <Row
           title="NETFLIX ORIGINAL"
           id="NO"
           fetchUrl={requests.fetchNetflixOriginals}
           isLargeRow
         />
         <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
         <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
         <Row
           title="Action Movies"
           id="AM"
           fetchUrl={requests.fetchActionMovies}
         />
         <Row
           title="Comedy Movies"
           id="CM"
           fetchUrl={requests.fetchComedyMovies}
         />
         <Row
           title="Horrow Movies"
           id="HM"
           fetchUrl={requests.fetchHorrorMovies}
         />
         <Row
           title="Romance Movies"
           id="RM"
           fetchUrl={requests.fetchRomanceMovies}
         />
         <Row
           title="Documentaries"
           id="DM"
           fetchUrl={requests.fetchDocumentaries}
         />
       </div>
     );
   }

   export default App;
   ```

3. 내려준 Props 가져오기

   ```jsx
   import React from "react";

   const Row = ({ title, id, fetchUrl, isLargeRow }) => {
     return <div>Row</div>;
   };

   export default Row;
   ```

4. 영화 정보 가져오기

   ```jsx
   const [movies, setMovies] = useState([]);

   useEffect(() => {
     fetchMovieData();
   }, []);

   const fetchMovieData = async () => {
     const request = await axios.get(fetchUrl);
     setMovies(request.data.results);
   };
   ```

5. UI 생성하기

   ```jsx
   return (
     <section className="row">
       <h2>{title}</h2>
       <div className="slider">
         <div className="slider__arrow-left">
           <span className="arrow">{"<"}</span>
         </div>
         <div className="row__posters" id={id}>
           {movies.map((movie) => (
             <img
               className={`row__poster ${isLargeRow && "row__posterLarge"}`}
               alt={movie.name}
               key={movie.id}
               src={`https://image.tmdb.org/t/p/original/${
                 isLargeRow ? movie.poster_path : movie.backdrop_path
               }`}
             />
           ))}
         </div>
         <div className="slider__arrow-right">
           <span className="arrow">{">"}</span>
         </div>
       </div>
     </section>
   );
   ```

6. Style 적용

   ```css
   .row {
     margin-left: 20px;
     color: white;
   }
   h2 {
     padding-left: 20px;
   }
   .slider {
     position: relative;
   }
   .slider__arrow-left {
     background-clip: content-box;
     padding: 20px 0;
     box-sizing: border-box;
     transition: 400ms all ease-in-out;
     cursor: pointer;
     width: 80px;
     z-index: 1000;
     position: absolute;
     left: 0;
     top: 0;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     visibility: hidden;
   }
   .slider__arrow-right {
     padding: 20px 0;
     background-clip: content-box;
     box-sizing: border-box;
     transition: 400ms all ease-in-out;
     cursor: pointer;
     width: 80px;
     z-index: 1000;
     position: absolute;
     right: 0;
     top: 0;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     visibility: hidden;
   }
   .arrow {
     transition: 400ms all ease-in-out;
   }
   .arrow:hover {
     transition: 400ms all ease-in-out;
     transform: scale(1.5);
   }
   .slider:hover .slider__arrow-left {
     transition: 400ms all ease-in-out;
     visibility: visible;
   }
   .slider:hover .slider__arrow-right {
     transition: 400ms all ease-in-out;
     visibility: visible;
   }
   .slider__arrow-left:hover {
     background: rgba(20, 20, 20, 0.5);
     transition: 400ms all ease-in-out;
   }
   .slider__arrow-right:hover {
     background: rgba(20, 20, 20, 0.5);
     transition: 400ms all ease-in-out;
   }

   .row__posters {
     display: flex;
     overflow-y: hidden;
     overflow-x: scroll;
     padding: 20px 0 20px 20px;
     scroll-behavior: smooth;
   }
   .row__posters::-webkit-scrollbar {
     display: none;
   }
   .row__poster {
     object-fit: contain;
     width: 100%;
     max-height: 144px;
     margin-right: 10px;
     transition: transform 450ms;
     border-radius: 4px;
   }
   .row__poster:hover {
     transform: scale(1.08);
   }
   .row__posterLarge {
     max-height: 320px;
   }
   .row__posterLarge:hover {
     transform: scale(1.1);
     opacity: 1;
   }

   .row__arrow-left {
     position: absolute;
     top: 0;
     left: 20px;
     height: 100%;
     width: 32px;
     background: rgba(0, 0, 0, 0.2);
     display: flex;
     align-items: center;
   }
   .row__arrow-right {
     position: absolute;
     top: 0;
     right: 0px;
     height: 100%;
     width: 32px;
     background: rgba(0, 0, 0, 0.2);
     display: flex;
     align-items: center;
   }
   @media screen and (min-width: 1200px) {
     .row__poster {
       max-height: 160px;
     }
     .row__posterLarge {
       max-height: 360px;
     }
   }
   @media screen and (max-width: 768px) {
     .row__poster {
       max-height: 100px;
     }
     .row__posterLarge {
       max-height: 280px;
     }
   }

   .swiper-pagination {
     text-align: right !important;
   }

   .swiper-pagination-bullet {
     background: gray !important;
     opacity: 1 !important;
   }

   .swiper-pagination-bullet-active {
     background: white !important;
   }

   .swiper-button-prev {
     color: white !important;
   }

   .swiper-button-next {
     color: white !important;
   }

   .swiper-button-next:after,
   .swiper-button-prev:after {
     font-size: 1.3rem !important;
     font-weight: 600 !important;
   }
   ```

## 슬라이드 기능 추가하기

**화살표 방향 클릭 시 슬라이드 구현**

```jsx
<div className="slider__arrow-left">
  <span
    className="arrow"
    onClick={() => {
      document.getElementById(id).scrollLeft -= window.innerWidth - 80;
    }}
  >
    {"<"}
  </span>
</div>

<div className="slider__arrow-right">
  <span
    className="arrow"
    onClick={() => {
      document.getElementById(id).scrollLeft += window.innerWidth - 80;
    }}
  >
    {">"}
  </span>
</div>
```

## Styled Component 이용해서 Footer 생성하기

1. UI 생성, style 적용

```jsx
import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>넷플릭스 대한민국</FooterLinkTitle>
          <FooterLinkContent>
            <FooterLink href="https://help.netflix.com/ko/node/412">
              넷플릭스 소개
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko">
              고객 센터
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko">
              미디어 센터
            </FooterLink>
            <FooterLink href="https://help.netflix.com/legal/termsofuse">
              이용약관
            </FooterLink>
            <FooterLink href="https://help.netflix.com/legal/privacy">
              개인정보
            </FooterLink>
            <FooterLink href="https://help.netflix.com/legal/corpinfo">
              회사정보
            </FooterLink>
            <FooterLink href="https://help.netflix.com/legal/contactus">
              문의하기
            </FooterLink>
            <FooterLink href="https://help.netflix.com/legal/notices">
              법적 고지
            </FooterLink>
          </FooterLinkContent>
        </FooterLinkContainer>
        <FooterDescContainer>
          <FooterDescRights>Netflix RIGHTS RESERVED.</FooterDescRights>
        </FooterDescContainer>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  color: gray;
  font-size: 17px;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

const FooterDescContainer = styled.div`
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.h2`
  color: white;
  font-size: 14px;
  text-align: center;
`;
```

1. App에 Footer import

## 영화 자세히 보기 클릭 시 모달 생성하기

1. MovieModal 컴포넌트 생성 ( ./src/component/MovieModal/index.js)

   ```jsx
   import React from "react";

   function MovieModal() {
     return <div></div>;
   }

   export default MovieModal;
   ```

2. 해당 영화 클릭 시 모달 Open

   ```jsx
   <img
     onClick={() => handleClick(movie)}
     className={`row__poster ${isLargeRow && "row__posterLarge"}`}
     alt={movie.name}
     key={movie.id}
     src={`https://image.tmdb.org/t/p/original/${
       isLargeRow ? movie.poster_path : movie.backdrop_path
     }`}
   />

   ------------------------------------------------------------------------------

   const [modalOpen, setModalOpen] = useState(false);

   const handleClick = (movie) => {
       setModalOpen(true);
   };

   ------------------------------------------------------------------------------

   {modalOpen && <MovieModal setModalOpen={setModalOpen} />}
       </section>
   ```

3. 클릭한 영화 정보 가져오기

   ```jsx
   const [movieSelected, setMovieSelected] = useState({});

   ------------------------------------------------------------------------------

   const handleClick = (movie) => {
   	setModalOpen(true);
   	setMovieSelected(movie);
   };

   ------------------------------------------------------------------------------

   {modalOpen && (
     <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
   )}
   ```

4. Props 가져오기

   ```jsx
   import React from "react";
   import "./MovieModal.css";

   function MovieModal({
     backdrop_path,
     title,
     overview,
     name,
     release_date,
     first_air_data,
     vote_average,
     setModalOpen,
   }) {
     return <div></div>;
   }

   export default MovieModal;
   ```

## Movie modal UI 생성하기

1. UI 생성하기

   ```jsx
   return (
     <div className="presentation" role="presentation">
       <div className="wrapper-modal">
         <div className="modal">
           <span onClick={() => setModalOpen(false)} className="modal-close">
             X
           </span>
           <img
             className="modal__poster-img"
             src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
             alt="modal__poster-img"
           />

           <div className="modal__content">
             <p className="modal__details">
               <span className="modal__user-perc">100% for you</span>{" "}
               {release_date ? release_date : first_air_date}
             </p>
             <h2 className="modal__title">{title ? title : name}</h2>
             <p className="modal__overview">평점 : {vote_average}</p>
             <p className="modal__overview">{overview}</p>
           </div>
         </div>
       </div>
     </div>
   );
   ```

2. style 적용

   ```css
   .modal {
     position: relative;
     max-width: 800px;
     box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14),
       0px 1px 14px 0px rgba(0, 0, 0, 0.12);
     background: #111;
     overflow: hidden;
     border-radius: 8px;
     transition: all 400ms ease-in-out 2s;
     animation: fadeIn 400ms;
   }
   .modal__poster-img {
     width: 100%;
     height: auto;
   }
   .modal__content {
     padding: 40px;
     color: white;
   }
   .modal__title {
     padding: 0;
     font-size: 40px;
     margin: 16px 0;
   }
   .modal__details {
     font-weight: 600;
     font-size: 18px;
   }
   .modal__overview {
     font-size: 20px;
     line-height: 1.5;
   }
   .modal__user-perc {
     color: #46d369;
   }
   .modal::-webkit-scrollbar {
     display: none;
     visibility: hidden;
   }

   /* Hide scrollbar for IE, Edge and Firefox */
   .modal {
     -ms-overflow-style: none; /* IE and Edge */
     scrollbar-width: none; /* Firefox */
   }
   .wrapper-modal {
     position: fixed;
     inset: 0px;
     background-color: rgb(0 0 0 / 71%);
     -webkit-tap-highlight-color: transparent;
     display: flex;
     justify-content: center;
   }
   .presentation {
     z-index: 1200;
     position: absolute;
   }
   .modal-close {
     position: absolute;
     right: 20px;
     top: 20px;
     cursor: pointer;
     z-index: 1000;
     color: white;
   }
   @media screen and (max-height: 768px) {
     .wrapper-modal {
       align-items: unset;
       padding-top: 2rem;
     }
     .modal {
       overflow-y: scroll;
     }
   }
   @media screen and (max-width: 768px) {
     .modal__overview {
       font-size: 16px;
     }
     .modal__details {
       font-size: 16px;
     }
     .wrapper-modal {
       padding: 0;
     }
     .modal {
       overflow-y: scroll !important;
     }
   }
   @keyframes fadeIn {
     from {
       opacity: 0;
       transform: scale(0.5);
     }
     to {
       opacity: 1;
       transform: scale(1);
     }
   }
   ```

## React Router Dom

### React Router Dom이란?

React Router DOM을 사용하면 **웹 앱에서 동적 라우팅을 구현할 수 있다.** 라우팅(요청한 URL에 따라 맞는 URL을 보여주는 것)이 실행중인 앱 외부의 구성에서 처리되는 기존 라우팅 아키텍처와 달리 React Router DOM은 앱 및 플랫폼의 요구 사항에 따라 컴포넌트 기반 라우팅을 용이하게 한다.

### Single Page Application (SPA)

리액트는 SPA이기 때문에 하나의 index.html 템플릿 파일을 가지고 있다. **이 하나의 템플릿에 자바스크립트를 이용해서 다른 컴포넌트를 이 index.html 템플릿에 넣으므로 페이지를 변경해주게 된다.** 이 때 React Router Dom 라이브러리가 새 컴포넌트로 라우팅/탐색을 하고 렌더링하는데 도움을 준다.

### React Router Dom 설치 및 설정

1. `npm install react-router-dom —save`
2. 앱에서 React Router를 사용할 수 있도록 설정하려면 src 폴더에서 index.js를 열고 react-router-dom에서 BrowserRouter를 가져온 다음 루트 구성 요소(App 구성 요소)를 그 안에 래핑한다.
   - `BrowserRotuer` **:** HTML5 History API(pushState, replaceState 및 popstate 이벤트)를 사용하여 UI를 URL과 동기화된 상태로 유지해준다.
   - `Routes` : Routes는 앱에서 생성될 모든 개별 경로에 대한 컨테이너 / 상위 역할을 한다. Route로 생성된 자식 컴포넌트 중에서 매칭되는 첫번째 Route를 렌더링 해준다.
   - `Route` : Route는 단일 경로를 만드는데 사용된다. 두 가지 속성을 취한다.
     - `path`는 원하는 컴포넌트의 URL 경로를 지정한다. 이 경로 이름을 원하는대로 정할 수 있다. 경로 이름이 백슬래시 `\` 인 컴포넌트는 앱이 처음 로드될 때 마다 먼저 렌더링 된다. 이는 홈 구성 요소가 렌더링되는 첫 번째 구성 요소가 됨을 의미한다.
     - `element`는 경로에 맞게 렌더링 되어야 하는 컴포넌트를 지정한다.
   - `Link` : Link 구성 요소는 HTML의 앵커 요소(`<a>`)와 유사하다. to 속성은 링크의 경로를 지정한다. 앱 구성 요소에 나열된 경로 이름을 생성했기 때문에 링크를 클릭하면 경로를 살펴보고 해당 경로 이름으로 구성 요소를 렌더링 한다.

## React Router DOM APIs

### 중첩 라우팅 (Nested Routes)

이것은 React Router의 가장 강력한 기능 중 하나이므로 복잡한 레이아웃 코드를 어지럽힐 필요가 없다. 대부분의 레이아웃은 URL의 세그먼트에 연결되며 React Router는 이를 완전히 수용한다.

### Outlet

자식 경로 요소를 렌더링하려면 부모 경로 요소에서 <Outlet>을 사용해야 한다. 이렇게 하면 하위 경로가 렌더링 될 때 중첩된 UI가 표시될 수 있다. 부모 라우트가 정확히 일치하면 자식 인덱스 라우트를 렌더링하거나 인덱스 라우트가 없으면 아무것도 렌더링 하지 않는다. react-router-dom에서 가져와서 사용한다.

### useNavigate

경로를 바꿔준다.

### useParams

:style 문법을 path 경로에 사용했다면 `useParams()`로 읽을 수 있다.

### useLocation

이 Hooks는 현재 위치 객체를 반환한다. 이것은 현재 위치가 변경될 때 마다 일부 side effect를 수행하려는 경우에 유용할 수 있다.

### useRoutes

useRoutes Hooks는 <Routes>와 기능적으로 동일하지만 <Route> 요소 대신 JavaScript 객체를 사용하여 경로를 정의한다. 이러한 객체는 일반 <Route> 요소와 동일한 속성을 갖지만 JSX가 필요하지 않다.

## Netflix 앱에 React Router DOM 적용하기

### 페이지 생성을 위한 폴더 및 파일 추가

1. `./src/pages/DetailPage/index.js` 추가
2. `./src/pages/MainPage/index.js` 추가
3. `./src/pages/SearchPage/index.js` , `./src/pages/SearchPage/SearchPage.css` 추가

### App.js 를 라우팅을 위한 파일로 변경

현재 App.js가 메인 페이지를 위한 컴포넌트로 이루어져있으므로 관한 내용을 `MainPage/index.js`로 옮긴다.

1. `App.js` 파일

```jsx
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
```

1. `index.js` 파일

```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();
```

1. `MainPage/index.js` 파일

```jsx
import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/requests";

export default function MainPage() {
  return (
    <div>
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horrow Movies"
        id="HM"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance Movies"
        id="RM"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        id="DM"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}
```

## 검색 페이지 구현

1. NavBar에 검색 input 생성

```jsx
<input
  value={searchValue}
  onChange={handleChange}
  className="nav__input"
  type="text"
  placeholder="영화를 검색해주세요."
/>

--------------------------------------------------------

const [searchValue, setSearchValue] = useState("");
const navigate = useNavigate();

--------------------------------------------------------

const handleChange = (event) => {
  setSearchValue(event.target.value);
  navigate(`/search?q=${event.target.value}`);
};
```

```css
.nav__input {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.582);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: none;
}
```

1. Search 페이지에서 SearchTerm 가져오기

```jsx
import React from "react";
import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");
  return <div></div>;
}
```

> `console.log(useLocation())` 을 하면 console 창에 pathname과 search 값 등이 나오는데 pathname은 “/search”, search는 “?q=value값” 으로 나온다.

1. SearchTerm이 바뀔 때 마다 새로 영화 데이터 가져오기

```jsx
import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  return <div></div>;
}
```

> `useEffect` 에서 **searchTerm**을 dependency로 가져오는 이유는 검색을 입력할 때 변경해서 입력하는 경우 바뀐거에 대한 요청을 또 보내서 새로운 영화 데이터를 가져오기 위함이다.

## 검색 페이지 UI 구현

1. SearchTerm에 해당 영화 데이터가 있을 경우

   ```jsx
   const renderSearchResults = () => {
   return searchResults.length > 0 ? (
   <section className="search-container">
        {searchResults.map((movie) => {
        if (movie.backdrop_path !== null && movie.media_type !== "person") {
             const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
             return (
             <div className="movie">
             <div className="movie__column-poster">
                  <img src={movieImageUrl} alt="" className="movie__poster" />
             </div>
             </div>
             )
        }
        })}
   </section>
   )
   }
   ```

2. SearchTerm에 해당 영화 데이터가 없을 경우

   ```jsx
   <section className="no-results">
     <div className="no-results__text">
       <p>Your search for "{searchTerm}" did not have any matches.</p>
       <p>Suggestions:</p>
       <ul>
         <li>Try different keywords</li>
       </ul>
     </div>
   </section>
   ```

3. component에서 return

   ```jsx
   return renderSearchResults();
   ```

4. style 적용

   ```css
   .searchContent {
     height: 100vh;
     background-color: black;
   }

   .search-container {
     background-color: black;
     width: 100%;
     text-align: center;
     padding: 5rem 0;
   }

   .no-results {
     display: flex;
     justify-content: center;
     align-content: center;
     color: #c5c5c5;
     height: 100%;
     padding: 8rem;
   }

   .movie {
     flex: 1 1 auto;
     display: inline-block;
     padding-right: 0.5rem;
     padding-bottom: 7rem;
   }

   .movie__column-poster {
     cursor: pointer;
     transition: transform 0.3s;
     -webkit-transition: transform 0.3s;
   }

   .movie__column-poster :hover {
     transform: scale(1.25);
   }

   .movie__poster {
     width: 90%;
     border-radius: 5px;
   }
   ```

## useDebounce Custom Hooks 만들기

### Debounce란?

debounce function 은 사용자가 미리 결정된 시간 동안 타이핑을 멈출 때까지 keyup 이벤트의 처리를 지연시킨다.

이렇게 하면 UI 코드가 모든 이벤트를 처리할 필요가 없고 서버로 전송되는 API 호출 수도 크게 줄어든다. 입력된 모든 문자를 처리하면 성능이 저하되고 백엔드에 불필요한 로드가 추가될 수 있다.

### hooks 폴더 및 파일 생성

`.src/hooks/useDebounce.js`

### useDebounce Hooks 생성

```jsx
import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
```

> `setTimeout()`
>
> 어떤 코드를 실행하지 않고 일정 시간 기다린 후 실행해야 하는 경우 setTimeout() 함수를 이용하면 된다.
>
> setTimeout() 함수는 첫번째 인자로 실행할 코드를 담고 있는 함수를 받고, 두번째 인자로 지연 시간을 밀리초 단위로 받는다.
>
> setTimeout() 함수는 세번째 인자부터는 가변 인자를 받는데, 첫번째 인자로 넘어온 함수가 인자를 받는 경우, 이 함수에 넘길 인자를 명시해주기 위해서 사용한다.
>
> setTimeout 함수는 타임아웃 아이디라고 불리는 숫자를 반환한다. 타임아웃 아이디는 함수를 호출할 때 마다 내부적으로 생성되는 타이머 객체를 가리키고 있다. 이 값을 인자로 `clearTimeout()` 함수를 호출하면 기다렸다가 실행될 코드를 취소할 수 있다.

### searchTerm -> debouncedSearchTerm

```jsx
const searchTerm = query.get("q");
const debouncedSearchTerm = useDebounce(searchTerm, 500);
```

> 🔗 **출처**
>
> **[자바스크립트의 setTimeout()과 setInterval() 함수](https://www.daleseo.com/js-timer/)**

## useParams를 이용한 영화 상세 페이지 구현하기

### 포스터 클릭 시 상세 페이지로

`./src/pages/SearchPage/index.js`

```jsx
<div
     onClick={() => navigate(`/${movie.id}`)}
     className="movie__column-poster"
>
```

```jsx
const navigate = useNavigate();
```

### 상세 페이지에서 영화 상세 정보 가져오기

```jsx
import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  let { movieId } = useParams();
  const [movies, setMovies] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`movie/${movieId}`);
      setMovies(request.data);
    }
    fetchData();
  }, [movieId]);

  return <div>DetailPage</div>;
}
```

### UI 완성하기

```jsx
if (!movies) return null;
return (
  <section>
    <img
      className="modal__poster-img"
      src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
      alt="modal__poster-img"
    ></img>
  </section>
);
```

> 🔗 **출처**
>
> **[[React] useParams() 사용하여 파라미터 가져오기](https://velog.io/@nemo/useParams)**

## 모달 창 외부 클릭 시 모달 닫게 만드는 Custom Hooks 생성

### useRef()

특정 DOM을 선택할 때 사용하는 React Hooks이다.

보통 JavaScript에서는 `getElementById`, `querySelctor` 같은 DOM Selector 함수를 사용해서 DOM을 선택한다.
리액트에서는 ref라는 것을 이용하여 DOM을 선택하고, 클래스 컴포넌트에서는 `React.createRef`, 함수형 컴포넌트에서는 `useRef`을 사용한다.

**DOM을 직접 선태해야 할 경우들**

1. 엘리먼트 크기를 가져와야 할 때
2. 스크롤바 위치를 가져와야 할 때
3. 엘리먼트에 포커스를 설정해줘야 할 때
4. ...

### useRef() 사용법

`useRef()` 를 이용해서 Ref 객체를 만들고, 이 객체를 특정 DOM에 ref 값으로 설정한다. 이렇게 되면 Ref 객체의 `.current` 값이 특정 DOM을 가리키게 된다.

> 🔗 **출처**
>
> **[[React] useRef란?](https://velog.io/@jinyoung985/React-useRef%EB%9E%80)**

## swiper 모듈을 이용한 터치 슬라이드 구현하기

### swiper 설정

`npm install swiper —-save`

### swiper 적용 및 import

```jsx
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
```

```jsx
return (
    <section className="row">
      <h2>{title}</h2>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        <div className="row__posters" id={id}>
          {movies.map((movie) => (
            <SwiperSlide>
              <img
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                alt={movie.name}
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
};
```

### style 적용

```css
.swiper-pagination {
  text-align: right !important;
}

.swiper-pagination-bullet {
  background: gray !important;
  opacity: 1 !important;
}

.swiper-pagination-bullet-active {
  background: white !important;
}

.swiper-button-prev {
  color: white !important;
}

.swiper-button-next {
  color: white !important;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 1.3rem !important;
  font-weight: 600 !important;
}
```

## github를 이용해서 배포하기

### 깃허브 저장소 생성

### API_KEY 환경 변수로 숨기기

root-.env 생성

```jsx
REACT_APP_MOVIE_DB_API_KEY = "";
```

```jsx
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: "ko-KR",
  },
});

export default instance;
```

### 로컬 앱과 저장소 연결

### gh-pages 모듈 설치

`npm install gh-pages —save-dev`

### 홈페이지 URL 작성

```jsx
"homepage": "https://{깃허브 유저 이름}.github.io/{저장소 이름}",
```

### 배포를 위한 Script 추가

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

### react router dom의 기본 경로 변경

기본 경로 : https://~~~/react-netflix(basename)

```jsx
root.render(
  <BrowserRouter basename="">
    <App />
  </BrowserRouter>
);
```

### deploy 시작

`npm run depoly`
