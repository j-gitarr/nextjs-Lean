import style from "@styles/utility/FloatingCTAButton.module.css";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter

import React from "react";
import ToggleFullscreen from "./ToggleFullscreen";
import setFullscreen from "@components/functions/setFullscreen";
import exitFullscreen from "@components/functions/exitFullscreen";

const HoveringCTA = () => {
  const router = useRouter(); // Get the router object

  // Check if the pathname starts with "/App"
  const isAppPage = router.pathname.startsWith("/App");

  const hanldeClick = () => {
    let isFullOn = false;
    if (typeof window !== "undefined") {
      isFullOn = localStorage.getItem("fullscreen");
      isFullOn = isFullOn == null ? true : JSON.parse(isFullOn);
    }
    if (isAppPage) {
      exitFullscreen();
    } else if(isFullOn) {
      setFullscreen();
    }
  };

  return (
    // <ToggleFullscreen alwaysFull={!isAppPage} alwaysMin={isAppPage}>
    <Link href={isAppPage ? "/" : "App"}>
      <div className={style.ctaContainer}>
        <button className={style.ctaButton} onClick={hanldeClick}>
          {isAppPage ? "Exit App" : "Loslegen!"}{" "}
        </button>
      </div>
    </Link>
  );
};

export default HoveringCTA;
