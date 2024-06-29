import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const navVariants = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    y: -50,
    opacity: 0
  }
};

function NavbarFixed() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navVariants}
      className="fixed z-999 top-4 left-1/2 -translate-x-1/2 rounded-full p-2 bg-white bg-opacity-0.08 backdrop-blur-lg border border-[#486D28] border-opacity-0.08"
    >
      <ul className="flex items-center gap-2 text-sm font-medium font-jakarta text-[#486D28]">
        <li onClick={() => navigate("/")} className="p-1 hover:opacity-50">
          Home
        </li>
        <li onClick={() => navigate("/crop")} className="p-1 hover:opacity-50">
          Crop Recommendation
        </li>
        <li
          onClick={() => navigate("/fertilizer")}
          className="p-1 hover:opacity-50"
        >
          Fertilizer Recommendation
        </li>
        <li
          onClick={() => navigate("/disease")}
          className="p-1 hover:opacity-50"
        >
          Disease Prediction
        </li>
      </ul>
    </motion.div>
  );
}

export default NavbarFixed;
