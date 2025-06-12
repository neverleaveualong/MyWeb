import { useMediaQuery } from "react-responsive";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" }); // 768px 미만이면 모바일

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}
