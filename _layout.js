import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout({ children }) {
  const [loaded, error] = useFonts({
    'Lato-700': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-400': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-900': require('./assets/fonts/Lato-Black.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
    {children}
    </>
  )
}