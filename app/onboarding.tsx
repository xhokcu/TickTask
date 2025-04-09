import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { theme } from '@/theme/Theme';
import Button from '@/components/Button/Button.index';
import { Onboarding as OnboardingImage } from '@/svg/index';

export default function Onboarding() {
  const handleOnboarded = async (route: string) => {
    if (route === 'login') {
      router.push('/(auth)/login');
    } else if (route === 'signup') {
      router.push('/(auth)/signup');
    }
    await AsyncStorage.setItem('onboarded', 'true');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <OnboardingImage />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.heading}>Let's get started!</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Login"
              size="large"
              type="filled"
              onPress={() => handleOnboarded('login')}
            />
            <Button
              title="Signup"
              size="large"
              type="outlined"
              onPress={() => handleOnboarded('signup')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const { colorScheme, alignItems, spacing, fonts, fontSizes, justifyContent } = theme;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colorScheme.light.white,
  },
  container: {
    flex: 1,
    justifyContent: justifyContent.flexEnd,
    padding: spacing[24],
    gap: spacing[120],
  },
  imageContainer: {
    alignItems: alignItems.center,
  },
  bottomContainer: {
    gap: spacing[36],
    width: '100%',
  },
  heading: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.heading.medium,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: spacing[24],
  },
});
