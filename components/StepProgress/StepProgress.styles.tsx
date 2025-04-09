import { StyleSheet } from 'react-native';
import { theme } from '@/theme/Theme';

const { colorScheme, spacing, borderRadius, fonts, fontSizes } = theme;

export const styles = StyleSheet.create({
  mainContainer: {
    gap: spacing[8],
  },
  stepsContainer: {
    flexDirection: 'row',
    gap: spacing[8],
  },
  step: {
    flex: 1,
    borderRadius: borderRadius[2],
    height: spacing[4],
  },
  textContainer: {
    gap: spacing[4],
  },
  regularText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.small,
    color: colorScheme.light.gray[500],
  },
  textIconContainer: {
    flexDirection: 'row',
    gap: spacing[4],
    alignItems: 'center',
  },
});
