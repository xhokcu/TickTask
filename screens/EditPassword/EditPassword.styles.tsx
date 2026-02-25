import { StyleSheet } from 'react-native';
import { theme } from '@/theme/Theme';

const { fonts, fontSizes, spacing, colorScheme, lineHeight } = theme;

export const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: spacing[24],
  },
  inputContainer: {
    flex: 1,
    gap: spacing[24],
  },
  descriptionText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.large,
    lineHeight: lineHeight[21],
    color: colorScheme.light.gray[600],
  },
});
