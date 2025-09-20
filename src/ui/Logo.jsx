import styled from "styled-components";
import { useLightMode } from "../context/LightModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isLightMode } = useLightMode();
  const src = isLightMode ? "/logo-light.png" : "/logo-dark.png";
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
