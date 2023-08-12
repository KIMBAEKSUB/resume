import { useEffect, useState } from "react";

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const [isMobile, setIsMoble] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            setIsMoble(window.innerWidth < 480);
          };
      
          handleResize();
      
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);

    return {
        windowSize,
        isMobile,
    };
}

export default useWindowSize;