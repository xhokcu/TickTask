import { StyleSheet } from 'react-native';
import { theme } from '@/theme/Theme';

const {
  flexDirection,
  alignItems,
  colorScheme,
  spacing,
  borderRadius,
  fonts,
  fontSizes,
  fontWeights,
} = theme;

export const styles = StyleSheet.create({
  // **All Buttons**
  container: {
    flexDirection: flexDirection.row,
    gap: spacing[8],
    borderRadius: borderRadius[8],
    paddingHorizontal: spacing[24],
    alignItems: alignItems.center,
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.semibold,
    fontSize: fontSizes.body.medium,
    fontWeight: fontWeights.semiBold,
    lineHeight: spacing[24],
  },

  // **Filled Button**
  filledButton: {
    backgroundColor: colorScheme.light.blue[300],
  },
  filledButtonText: {
    color: colorScheme.light.white,
  },

  // **Outlined Button**
  outlinedButton: {
    borderColor: colorScheme.light.blue[300],
    borderWidth: 1,
  },
  outlinedButtonText: {
    color: colorScheme.light.blue[300],
  },

  // **Error Button**
  errorButton: {
    borderColor: colorScheme.light.error,
    borderWidth: 1,
  },
  errorButtonText: {
    color: colorScheme.light.error,
  },

  // **Small Button**
  smallButton: {
    height: spacing[32],
    paddingVertical: spacing[8],
  },

  // **Medium Button**
  mediumButton: {
    paddingVertical: spacing[12],
  },

  // **Large Button**
  largeButton: {
    paddingVertical: spacing[18],
  },

  // **Disabled Button**
  disabledButton: {
    opacity: 0.4,
  },
});
