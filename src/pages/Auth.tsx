
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { toast } from "@/hooks/use-toast";

const Auth = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    try {
      // Set authentication in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      
      // Show toast message
      toast({
        title: isRTL ? "تم تسجيل الدخول بنجاح" : "Successfully logged in",
        description: isRTL ? "جاري تحويلك..." : "Redirecting you...",
      });
      
      // Force a delay to allow the toast to display
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Explicitly trigger a navigation
      console.log("Redirecting to health profile...");
      window.location.href = '/health-profile';
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: isRTL ? "خطأ في تسجيل الدخول" : "Login Error",
        description: isRTL ? "حدث خطأ أثناء تسجيل الدخول" : "An error occurred during login",
        variant: "destructive",
      });
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-salamtak-cream flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/a59638cc-4815-4280-b8ec-e299cbe65d0e.png" 
            alt="Salamtak Logo" 
            className="h-20 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-salamtak-green">
            {isRTL ? 'مرحباً بك في سلامتك' : 'Welcome to Salamtak'}
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-salamtak-brown mb-1" htmlFor="email">
                {isRTL ? 'البريد الإلكتروني' : 'Email'}
              </label>
              <Input
                id="email"
                type="email"
                required
                className="w-full"
                placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-salamtak-brown mb-1" htmlFor="password">
                {isRTL ? 'كلمة المرور' : 'Password'}
              </label>
              <Input
                id="password"
                type="password"
                required
                className="w-full"
                placeholder={isRTL ? 'أدخل كلمة المرور' : 'Enter your password'}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-salamtak-green hover:bg-salamtak-green/90"
              disabled={isLoggingIn}
            >
              {isLoggingIn 
                ? (isRTL ? 'جاري تسجيل الدخول...' : 'Signing in...') 
                : (isRTL ? 'تسجيل الدخول' : 'Sign In')}
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-salamtak-brown/80 mt-4">
              {isRTL ? 'ليس لديك حساب؟' : "Don't have an account?"}
              <button 
                type="button"
                onClick={() => {}} 
                className="text-salamtak-green hover:underline"
              >
                {isRTL ? 'سجل الآن' : 'Sign Up'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
