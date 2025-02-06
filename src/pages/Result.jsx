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

  // 카카오 SDK 초기화

  const initializeKakao = () => {
    if (!window.Kakao) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.js";
      script.async = true;
      script.onload = () => {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init("165622fc1839950a757a2229152bd58b");
          console.log("Kakao SDK Initialized");
        }
      };
      document.head.appendChild(script);
    } else {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("165622fc1839950a757a2229152bd58b"); // 이미 Kakao가 존재하면 초기화
      }
    }
  };

  useEffect(() => {
    initializeKakao();
  }, []);

  const onClickShareToKakao = () => {
    shareToKakao();
  };

  // 카카오톡 공유 함수
  const shareToKakao = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "오늘 나의 운명은?",
        description: "나의 오늘 운세 결과를 확인하세요!",
        imageUrl: "/public/magic_circle.png", //공유할 카드 이미지
        link: {
          mobileWebUrl: "https://your-tarot-service.com/result", //공유된 링크를 누르면 이동할 페이지(모바일)
          webUrl: "https://your-tarot-service.com/result", //공유된 링크를 누르면 이동할 페이지(pc)
        },
      },
      buttons: [
        {
          title: "결과 확인하기",
          link: {
            mobileWebUrl: "https://your-tarot-service.com/result", // 사용자가 버튼을 누르면 link에 설정한 페이지로 이동
            webUrl: "https://your-tarot-service.com/result",
          },
        },
      ],
    });
  };

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
              onClick={onClickShareToKakao}
              text={"카카오톡으로 친구에게 공유하기"}
              type={"SHAREBYKAKAO"}
            />
            <Button text={"링크 공유하기"} type={"SHARELINK"} />
          </section>
        </>
      )}
    </div>
  );
};

export default Result;
