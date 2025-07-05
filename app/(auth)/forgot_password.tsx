import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { usePasswordSchema, PasswordSchemaType } from '@/helpers/validationSchemas/passwordSchema';
import { yupResolver } from '@hookform/resolvers/yup';
// Theme
import { theme } from '@/theme/Theme';
// Components
import Button from '@/components/Button/Button.index';
import TextInput from '@/components/TextInput/TextInput.index';
// Assetss
import { Login as LoginImage } from '@/svg';
// Firebase
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase';
import { ToastAlert } from '@/components/ToastAlert/ToastAlert.index';

export default function ForgotPassword() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<PasswordSchemaType>({
    resolver: yupResolver(usePasswordSchema()),
    mode: 'onChange',
  });

  const showToast = () => {
    ToastAlert({
      type: 'success',
      title: 'Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.',
    });
  };

  const [errMessage, setErrMessage] = useState<string>('');

  const onSubmit = async (data: PasswordSchemaType) => {
    const { email } = data;
    try {
      await sendPasswordResetEmail(auth, email).then((data) => {
        showToast();
        router.replace('/(auth)/login');
      });
    } catch (err: any) {
      setErrMessage(err.message);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <LoginImage />
          </View>
          <Text style={styles.header}>
            Enter your account’s email address and we’ll send you a link to rest your password..
          </Text>
          <View style={styles.form}>
            <TextInput control={control} placeholder="Email" label="Email" name="email" />
            <Text style={styles.errText}>{errMessage}</Text>
          </View>
        </View>

        <Button
          type={'filled'}
          size="large"
          disabled={!isValid}
          title="Send Reset Link"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </SafeAreaView>
  );
}

const { colorScheme, justifyContent, spacing, alignItems, fontSizes, fonts } = theme;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colorScheme.light.white,
  },
  topContainer: {
    gap: spacing[36],
  },
  container: {
    flex: 1,
    padding: spacing[24],
    justifyContent: justifyContent.spaceBetween,
  },
  imageContainer: {
    alignItems: alignItems.center,
  },
  header: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.medium,
    textAlign: 'center',
    color: colorScheme.light.gray[600],
  },
  form: {
    gap: spacing[24],
  },
  textButton: {
    paddingHorizontal: spacing[0],
    paddingVertical: spacing[0],
    alignSelf: 'flex-start',
  },
  errText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.small,
    color: colorScheme.light.error,
  },
});
