import { useEffect, useState } from "react";

/*
 You should give use prefix to a function (and thus make it a Hook) if it uses at least one Hook inside of it:

 In principle, you could make a Hook that doesn’t call other Hooks. 
 This is often confusing and limiting so it’s best to avoid that pattern. 
 However, there may be rare cases where it is helpful.
 For example, maybe your function doesn’t use any Hooks right now, but you plan to add some Hook calls to it in the future.
 Then it makes sense to name it with the use prefix:

 Custom Hooks let you share stateful logic, not state itself
*/

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};

export default useOnlineStatus;
