import React, { useState } from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Login as LoginImage } from '@/svg';
import Button from '@/components/Button/Button.index';
import { theme } from '@/theme/Theme';
import TextInput from '@/components/TextInput/TextInput.index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterSchema, RegisterSchemaType } from '@/helpers/validationSchemas/registerSchema';
import StepProgress from '@/components/StepProgress/StepProgress.index';
import { auth, db } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';
import { ToastAlert } from '@/components/ToastAlert/ToastAlert.index';

export default function Signup() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<RegisterSchemaType>({
    mode: 'onChange',
    resolver: yupResolver(useRegisterSchema()),
  });

  const [errMessage, setErrMessage] = useState<any>();
  const [password, setPassword] = useState<string>('');
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  const showToast = () => {
    ToastAlert({
      type: 'success',
      title: 'You signed up successfully!',
    });
  };

  const handleSignup = async (data: RegisterSchemaType) => {
    const { email, firstName, lastName } = data;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        displayName: `${data.firstName} ${data.lastName}`,
        email,
      });
      showToast();
      router.replace('/(auth)/login');
    } catch (err: any) {
      setErrMessage(err.message);
    }
  };

  const steps = [
    'At least 8 characters',
    'Must contain an uppercase letter',
    'Must contain a number',
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <View style={styles.imageContainer}>
                <LoginImage />
              </View>
              <Text style={styles.header}>Create a new account.</Text>
              <View style={styles.form}>
                <View style={{ flexDirection: 'row', width: '100%', gap: 12 }}>
                  <TextInput
                    customContainerStyle={{ flex: 1 }}
                    control={control}
                    placeholder="First name"
                    label="First Name"
                    name="firstName"
                  />
                  <TextInput
                    customContainerStyle={{ flex: 1 }}
                    control={control}
                    placeholder="Last name"
                    label="Last Name"
                    name="lastName"
                  />
                </View>
                <TextInput control={control} placeholder="Email" label="Email" name="email" />
                <View style={styles.passwordContainer}>
                  <TextInput
                    placeholder="Password"
                    label="Password"
                    isPassword
                    setValue={(val) => setPassword(val)}
                  />
                  {password?.length > 0 && (
                    <StepProgress
                      steps={steps}
                      password={password}
                      setIsPasswordValid={setIsPasswordValid}
                    />
                  )}
                </View>
                <Text>{errMessage}</Text>
              </View>
            </View>
            <Button
              type={'filled'}
              size="large"
              disabled={!isValid && !isPasswordValid}
              title="Signup"
              onPress={handleSubmit(handleSignup)}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    fontFamily: fonts.semibold,
    fontSize: fontSizes.heading.small,
    textAlign: 'center',
  },
  form: {
    gap: spacing[24],
  },
  passwordContainer: {
    gap: spacing[8],
  },
});
