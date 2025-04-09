import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Header } from '@react-navigation/elements';
import Button from '@/components/Button/Button.index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconButton from '@/components/IconButton/IconButton.index';
import { ArrowLeft } from '@/svg/index';
import { theme } from '@/theme/Theme';

export default function AuthLayout() {
  const router = useRouter();

  const handleOnboarding = async () => {
    await AsyncStorage.removeItem('onboarded');
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/onboarding');
    }
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        header: ({ options }) => (
          <Header
            title={options.title as string}
            {...options}
            headerStyle={styles.headerStyle}
            headerTitleStyle={styles.headerTitle}
          />
        ),
        headerLeft: () => (
          <View style={styles.leftContainer}>
            <IconButton icon={<ArrowLeft />} onPress={handleOnboarding} />
          </View>
        ),
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: 'Login',
          headerRight: () => (
            <View style={styles.rightContainer}>
              <Button
                type="text"
                size="small"
                customButtonStyle={styles.textButton}
                onPress={() => router.replace('/signup')}
                title={'Signup'}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: 'Signup',
          headerRight: () => (
            <View style={styles.rightContainer}>
              <Button
                type="text"
                size="small"
                customButtonStyle={styles.textButton}
                onPress={() => router.replace('/login')}
                title={'Login'}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="forgot_password"
        options={{
          title: 'Forgot Password?',
        }}
      />
    </Stack>
  );
}

const { spacing, colorScheme, fonts, fontSizes } = theme;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colorScheme.light.white,
    shadowColor: 'transparent',
  },
  headerTitle: {
    fontFamily: fonts.semibold,
    fontSize: fontSizes.body.large,
  },
  textButton: {
    paddingHorizontal: spacing[0],
    paddingVertical: spacing[0],
  },
  rightContainer: {
    marginRight: spacing[16],
  },
  leftContainer: {
    marginLeft: spacing[16],
  },
});
