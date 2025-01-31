import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";
import loadingGif from "../assets/loading.gif"; //로딩이미지 추가
import { useState, useEffect } from "react";
import tarotMock from "../data/tarotMock"; // 가상mock 데이터
import ResultDetail from "../components/ResultDetail";

const Result = () => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리
  const location = useLocation();
  const selectedCard = location.state?.selectedCard;
  console.log("선택된 카드", selectedCard);
  // location.state가 존재하면 selectedCatd에 접근
  // location.state가 undefined이면 그냥 undefined 반환 (에러 방지)
  const cardData = tarotMock.find((card) => card.id === selectedCard?.id);
  console.log("카드데이터", cardData);
  // tarotMock에서 선택한 카드 정보 찾기

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
        <ResultDetail cardData={cardData} />
      )}
    </div>
  );
};

export default Result;
