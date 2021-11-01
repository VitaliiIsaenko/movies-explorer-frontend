import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [dimensions, setDimensions] = useState(getWindowDimensions());
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    function handleResize() {
    //   console.log(timeoutId);
      setDimensions(getWindowDimensions());
      setTimeoutId(null);
    }

    window.addEventListener("resize", () => {
      if (timeoutId !== null) {
        return;
      } else {
        let newTimeoutId = setTimeout(handleResize, 3000);
        setTimeoutId(newTimeoutId);
      }
    });
    return () => window.removeEventListener("resize", timeoutId);
  }, []);

  return dimensions;
}
