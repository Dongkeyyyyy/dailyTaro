// import "./Home.css";
import Button from "../components/Button";
import "./Home.css";
import mainImg from "../assets/cards.png"; // 이미지 파일 import

const Home = () => {
  return (
    <div className="Home">
      <div className="mainTitle">
        <h1>
          오늘의 운세:
          <br />
          이것 뭐예요?
        </h1>
      </div>
      <section className="img_section">
        <img className="main_img" src={mainImg} alt="" />
      </section>
      <section className="button_section">
        <Button />
      </section>
    </div>
  );
};

export default Home;
