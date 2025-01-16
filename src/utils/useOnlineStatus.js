import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [ onlineStatus, setonlineStatus ] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
      console.log("offline");
    });
    

    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
