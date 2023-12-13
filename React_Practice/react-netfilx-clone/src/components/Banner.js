import axios from "../api/axios";
import requests from "../api/requests";
import React, { useState, useEffect } from "react";
import "./Banner.css";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  // Component가 처음 실행될 때 배너 정보를 가지고 있어야 하기 때문에 fetchData()를 call
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // axios library를 이용해서 the MovieDB server에 요청
    // 현재 상영중인 영화 정보 가져오기
    const request = await axios.get(requests.fetchNowPlaying);

    // console.log(request) -> console 에서 request.data.results를 확인하면 영화의 개수를 알 수 있다.
    // console.log(request);

    // 여러 영화 중 영화 하나의 ID 가져오기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 특정 영화의 상세 정보 가져오기
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });

    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

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
        <h1 className="banner__description">{truncate(movie.overview, 100)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
