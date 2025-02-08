import "./ToggleButton.css";
import { useState } from "react"; // ✅ useState를 반드시 import
import { motion } from "framer-motion";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true); // 🔹 비활성화 상태 추가

  const toggleHandler = () => {
    if (isDisabled) return; // 🔹 비활성화 상태면 클릭 이벤트 차단
    setIsOn((prev) => !prev);
    alert("번역기능은 추후 제공 예정이에요🙂");
  };

  return (
    <div className="toggle-wrapper" onClick={toggleHandler}>
      <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`}>
        <div
          className={`toggle-circle ${isOn ? "toggle-circle-checked" : ""}`}
        />
      </div>
    </div>
  );
};

export default ToggleButton;
