import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (Component: any) => {
  return () => {
    const router = useRouter();
    const isAuthenticated = false; // Add your auth logic here

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/login'); // Redirect to login if not authenticated
      }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
      return null; // While redirecting, return null to prevent rendering
    }

    return <Component />;
  };
};

export default withAuth;
