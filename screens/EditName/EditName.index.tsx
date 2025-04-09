/* eslint-disable import/no-unresolved */
import { Text, View } from 'react-native';
import TextInput from '@/components/TextInput/TextInput.index';
import Button from '@/components/Button/Button.index';
import { useForm } from 'react-hook-form';
import { useNameSchema, NameSchemaType } from '@/helpers/validationSchemas/nameSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { setItem, getItem } from '@/helpers/asyncStorage/asyncStorage';
import Toast from 'react-native-toast-message';
import { useEffect } from 'react';
import { styles } from './EditName.styles';

export default function EditName({ user }: any) {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { isValid },
  } = useForm<NameSchemaType>({
    resolver: yupResolver(useNameSchema()),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const firstNameValue = watch('firstName');
  const lastNameValue = watch('lastName');

  const isChanged = firstNameValue !== user?.firstName || lastNameValue !== user?.lastName;

  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
      });
    }
  }, [user, reset]);

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Your name changed successfully!',
    });
  };

  const handleSaveName = async (data: NameSchemaType) => {
    try {
      await setDoc(
        doc(db, 'users', user.uid),
        {
          firstName: data.firstName,
          lastName: data.lastName,
          displayName: `${data.firstName} ${data.lastName}`,
        },
        { merge: true },
      );

      showToast();

      const currentUser = await getItem('user');

      const newUser = {
        ...currentUser,
        firstName: data.firstName,
        lastName: data.lastName,
        displayName: `${data.firstName} ${data.lastName}`,
      };

      await setItem('user', newUser);
    } catch {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.descriptionText}>
          Update your first and last name as it appears on your profile.
        </Text>
        <TextInput control={control} label="First Name" name="firstName" />
        <TextInput control={control} label="Last Name" name="lastName" />
      </View>
      <Button
        disabled={!isValid || !isChanged}
        title="Save"
        size="medium"
        type="filled"
        onPress={handleSubmit(handleSaveName)}
      />
    </View>
  );
}
