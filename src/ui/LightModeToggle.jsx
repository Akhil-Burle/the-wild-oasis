import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useLightMode } from "../context/LightModeContext";

function LightModeToggle() {
  const { isLightMode, toggleLightMode } = useLightMode();
  return (
    <ButtonIcon onClick={toggleLightMode}>
      {!isLightMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default LightModeToggle;
