import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";
import loadingGif from "../assets/loading.gif"; //로딩이미지 추가
import { useState, useEffect } from "react";
import ResultDetail from "../components/ResultDetail";
import Button from "../components/Button";
import { select } from "framer-motion/client";

const Result = () => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

  const location = useLocation(); // useLocation 훅을 먼저 호출하여 location 객체를 가져옴
  const selectedCard = location.state?.selectedCard; //사용자가 선택한 정보
  const cardData = location.state?.cardData; // 카드 뽑기 페이지에서 넘겨받은 카드 데이터

  console.log("결과 페이지 location", location.state);
  console.log("데이터 잘 가져왔는지 확인", cardData);
  console.log("선택된 카드", selectedCard);

  const nav = useNavigate();

  const onClickToHome = () => {
    nav("/");
  };

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
