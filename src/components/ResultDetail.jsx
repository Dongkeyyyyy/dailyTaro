import "./ResultDetail.css";

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
