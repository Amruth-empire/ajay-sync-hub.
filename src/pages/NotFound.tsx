import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-5xl">!</span>
        </div>
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-2 text-2xl font-semibold text-foreground">Page Not Found</p>
        <p className="mb-8 text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
