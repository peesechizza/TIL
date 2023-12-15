# 4. Netflix 앱 만들기 시작

## Create React App으로 리액트 설치하기

`react-netflix-clone` 폴더 생성 후 터미널에서 `npx create-react-app ./` 명령어 입력 후 설치

## The Movie DB API 생성

1. **[The Movie DB Website로 이동](https://www.themoviedb.org/)**
2. 가입 후 로그인 & API_KEY 받기
   - Settings - API - API Key
3. Text Editor에서 the MovieDB API를 위한 설정
   - Get Movie By Latest
     - `https://api.themoviedb.org/3/movie/latest?api_key<<api_key>>&language=en-US`
   - Get Movie Detail
     - `https://api.themoviedb.org/3/movie/{movie_id}?api_key<<api_key>>&language=en-US`
   - Get Movie Reviews
     - `https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key<<api_key>>&language=en-US&page=1`
   - Get Trending
     - `https://api.themoviedb.org/3/movie/latest?api_key<<api_key>>&language=en-US`
4. API_URL 동일 부분
   - `https://api.themoviedb.org/3/`
5. 이미지 가져오기
   - `https://api.themoviedb.org/3/` - 동일한 URL
   - `p/original`, `p/w500` - 이미지 사이즈
   - 유니크한 이미지 이름

## The Movie DB API 요청을 위한 Axios 인스턴스 생성 및 요청 보내기

### Axios

Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 **HTTP 비동기 통신 라이브러리**이다. 쉽게 말해서 백엔드와 프론트엔드가 통신을 쉽게 하기 위해 Ajax와 더불어 사용한다.

### Axios 사용 방법

- axios 모듈 설치
  - `npm install axios —save`

### Axios 인스턴스화 하는 이유

`https://api.themoviedb.org/3/` 와 같이 동일한 부분을 계속 입력하는 불필요를 막기 위해서이다.

### Axios 인스턴스 만드는 순서

1. 인스턴스 생성할 폴더 파일 생성 `src/api/axios.js` `src/api/requests.js`
2. **axios.js**

   ```jsx
   import axios from "axios";

   const instance = axios.create({
     baseURL: "https://api.themoviedb.org/3",
     params: {
       api_key: "b96c3092d214a4f2e054322908622fa3",
       language: "ko=KR",
     },
   });

   export default instance;
   ```

   `baseURL` 에 중복되는 경로를 설정해준다.

3. **requests.js**

   - 영화 장르별, 평점별 등등 영화 가져오기

   ```jsx
   const requests = {
     fetchNowPlaying: `/movie/now_playing`,
     fetchNetflixOriginals: `/discover/tv?with_networks=213`,
     fetchTrending: `/trending/all/week`,
     fetchTopRated: `/movie/toe_rated`,
     fetchActionMovies: `/discover/movie?with_genres=28`,
     fetchComedyMovies: `/discover/movie?with_genres=35`,
     fetchHorrorMovies: `/discover/movie?with_genres=27`,
     fetchRomanceMovies: `/discover/movie?with_genres=10749`,
     fetchDocumentaries: `/discover/movie?with_genres=99`,
   };

   export default requests;
   ```

   `export` 는 다른 파일에서도 쓸 수 있게 한다.

## 넷플릭스 Application 전체 구조 생성하기

<img width="413" alt="스크린샷 2023-12-13 오후 1 15 55" src="https://github.com/peesechizza/TIL/assets/110324109/7d579c81-9ec9-4f3c-a19f-d542e539d087">

![스크린샷 2023-12-13 오후 1 19 26](https://github.com/peesechizza/TIL/assets/110324109/f7761a9a-bfdf-4a68-a54f-8342246f218a)

## Nav bar 생성하기

1. Nav 컴포넌트 생성

   ```jsx
   import React from "react";

   export default function Nav() {
     return <div>Nav</div>;
   }
   ```

2. App 에서 Nav Import 하기

   ```jsx
   import "./App.css";
   import Nav from "./components/Nav";

   function App() {
     return (
       <div className="app">
         <Nav />
       </div>
     );
   }

   export default App;
   ```

   ```jsx
   * {
     margin: 0;
   }

   .app {
     background: #111;
   }
   ```

3. UI 완성하기

   ```jsx
   import React from "react";

   export default function Nav() {
     return (
       <nav>
         <img
           alt="Netflix logo"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
           className="nav__logo"
           onClick={() => window.location.reload()}
         />
         <img
           alt="User logged"
           src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
           className="nav__avatar"
         />
       </nav>
     );
   }
   ```

4. style 적용하기 - Nav 컴포넌트에서 `import "./Nav.css"`

   ```css
   .nav {
     position: fixed;
     top: 0;
     width: 100%;
     height: 30px;
     z-index: 1;
     padding: 20px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     transition-timing-function: ease-in;
     transition: all 0.5s;
   }

   .nav__black {
     background-color: #111;
   }

   .nav__logo {
     position: fixed;
     left: 40px;
     width: 80px;
     object-fit: contain;
   }

   .nav__avatar {
     position: fixed;
     right: 40px;
     width: 30px;
     object-fit: contain;
   }
   ```

5. 스크롤 시 navBar 색깔 변경

   ```jsx
   const [show, handleShow] = useState(false);

   useEffect(() => {
     window.addEventListener("scroll", () => {
       if (window.scrollY > 50) {
         handleShow(true);
       } else {
         handleShow(false);
       }
     });

     return () => {
       window.removeEventListener("scroll", () => {});
     };
   }, []);
   ```

   ```jsx
   <nav className={`nav ${show && "nav__black"}`}>
   ```

   `show && “nav__black”` 은 show 값이 true면 nav\_\_black의 className을 사용하고 false면 아무값도 반환하지 않는다.

### useEffect()

useEffect 함수는 **리액트 컴포넌트가 렌더링 될 때 마다 특정 작업을 실행할 수 있도록 하는 Hook**이다. useEffect는 component가 생성, 업데이트, 제거 할 때 각각 특정 작업을 처리할 수 있다.

**useEffect() 사용법**

`useEffect( function, deps )`

- `function` : 수행하고자 하는 작업
- `deps` : 배열 형태, 배열 안에는 검사하고자 하는 특정 값, 빈 배열

Component가 mount 됐을 때 (처음 나타났을 때)

```jsx
useEffect(() => {
  // 마운트 될 때만 실행
}, []);
```

컴포넌트가 화면에 가장 처음 렌더링 될 때 한 번만 실행하고 싶을 때는 deps 위치에 빈 배열을 넣는다.

```jsx
useEffect(() => {
  // 렌더링 될 때 마다 실행
});
```

만약 배열을 생략한다면 리렌더링 될 때 마다 실행된다.

> 🔗 **출처**
>
> [[React] useEffect() 함수](https://xiubindev.tistory.com/100)
>
> [[JavaScript] 논리연산자 && 를 조건문처럼 쓰지말자](https://brunch.co.kr/@newnorm/117)\*\*

## 이미지 배너 생성하기 (Banner.js)

1. 배너로 사용할 이미지 정보 가져오기

   ```jsx
   // movie state 설정
   const [movie, setMovie] = useState([]);

   // component 처음 실행 시 정보 가지고 있게 설정
   useEffect((), () => {
   		fetchData();
   }, []);

   // theMovieDB server에 비동기 요청 보내기
   const fetchData() = async () => {

   	// axios library를 사용하여 현재 상영중인 여러 영화 정보 가져오기
   	const request = await axios.get(requests.fetchNowPlaying);

   	// 영화 id 가져오기
   	const movieId =
   		request.data.results[
   			Math.floor(Math.random() * request.data.results.length)
   		].id;

   	// movieId로 특정 영화 정보 가져오기 (비디오 정보 포함), 추가적으로 서버에 요청
   	const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
   		params: { append_to_response: "videos" },
   	});

   	setMovie(movieDetail);
   }
   ```

   `console.log(request)` 를 하면 console에서 영화에 대한 정보는 `request.data.results`를 확인하면 알 수 있다.

   movieId로 특정 영화 정보를 가져올 때 추가적으로 서버에 요청하는 것이므로, params를 이용하여 추가 정보를 요청한다.

2. UI 생성

   ```jsx
   return (
     <header
       className="banner"
       style={{
         backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
         backgroundPosition: "top center",
         backgroundSize: "cover",
       }}
     >
       <div className="banner__contents">
         <h1 className="banner__title">
           {movie.title || movie.name || movie.original_name}
         </h1>
         <div className="banner__buttons">
           <button className="banner__button play">Play</button>
           <button className="banner__button info">More Information</button>
         </div>
         <h1 className="banner__description">
           {truncate(movie.overview, 100)}
         </h1>
       </div>
       <div className="banner--fadeBottom"></div>
     </header>
   );
   ```

3. Style 적용

   ```jsx
   .banner {
     color: white;
     object-fit: contain;
     height: 448px;
   }
   @media (min-width: 1500px) {
     .banner {
       position: relative;
       height: 600px;
     }
     .banner--fadeBottom {
       position: absolute;
       bottom: 0;
       width: 100%;
       height: 40rem;
     }
   }
   @media (max-width: 768px) {
     .banner__contents {
       width: min-content !important;
       padding-left: 2.3rem;
       margin-left: 0px !important;
     }
     .banner__description {
       font-size: 0.8rem !important;
       width: auto !important;
     }
     .info {
       text-align: start;
       padding-right: 1.2rem;
     }
     .space {
       margin-left: 6px;
     }
     .banner__button {
       font-size: 0.8rem !important;
       border-radius: 4px !important;
     }
   }
   .banner__contents {
     margin-left: 40px;
     padding-top: 140px;
     height: 190px;
   }
   .banner__title {
     font-size: 3rem;
     font-weight: 800;
     padding-bottom: 0.5rem;
   }
   .banner__description {
     width: 45rem;
     line-height: 1.3;
     padding-top: 1rem;
     font-weight: 500;
     font-size: 1rem;
     max-width: 400px;
     height: 80px;
   }
   .banner--fadeBottom {
     height: 7.4rem;
     background-image: linear-gradient(
       180deg,
       transparent,
       rgba(37, 37, 37, 0.61),
       #111
     );
   }
   .banner__buttons {
     display: flex;
     flex-direction: row;
   }
   .banner__button {
     display: flex;
     flex-direction: row;
     justify-content: start;
     align-items: center;
     cursor: pointer;
     outline: none;
     border: none;
     font-size: 1rem;
     font-weight: 700;
     border-radius: 0.2vw;
     padding: 0.4rem 1.8rem 0.4rem 1rem;
     margin-right: 1rem;
   }
   .banner__button:hover {
     color: #000;
     background-color: rgba(170, 170, 170, 0.9);
     transition: all 0.2s;
   }
   .play {
     background-color: white;
     color: black;
   }
   .info {
     background-color: rgba(109, 109, 110, 0.7);
     color: white;
   }
   .info:hover {
     background-color: rgb(74, 74, 74);
     color: white;
   }

   .space {
     margin-left: 4px;
   }
   ```

4. description이 100자 이상이면 자른 후 “…” 붙이기

   ```jsx
   <div className="banner__description">{truncate(movie.overview, 100)}</div>
   ```

   ```jsx
   const truncate = (str, n) => {
     return str?.legnth > n ? str.substr(0, n - 1) + "..." : str;
   };
   ```

   `str?.length` 는 str이 있을때만 length를 구하는 의미이다.

## Styled Component

CSS-in-JS라고 하는 JavaScript 파일 안에서 CSS를 처리할 수 있게 해주는 대표적인 라이브러리이다.

`npm install —save styled-components` 명령어 입력 후 실행한다.

[**Styled Component Docs**](https://styled-components.com/docs/basics)

## Styled Component를 이용한 비디오 배너 생성하기

1. Play 버튼 클릭 시 비디오로 전환

   ```jsx
   const [isClicked, setIsClicked] = useState(false);
   ```

   ```jsx
   <button className="banner__button play" onClick={() => setIsClicked(true)}>
     Play
   </button>
   ```

2. Play 버튼 클릭 전 기본 화면 설정

   ```jsx
   if (!isClicked) {
   	// Play 버튼 클릭 전 화면, 기존 화면
   	<header
   	    className="banner"
   	    style={{
   	      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
   	      backgroundPosition: "top center",
   	      backgroundSize: "cover",
   	    }}
   	  >
   	    <div className="banner__contents">
   	      <h1 className="banner__title">
   	        {movie?.title || movie?.name || movie?.original_name}
   	      </h1>
   	      <div className="banner__buttons">
   	        <button
   	          className="banner__button play"
   	          onClick={() => setIsClicked(true)}
   	        >
   	          Play
   	        </button>
   	        <button className="banner__button info">More Information</button>
   	      </div>
   	      <h1 className="banner__description">
   	        {truncate(movie?.overview, 100)}
   	      </h1>
   	    </div>
   	    <div className="banner--fadeBottom"></div>
   	  </header>
   	);
   } else {
   	// Play 버튼 클릭 후 화면
   }
   ```

3. Styled Component를 이용한 UI 생성

   - Styled Component를 사용하여 style을 적용할 때는 컴포넌트명은 항상 **대문자로** 시작해야한다.

   ```jsx
   const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     width: 100%;
     height: 100vh;
   `;

   const HomeContainer = styled.div`
     width: 100%;
     height: 100%;
   `;
   ```

   ```jsx
   else {
     return (
       <Container>
         <HomeContainer>

   			</HomeContainer>
       </Container>
     );
   }
   ```

4. Iframe 활용하여 영상 넣기

   - iframe은 HTML Inline Frame 요소이며 inline frame의 약자이다. 효과적으로 다른 HTML 페이지를 현재 페이지에 포함시키는 중첨된 브라우저로 iframe 요소를 이용하면 **해당 웹 페이지 안에 어떠한 제한 없이 다른 페이지를 불러와서 삽입할 수 있다.**

   ```jsx
   <HomeContainer>
     <Iframe
       src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
       width="640"
       height="360"
       frameborder="0"
       allow="autoplay;
       fullscreen"
     ></Iframe>
   </HomeContainer>
   ```

   ```jsx
   const Iframe = styled.iframe`
     width: 100%;
     height: 100%;
     z-index: -1;
     opacity: 0.65;
     border: none;

     &::after {
       content: "";
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
     }
   `;
   ```

   > `**&::after` 의 의미\*\*
   >
   > **`&::after`**는 CSS에서 가상 요소(pseudo-element)를 나타낸다. 이 코드에서 **`&`**는 부모 요소(**`Iframe`** 컴포넌트)를 나타낸다. `**::after**` 는 선택한 요소 뒤에 가상 콘텐츠를 삽입하는 것이고, **꼭 content 속성과 함께 같이 써야 한다.** **`&::after`**는 **`Iframe`**의 가상 요소로서, 해당 요소에 추가적인 스타일이나 콘텐츠를 생성하는 역할을 한다.
   >
   > 이 가상 요소는 **`position: absolute;`**, **`top: 0;`**, **`left: 0;`**, **`width: 100%;`**, **`height: 100%;`** 등의 속성을 사용하여 부모 요소와 동일한 크기의 절대 위치의 요소를 만든다. 그러나 현재 코드에서는 **`content: "";`**로 인해 실제로는 콘텐츠가 생성되지 않고, 오로지 부모 요소와 동일한 크기의 영역을 가지게 된다.
   >
   > 이러한 가상 요소를 사용하는 주된 목적은 **`Iframe`**에 배경이나 투명도와 같은 스타일을 부여하거나, 추가적인 레이아웃 요소를 생성하여 디자인적 효과를 주는 것이다. 예를 들어, 투명한 오버레이 효과나 부모 요소의 배경을 가리고 싶을 때 사용될 수 있다.
