import { useEffect } from 'react';

export function Logout() {
  useEffect(() => {
    sessionStorage.removeItem('user');
    document.location.href = '/#/auth';
  }, []);

  return null;
}