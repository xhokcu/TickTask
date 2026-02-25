import { Text, View } from 'react-native';

import { useForm } from 'react-hook-form';
import TextInput from '@/components/TextInput/TextInput.index';
import Button from '@/components/Button/Button.index';
import { useEmailSchema, EmailSchemaType } from '@/helpers/validationSchemas/emailSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateEmail, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { auth, db } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { setItem, getItem } from '@/helpers/asyncStorage/asyncStorage';
import { useState } from 'react';
import { styles } from './EditEmail.styles';
import { ToastAlert } from '@/components/ToastAlert/ToastAlert.index';

const EditEmail = ({ user }: { user: any }) => {
  const userEmail = 'Helin@h.com'; // Eğer user null ya da undefined ise boş bir string döner
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
      ToastAlert({
        type: 'success',
        title: 'Password verified successfully!',
      });
    } catch {
      ToastAlert({
        type: 'error',
        title: 'Incorrect password!',
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

      ToastAlert({
        type: 'success',
        title: 'Your email has been updated successfully!',
      });
    } catch {
      ToastAlert({
        type: 'error',
        title: 'Failed to update email!',
      });
    }
  };
  const renderPassword = () => (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.descriptionText}>
          To change your email, please enter your password.
        </Text>
        <TextInput label="Password" value={password} setValue={setPassword} isPassword />
      </View>
      <Button
        title="Verify Password"
        size="medium"
        type="filled"
        onPress={handleVerifyPassword}
        disabled={!password}
      />
    </View>
  );

  const renderEmail = () => (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.descriptionText}>Now, enter your new email address.</Text>
        <TextInput
          label="New Email"
          control={control}
          name="email"
          placeholder="New Email"
          defaultValue={userEmail}
        />
      </View>
      <Button
        title="Save"
        size="medium"
        type="filled"
        onPress={handleSubmit(handleSaveEmail)}
        disabled={!isValid}
      />
    </View>
  );

  return (
    <View style={styles.container}>{!isPasswordVerified ? renderPassword() : renderEmail()}</View>
  );
};

export default EditEmail;
