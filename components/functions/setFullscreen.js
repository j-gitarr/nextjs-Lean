export default function setFullscreen(){
    // Check if requesting fullscreen is allowed by the browser
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch((error) => {
        console.error("Fullscreen request failed:", error);
      });
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen().catch((error) => {
        console.error("Fullscreen request failed:", error);
      });
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen().catch((error) => {
        console.error("Fullscreen request failed:", error);
      });
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen().catch((error) => {
        console.error("Fullscreen request failed:", error);
      });
    }
  };