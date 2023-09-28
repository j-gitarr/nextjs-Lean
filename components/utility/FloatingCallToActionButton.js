import style from "@styles/utility/FloatingCTAButton.module.css";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter

import React from "react";
import ToggleFullscreen from "./ToggleFullscreen";

const HoveringCTA = () => {
  const router = useRouter(); // Get the router object

  // Check if the pathname starts with "/App"
  const isAppPage = router.pathname.startsWith("/App");

  return (
    // <ToggleFullscreen alwaysFull={!isAppPage} alwaysMin={isAppPage}>
      <Link href={isAppPage ? "/" : "App"}>
        <div className={style.ctaContainer}>
          <button className={style.ctaButton}>
            {isAppPage ? "Exit App" : "Loslegen!"}{" "}
            {/* Change button text */}
          </button>
        </div>
      </Link>
    // </ToggleFullscreen>
  );
};

export default HoveringCTA;
