import { useState, useEffect } from "react";

const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState("");

  let removeErrorTimeout = null;
  const openFullscreen = elem => {
    if (elem.requestFullscreen) {
      return elem.requestFullscreen();
    }
    if (elem.mozRequestFullScreen) {
      /* Firefox */
      return elem.mozRequestFullScreen();
    }
    if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      return elem.webkitRequestFullscreen();
    }
    if (elem.msRequestFullscreen) {
      /* IE/Edge */
      return elem.msRequestFullscreen();
    }
    setFullscreenError(
      "Полноэкранный режим не поддерживается вашим браузером."
    );
    removeErrorTimeout = setTimeout(() => {
      setFullscreenError("");
    }, 3000);
  };

  // clear timeout on unmount
  useEffect(
    () => () => {
      if (removeErrorTimeout) clearTimeout(removeErrorTimeout);
    },
    [removeErrorTimeout]
  );

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(state => !state);
    };

    const prefixes = ["", "webkit", "moz", "ms"];
    let prefixToUse = "";
    for (let i = 0; i < prefixes.length; i++) {
      if (`on${prefixes[i]}fullscreenchange` in document) {
        prefixToUse = prefixes[i];
        break;
      }
    }
    document.documentElement.addEventListener(
      `${prefixToUse}fullscreenchange`,
      handleFullscreenChange
    );

    return () => {
      document.documentElement.removeEventListener(
        `${prefixToUse}fullscreenchange`,
        handleFullscreenChange
      );
    };
  }, []);

  return {
    openFullscreen,
    closeFullscreen,
    isFullscreen,
    fullscreenError
  };
};

export default useFullscreen;
