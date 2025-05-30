import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  //  check if online;

  useEffect(() => {
    window.addEventListener("offline", function () {
      setOnlineStatus(false);
    });
    window.addEventListener("online", function () { 
      setOnlineStatus(true);
    });

  
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
