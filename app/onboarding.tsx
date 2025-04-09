import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { theme } from '@/theme/Theme';
import Button from '@/components/Button/Button.index';
import { TickTaskLogo } from '@/svg/index';

const { colorScheme, alignItems, spacing, fonts, fontSizes, justifyContent } = theme;

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
          <TickTaskLogo />
          <Text style={styles.logoText}>
            <Text style={[styles.logoText, { color: colorScheme.light.blue[300] }]}>tick</Text>
            <Text style={[styles.logoText, { color: colorScheme.light.blue[200] }]}>task</Text>
          </Text>
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
    justifyContent: justifyContent.center,
    flexDirection: 'row',
    gap: spacing[12],
  },
  logoText: {
    fontFamily: fonts.semibold,
    fontSize: fontSizes.heading.large,
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
