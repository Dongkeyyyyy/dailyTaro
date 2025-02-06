// import "./Home.css";
import Button from "../components/Button";
import "./Home.css";
import mainImg from "../assets/cards.png"; // 이미지 파일 import;
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  const onClickStartButton = () => {
    nav("/tarot");
  };

  return (
    <div className="Home">
      <div className="mainTitle">
        <h1>오늘 나의 운명은?</h1>
      </div>
      <section className="img_section">
        <img className="main_img" src={mainImg} alt="" />
      </section>
      <section className="button_section">
        <Button onClick={onClickStartButton} text={"시작하기"} type={"START"} />
      </section>
    </div>
  );
};

export default Home;
