import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { theme } from '@/theme/Theme';

const { colorScheme, spacing, borderRadius, fonts, fontSizes, fontWeights } = theme;

export const styles = StyleSheet.create({
  // **Circle**
  circleContainer: {
    width: spacing[16],
    height: spacing[16],
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: spacing[7],
    height: spacing[6],
    borderRadius: borderRadius[3],
  },

  // **Rectangle**
  rectangleContainer: {
    width: spacing[7],
    height: spacing[16],
    borderRadius: spacing[8],
  },

  // **All Badges**
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: spacing[4],
    borderRadius: borderRadius[4],
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.medium,
    fontWeight: fontWeights.medium,
  },

  // **Small Badge**
  smallBadge: {
    paddingHorizontal: spacing[4],
    height: spacing[20],
  },
  smallBadgeText: {
    fontSize: fontSizes.body.small,
  },

  // **Medium Badge**
  mediumBadge: {
    paddingHorizontal: spacing[8],
    height: spacing[24],
  },
  mediumBadgeText: {
    fontSize: fontSizes.body.medium,
  },
});

export const badgeStyles: Record<string, ViewStyle> = StyleSheet.create({
  // **Colored Badges**
  badgeBlue: {
    backgroundColor: colorScheme.light.badgeColors.blue[100],
  },
  badgeCircleBlue: {
    backgroundColor: colorScheme.light.badgeColors.blue[300],
  },
  badgeRecBlue: {
    backgroundColor: colorScheme.light.badgeColors.blue[400],
  },

  badgeOrange: {
    backgroundColor: colorScheme.light.badgeColors.orange[100],
  },
  badgeCircleOrange: {
    backgroundColor: colorScheme.light.badgeColors.orange[300],
  },
  badgeRecOrange: {
    backgroundColor: colorScheme.light.badgeColors.orange[400],
  },

  badgeRed: {
    backgroundColor: colorScheme.light.badgeColors.red[100],
  },
  badgeCircleRed: {
    backgroundColor: colorScheme.light.badgeColors.red[300],
  },
  badgeRecRed: {
    backgroundColor: colorScheme.light.badgeColors.red[400],
  },

  badgeGreen: {
    backgroundColor: colorScheme.light.badgeColors.green[200],
  },
  badgeCircleGreen: {
    backgroundColor: colorScheme.light.badgeColors.green[300],
  },
  badgeRecGreen: {
    backgroundColor: colorScheme.light.badgeColors.green[300],
  },

  badgePurple: {
    backgroundColor: colorScheme.light.badgeColors.purple[100],
  },

  badgeCirclePurple: {
    backgroundColor: colorScheme.light.badgeColors.purple[300],
  },
  badgeRecPurple: {
    backgroundColor: colorScheme.light.badgeColors.purple[400],
  },

  badgePink: {
    backgroundColor: colorScheme.light.badgeColors.pink[100],
  },
  badgeCirclePink: {
    backgroundColor: colorScheme.light.badgeColors.pink[300],
  },
  badgeRecPink: {
    backgroundColor: colorScheme.light.badgeColors.pink[400],
  },

  badgeTeal: {
    backgroundColor: colorScheme.light.badgeColors.teal[100],
  },
  badgeCircleTeal: {
    backgroundColor: colorScheme.light.badgeColors.teal[300],
  },
  badgeRecTeal: {
    backgroundColor: colorScheme.light.badgeColors.teal[400],
  },

  badgeYellow: {
    backgroundColor: colorScheme.light.badgeColors.yellow[100],
  },
  badgeCircleYellow: {
    backgroundColor: colorScheme.light.badgeColors.yellow[300],
  },
  badgeRecYellow: {
    backgroundColor: colorScheme.light.badgeColors.yellow[400],
  },

  badgeGrey: {
    backgroundColor: colorScheme.light.gray[100],
  },
  badgeCircleGrey: {
    backgroundColor: colorScheme.light.gray[300],
  },
  badgeRecGrey: {
    backgroundColor: colorScheme.light.gray[600],
  },
});

export const badgeTextStyles: Record<string, TextStyle> = StyleSheet.create({
  // **Colored Badges Text**
  badgeTextGrey: {
    color: colorScheme.light.gray[600],
  },
  badgeTextYellow: {
    color: colorScheme.light.badgeColors.yellow[500],
  },
  badgeTextTeal: {
    color: colorScheme.light.badgeColors.teal[500],
  },
  badgeTextPink: {
    color: colorScheme.light.badgeColors.pink[500],
  },
  badgeTextPurple: {
    color: colorScheme.light.badgeColors.purple[500],
  },
  badgeTextBlue: {
    color: colorScheme.light.badgeColors.blue[500],
  },
  badgeTextGreen: {
    color: colorScheme.light.badgeColors.green[500],
  },
  badgeTextRed: {
    color: colorScheme.light.badgeColors.red[500],
  },
  badgeTextOrange: {
    color: colorScheme.light.badgeColors.orange[500],
  },
});
