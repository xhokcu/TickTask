import { StyleSheet } from 'react-native';
import { theme } from '@/theme/Theme';

const { flexDirection, colorScheme, spacing, borderRadius, fonts, fontSizes, borderWidth } = theme;

export const styles = StyleSheet.create({
  mainContainer: {
    gap: spacing[4],
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.body.small,
    color: colorScheme.light.blue[300],
  },
  chipContainer: {
    flexDirection: flexDirection.row,
    gap: spacing[8],
  },
  chip: {
    borderRadius: borderRadius[24],
    borderColor: colorScheme.light.blue[200],
    borderWidth: borderWidth[1],
    paddingHorizontal: spacing[8],
    paddingVertical: spacing[4],
    backgroundColor: colorScheme.light.white,
  },
  chipText: {
    fontFamily: fonts.regular,
  },
});
