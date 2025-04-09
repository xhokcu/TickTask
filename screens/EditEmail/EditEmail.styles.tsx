import { StyleSheet } from 'react-native';
import { theme } from '@/theme/Theme';

const { fonts, fontSizes, spacing, colorScheme, lineHeight, justifyContent } = theme;

export const styles = StyleSheet.create({
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
