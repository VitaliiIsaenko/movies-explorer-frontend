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

  useEffect(() => {
    function handleResize() {
      setDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", () => setTimeout(handleResize, 3000));
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
}
