import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme/Theme';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/TextInput/TextInput.index';
import Button from '@/components/Button/Button.index';
import { useEmailSchema, EmailSchemaType } from '@/helpers/validationSchemas/emailSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateEmail, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { auth, db } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { setItem, getItem } from '@/helpers/asyncStorage/asyncStorage';
import Toast from 'react-native-toast-message';
import { useState } from 'react';

const EditEmail = ({ user }: { user: any }) => {
  const userEmail = 'H@h2.com'; // Eğer user null ya da undefined ise boş bir string döner
  const uid = user?.uid || ''; // Aynı şekilde uid için de kontrol

  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [password, setPassword] = useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<EmailSchemaType>({
    resolver: yupResolver(useEmailSchema()),
    mode: 'onChange',
  });

  const handleVerifyPassword = async () => {
    try {
      const credential = EmailAuthProvider.credential(userEmail, password);
      const current = auth.currentUser;
      if (current) {
        await reauthenticateWithCredential(current, credential);
      } else {
        throw new Error('No authenticated user found.');
      }
      setIsPasswordVerified(true);
      Toast.show({
        type: 'success',
        text1: 'Password verified successfully!',
      });
    } catch {
      Toast.show({
        type: 'error',
        text1: 'Incorrect password!',
      });
    }
  };

  const handleSaveEmail = async (data: EmailSchemaType) => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        // console.log('girdi', currentUser, data.email);
        try {
          await updateEmail(currentUser, data?.email);
        } catch {
          // console.log(err);
        }
      } else {
        // console.log('No user is currently authenticated');
      }
      // console.log('firebase updated');
      // Update email in Firestore
      await setDoc(
        doc(db, 'users', uid),
        {
          email: data.email,
        },
        { merge: true },
      );
      // console.log('firestore update');

      // Update email in AsyncStorage
      const user = await getItem('user');
      const updatedUser = {
        ...user,
        email: data.email,
      };
      await setItem('user', updatedUser);
      // console.log('async update');

      Toast.show({
        type: 'success',
        text1: 'Your email has been updated successfully!',
      });
    } catch {
      Toast.show({
        type: 'error',
        text1: 'Failed to update email!',
      });
    }
  };

  return (
    <View style={styles.container}>
      {!isPasswordVerified ? (
        <View style={styles.passwordContainer}>
          <Text style={styles.descriptionText}>
            To change your email, please enter your password.
          </Text>
          <TextInput label="Password" value={password} setValue={setPassword} isPassword />
          <Button
            title="Verify Password"
            size="medium"
            type="filled"
            onPress={handleVerifyPassword}
            disabled={!password}
          />
        </View>
      ) : (
        <View style={styles.emailContainer}>
          <Text style={styles.descriptionText}>Now, enter your new email address.</Text>
          <TextInput
            label="New Email"
            control={control}
            name="email"
            placeholder="New Email"
            defaultValue={userEmail}
          />
          <Button
            title="Save"
            size="medium"
            type="filled"
            onPress={handleSubmit(handleSaveEmail)}
            disabled={!isValid}
          />
        </View>
      )}
    </View>
  );
};

const { fonts, fontSizes, spacing, colorScheme } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing[24],
    backgroundColor: colorScheme.light.background,
  },
  passwordContainer: {
    gap: spacing[24],
  },
  emailContainer: {
    gap: spacing[24],
  },
  descriptionText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.large,
    color: colorScheme.light.gray[600],
  },
});

export default EditEmail;
