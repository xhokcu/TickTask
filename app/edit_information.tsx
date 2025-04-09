/* eslint-disable import/no-unresolved */
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme/Theme';
import { useLocalSearchParams } from 'expo-router';
import TextInput from '@/components/TextInput/TextInput.index';
import { getItem } from '@/helpers/asyncStorage/asyncStorage';
import { useEffect, useState } from 'react';
import EditName from '@/screens/EditName/EditName.index';
import EditEmail from '@/screens/EditEmail/EditEmail.index';

const EditPassword = ({ user }: any) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.descriptionText}>Update your password to keep your account secure.</Text>
      <TextInput label="Password" placeholder="helin" />
    </View>
  );
};

export default function EditInformation() {
  const { type } = useLocalSearchParams();
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const storedUser = await getItem('user');
      setCurrentUser(storedUser);
    };
    getUser();
  }, []);

  return (
    <View style={styles.mainContainer}>
      {type === 'name' ? (
        <EditName user={currentUser} />
      ) : type === 'email' ? (
        <EditEmail user={currentUser} />
      ) : type === 'password' ? (
        <EditPassword user={currentUser} />
      ) : null}
    </View>
  );
}

const { fonts, fontSizes, spacing, colorScheme, lineHeight, justifyContent } = theme;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colorScheme.light.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing[24],
    paddingTop: spacing[24],
    paddingBottom: spacing[48],
    justifyContent: justifyContent.spaceBetween,
  },
  contentContainer: {
    gap: spacing[24],
  },
  descriptionText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.large,
    lineHeight: lineHeight[21],
    color: colorScheme.light.gray[600],
  },
});
