import "./ResultDetail.css";
import Button from "../components/Button";

const ResultDetail = ({ cardData }) => {
  console.log("카드 디테일 컴포넌트", cardData);
  console.log("카드명", cardData.card.name_short);
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
              <h3>{cardData.card.name}</h3>
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
              <img
                src={`/cardImages/${cardData.card.name_short}.jpg`.trim()} // .trim()을 추가하여 공백 제거
                alt={cardData.card.name}
              />
            </section>

            <section className="tarotReading_section">
              {" "}
              <p>
                <strong>정방향: </strong> {cardData.card.meaning_up}
              </p>
              <p>
                <strong>해석: </strong> {cardData.card.desc}
              </p>
              <p>
                <strong>역방향:</strong> {cardData.card.meaning_rev}
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
