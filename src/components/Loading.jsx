import loading from "../assets/loading.gif";

const Loading = () => {
  return (
    <div classNcdame="Loading">
      <h3>잠시만 기다려주세요...</h3>
      <div className="loadingImg_section">
        <img src={loading} alt="로딩" />
      </div>
    </div>
  );
};

export default Loading;
