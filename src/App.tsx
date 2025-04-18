
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Wellness from "./pages/Wellness";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import HealthProfile from "./pages/HealthProfile";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check for authentication state in localStorage on app load and any changes
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated');
      setIsAuthenticated(authStatus === 'true');
      setIsLoading(false);
      console.log("Auth status checked:", authStatus === 'true');
    };
    
    // Initial check
    checkAuth();
    
    // Listen for storage events to update auth state when changed in other tabs
    window.addEventListener('storage', checkAuth);
    
    // Check auth status periodically (every 1 second)
    // This helps catch redirects after login that might not trigger storage events
    const intervalId = setInterval(checkAuth, 1000);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
      clearInterval(intervalId);
    };
  }, []);

  // Protected route component
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    console.log("Protected route check - authenticated:", isAuthenticated);
    
    if (isLoading) {
      return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }
    
    if (!isAuthenticated) {
      console.log("Not authenticated, redirecting to /auth");
      return <Navigate to="/auth" replace />;
    }
    
    // Check if health profile exists
    const healthProfile = localStorage.getItem('healthProfile');
    console.log("Health profile check:", !!healthProfile);
    
    if (!healthProfile && window.location.pathname !== '/health-profile') {
      console.log("No health profile, redirecting to /health-profile");
      return <Navigate to="/health-profile" replace />;
    }
    
    return <>{children}</>;
  };

  // Force re-render on route change
  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Route changed:", window.location.pathname);
      checkAuth();
    };
    
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  // Helper function to check auth status
  const checkAuth = () => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {isLoading ? (
              <div className="min-h-screen flex items-center justify-center">Loading...</div>
            ) : (
              <Routes>
                <Route path="/auth" element={
                  isAuthenticated ? <Navigate to="/" replace /> : <Auth />
                } />
                <Route
                  path="/health-profile"
                  element={
                    <ProtectedRoute>
                      <HealthProfile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Index />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/products"
                  element={
                    <ProtectedRoute>
                      <Products />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <ProtectedRoute>
                      <Services />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/booking/:serviceId"
                  element={
                    <ProtectedRoute>
                      <Booking />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/wellness"
                  element={
                    <ProtectedRoute>
                      <Wellness />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
