import { useState, useEffect } from "react";

const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState("");

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
    return setFullscreenError(
      "Полноэкранный режим не поддерживается вашим браузером."
    );
  };

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

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      openFullscreen(document.documentElement);
    } else {
      closeFullscreen();
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
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  return [toggleFullscreen, isFullscreen, fullscreenError];
};

export default useFullscreen;
