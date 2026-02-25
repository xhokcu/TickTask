import { StyleSheet } from 'react-native';
import { theme } from '@/theme/Theme';

const { spacing, fonts, colorScheme, fontSizes, borderRadius, shadow } = theme;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colorScheme.light.white,
    position: 'absolute',
    top: spacing[24],
    width: '90%',
    padding: spacing[16],
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: borderRadius[12],
    gap: spacing[12],
    ...shadow.xsmall,
  },
  iconTextContainer: {
    flex: 1,
    gap: spacing[12],
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
    gap: spacing[4],
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.body.medium,
    lineHeight: 21,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.medium,
    lineHeight: 21,
  },
});
