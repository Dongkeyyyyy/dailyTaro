import "./Button.css";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/tarot");
  };
  return (
    <button onClick={onClickButton} className="Button">
      카드뽑기
    </button>
  );
};

export default Button;
