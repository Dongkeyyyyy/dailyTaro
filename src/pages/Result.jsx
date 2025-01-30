import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";
import loadingGif from "../assets/loading.gif"; //로딩이미지 추가
import { useState, useEffect } from "react";

const Result = () => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리
  const location = useLocation();
  const selectedCard = location.state?.selectedCard;
  // location.state가 존재하면 selectedCatd에 접근
  // location.state가 undefined이면 그냥 undefined 반환 (에러 방지)

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
          <p>카드 해석하는 중...</p>
        </section>
      ) : (
        <>
          {/* ✅ React Fragment로 감싸줌 */}
          <section className="header_section">
            <h2>오늘의 운세 결과는...</h2>
          </section>
          <div className="selectedCardInfo">
            {selectedCard ? (
              <h3>{selectedCard.name}</h3>
            ) : (
              <p>선택한 카드 정보가 없습니다.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Result;
