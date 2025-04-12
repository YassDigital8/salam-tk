
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.b7b3784ef94e462bbebcedf098fc0dc4',
  appName: 'safi-wellness-nexus',
  webDir: 'dist',
  server: {
    url: 'https://b7b3784e-f94e-462b-bebc-edf098fc0dc4.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  // Add responsive design breakpoints for mobile
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: "#1a913d", // Salamtak green
      androidSplashResourceName: "splash",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
