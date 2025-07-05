import { theme } from '@/theme/Theme';
import { StyleSheet } from 'react-native';
const { colorScheme, fonts, fontSizes, spacing, borderRadius, shadow, borderWidth } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: borderRadius[8],
    borderWidth: borderWidth[1],
    borderColor: colorScheme.light.gray[200],
    padding: spacing[12],
    ...shadow.small,
    backgroundColor: colorScheme.light.white,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.body.xlarge,
  },
  descriptionText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.medium,
  },
  textContainer: {
    gap: spacing[8],
  },
});
