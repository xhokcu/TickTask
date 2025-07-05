import { StyleSheet } from 'react-native';
import { theme } from '@/theme/Theme';

const { fonts, fontSizes, spacing, colorScheme } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing[24],
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    gap: spacing[24],
  },
  descriptionText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.large,
    color: colorScheme.light.gray[600],
  },
});
