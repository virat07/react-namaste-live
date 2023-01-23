import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const handleOnline = ()=>{
        setIsOnline(true);
    }
    const handleOffline = ()=>{
        setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () =>{
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
    }
  }, []);
  /*in javascript :- online: window.addEventListener('online', ()=>{ setIsOnline(true) })
    offline: window.addEventLister('offline', ()=>{ setIsOnline(false)})
  */

  return isOnline;
};
export default useOnline;
