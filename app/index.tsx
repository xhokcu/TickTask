import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isUserOnboarded, setIsUserOnboarded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const onboarded = await AsyncStorage.getItem('onboarded');
        const isLoggedIn = await AsyncStorage.getItem('user');
        setIsUserOnboarded(onboarded === 'true');

        setIsAuthenticated(!!isLoggedIn);
      } catch {}

      setIsLoading(false);
    };

    checkOnboarding();
  }, []);

  if (isLoading) return null;

  if (!isUserOnboarded) return <Redirect href="/onboarding" />;

  return isAuthenticated ? <Redirect href="/(tabs)" /> : <Redirect href="/(auth)/login" />;
}
