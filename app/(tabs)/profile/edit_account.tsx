import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme/Theme';
import { Edit } from '@/svg';
import IconButton from '@/components/IconButton/IconButton.index';
import { router } from 'expo-router';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

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
  const userData = useSelector((state: RootState) => state.user.user);
  const handleEdit = (screen: string) => {
    const title = screen.charAt(0).toUpperCase() + screen.slice(1);
    router.push({
      pathname: '/profile/edit_information',
      params: { title: `Edit ${title}`, type: screen },
    });
  };

  return (
    <View style={styles.container}>
      <InformationItem
        title={'Name'}
        value={userData.displayName as string}
        onPress={() => handleEdit('name')}
      />
      <InformationItem
        title={'Email'}
        value={userData.email as string}
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
