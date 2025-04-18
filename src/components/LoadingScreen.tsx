
import { Loader } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-salamtak-cream flex items-center justify-center">
      <div className="text-center">
        <img 
          src="/lovable-uploads/a59638cc-4815-4280-b8ec-e299cbe65d0e.png" 
          alt="Salamtak Logo" 
          className="h-20 mx-auto mb-4 animate-bounce"
        />
        <Loader className="h-6 w-6 animate-spin text-salamtak-green mx-auto" />
      </div>
    </div>
  );
};

export default LoadingScreen;
