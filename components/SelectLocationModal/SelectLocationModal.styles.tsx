import { StyleSheet } from 'react-native';
import { theme } from '@/theme/Theme';

const { colorScheme, spacing, flexDirection, fonts, fontSizes, borderRadius } = theme;

export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorScheme.backgroundModal,
  },
  modalContainer: {
    width: '90%',
    padding: spacing[24],
    gap: spacing[24],
    backgroundColor: colorScheme.light.white,
    borderRadius: borderRadius[12],
  },
  buttonContainer: {
    flexDirection: flexDirection.row,
    gap: spacing[12],
  },
  fullWidthButton: {
    flex: 1,
  },
  map: {
    height: spacing[400],
  },
  header: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.large,
  },
});
