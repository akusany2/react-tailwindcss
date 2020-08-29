import { useEffect, useState } from 'react';
import { auth } from '../service/firebase.service';

export function useUserInfo() {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const authStateChangeEvent = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserInfo(user);
      } else {
        setUserInfo(null);
      }
    });
    return () => authStateChangeEvent();
  }, []);
  return userInfo;
}
