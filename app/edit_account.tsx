/* eslint-disable import/no-unresolved */
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme/Theme';
import { Edit } from '@/svg';
import IconButton from '@/components/IconButton/IconButton.index';
import { router } from 'expo-router';
import { useState } from 'react';
import { getItem } from '@/helpers/asyncStorage/asyncStorage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const InformationItem = ({
  title,
  value,
  onPress,
}: {
  title: string;
  value: string;
  onPress: () => void;
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.regularText}>{title}</Text>
        <Text style={styles.mediumText}>{value}</Text>
      </View>
      <IconButton icon={<Edit />} onPress={onPress} />
    </View>
  );
};

export default function EditAccount() {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useFocusEffect(
    useCallback(() => {
      const getUser = async () => {
        const storedUser = await getItem('user');
        setCurrentUser(storedUser);
      };

      getUser();
    }, []),
  );

  const handleEdit = (screen: string) => {
    router.push({
      pathname: '/edit_information',
      params: {
        type: screen,
      },
    });
  };

  return (
    <View style={styles.container}>
      <InformationItem
        title={'Name'}
        value={currentUser?.displayName as string}
        onPress={() => handleEdit('name')}
      />
      <InformationItem
        title={'Email'}
        value={currentUser?.email as string}
        onPress={() => handleEdit('email')}
      />
      <InformationItem
        title={'Password'}
        value={'**********'}
        onPress={() => handleEdit('password')}
      />
    </View>
  );
}

const {
  fonts,
  borderWidth,
  flexDirection,
  fontSizes,
  spacing,
  colorScheme,
  borderRadius,
  justifyContent,
  shadow,
} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing[24],
    gap: spacing[24],
    backgroundColor: colorScheme.light.background,
  },
  cardContainer: {
    backgroundColor: colorScheme.light.white,
    borderRadius: borderRadius[12],
    flexDirection: flexDirection.row,
    justifyContent: justifyContent.spaceBetween,
    padding: spacing[16],
    borderWidth: borderWidth[1],
    borderColor: colorScheme.light.gray[200],
    ...shadow.small,
  },
  textContainer: {
    gap: spacing[12],
  },
  regularText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.large,
    color: colorScheme.light.gray[900],
  },
  mediumText: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.body.large,
    color: colorScheme.light.gray[900],
  },
});
