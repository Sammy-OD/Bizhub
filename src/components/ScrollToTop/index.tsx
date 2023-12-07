import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom"

interface ScrollToTopProp  {
  children: ReactNode;
}

const ScrollToTop: React.FC<ScrollToTopProp> = ({children}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>{children}</>
  )
}

export default ScrollToTop