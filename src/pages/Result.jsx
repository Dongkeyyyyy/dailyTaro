import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";
import loadingGif from "../assets/loading.gif"; //로딩이미지 추가
import { useState, useEffect } from "react";
import tarotMock from "../data/tarotMock"; // 가상mock 데이터
import ResultDetail from "../components/ResultDetail";
import Button from "../components/Button";

const Result = () => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

  const [isAPILoading, setIsAPILoading] = useState(true); // 로딩 상태 관리

  const location = useLocation();

  const selectedCard = location.state?.selectedCard;
  console.log("선택된 카드", selectedCard);
  // location.state가 존재하면 selectedCatd에 접근
  // location.state가 undefined이면 그냥 undefined 반환 (에러 방지)
  const nav = useNavigate();

  const [cards, setCards] = useState([]); // API 데이터를 저장할 상태 추가

  const onClickToHome = () => {
    nav("/");
  };
  const cardData = tarotMock.find((card) => card.id === selectedCard?.id);
  console.log(cardData);
  // ✅ API에서 카드 데이터 가져오기
  useEffect(() => {
    const fetchCardData = async (selectedCard) => {
      // async 비동기 함수 정의 사용. 이 함수 안에서 await을 사용할 수 있음
      const cardId = selectedCard.id;
      const cardCode = `ar${cardId.toString().padStart(2, "0")}`; // 카드 ID가 1일 때 "ar01"로 포맷 맞추기
      const apiUrl = `https://tarotapi.dev/api/v1/cards/${cardCode}`;
      try {
        const response = await fetch(apiUrl); // 비동기 처리할 때 fetch 요청이 끝날 때까지 기다림. 응답이 올 때까지 다음 코드가 싫행 x
        const data = await response.json();
        console.log(data); // 카드 데이터 출력
        setCards(data); // 가져온 카드 데이터 저장
        setIsAPILoading(false);
      } catch (error) {
        console.error("카드 데이터를 가져오는 중 오류 발생:", error);
        setIsAPILoading(false);
      }
    };

    fetchCardData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
    // 컴포넌트가 언마운트될 때 타이머 정리
  }, []);

  return (
    <div className="Result">
      {isLoading ? (
        <section className="loading_section">
          <img src={loadingGif} alt="로딩 중..." />
          <p>카드 해석하는 중... 잠시만 기다려 주세요</p>
        </section>
      ) : (
        <>
          <ResultDetail cardData={cardData} />
          <section className="button_section">
            {" "}
            <Button
              onClick={onClickToHome}
              text={"카드 다시뽑기"}
              type={"RETRY"}
            />
            <Button
              text={"카카오톡으로 친구에게 공유하기"}
              type={"SHAREBYKAKAOTALK"}
            />
            <Button text={"링크 공유하기"} type={"SHARELINK"} />
          </section>
        </>
      )}
    </div>
  );
};

export default Result;
