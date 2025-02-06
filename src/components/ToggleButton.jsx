import "./ToggleButton.css";
import { motion } from "framer-motion";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-md"
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        initial={false}
        animate={{ x: isOn ? 32 : 0 }}
      />
    </div>
  );
};

export default ToggleButton;
