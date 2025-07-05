import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser } from '@/store/user/user.thunks';
import { useAppDispatch } from '@/store';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isUserOnboarded, setIsUserOnboarded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const dispatch = useAppDispatch();
  const auth = getAuth();

  useEffect(() => {
    const checkAuthAndOnboarding = async () => {
      try {
        const onboarded = await AsyncStorage.getItem('onboarded');
        const userData = await AsyncStorage.getItem('userData');
        const parsedData = userData ? JSON.parse(userData) : null;

        setIsUserOnboarded(onboarded === 'true');

        // Firebase oturumunu kontrol et
        onAuthStateChanged(auth, (user) => {
          if (user && parsedData) {
            // Redux'a kullanıcıyı yaz
            dispatch(loginUser(parsedData));
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
          setIsLoading(false);
        });
      } catch {
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    };

    checkAuthAndOnboarding();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return null;

  if (!isUserOnboarded) return <Redirect href="/onboarding" />;

  return isAuthenticated ? <Redirect href="/(tabs)" /> : <Redirect href="/(auth)/login" />;
}
