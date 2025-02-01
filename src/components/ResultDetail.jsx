import "./ResultDetail.css";
import Button from "../components/Button";

const ResultDetail = ({ cardData }) => {
  return (
    <>
      {/* ✅ React Fragment로 감싸줌 */}
      <section className="header_section">
        <h2>오늘의 운세 결과는...</h2>
      </section>
      <div className="selectedCardInfo">
        {cardData ? (
          <>
            <section className="cardName_section">
              {" "}
              <h3>{cardData.name}</h3>
            </section>

            <section className="cardImage_section">
              {" "}
              <div
                className="twinkle"
                style={{ top: "10%", left: "20%" }}
              ></div>
              <div
                className="twinkle"
                style={{ top: "35%", left: "15%" }}
              ></div>
              <div
                className="twinkle"
                style={{ top: "30%", left: "75%" }}
              ></div>
              <div
                className="twinkle"
                style={{ top: "50%", left: "90%" }}
              ></div>
              <div
                className="twinkle"
                style={{ top: "65%", left: "30%" }}
              ></div>
              <div
                className="twinkle"
                style={{ top: "87%", left: "40%" }}
              ></div>
              <img src={cardData.image} alt={cardData.name} />
            </section>

            <section className="tarotReading_section">
              {" "}
              <p>
                <strong>긍정적인 의미🥰: </strong> {cardData.meaning.positive}
              </p>
              <p>
                <strong>부정적인 의미👻: </strong> {cardData.meaning.negative}
              </p>
              <p>
                <strong>조언🤓: </strong> {cardData.meaning.advice}
              </p>
            </section>
          </>
        ) : (
          <p>선택한 카드 정보가 없습니다.</p>
        )}
      </div>
    </>
  );
};

export default ResultDetail;
