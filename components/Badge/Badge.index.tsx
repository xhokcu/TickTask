import React, { useMemo } from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { IBadgeProps, IBadgeStyle } from './Badge.types';
import { styles, badgeTextStyles, badgeStyles } from './Badge.styles';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

function Circle({ color }: { color: string }) {
  const circleStyleKey = `badgeCircle${capitalize(color)}` as keyof IBadgeStyle;
  const circleStyle = badgeStyles[circleStyleKey];
  return (
    <View style={styles.circleContainer}>
      <View style={[styles.circle, circleStyle]} />
    </View>
  );
}

function Rectangle({ color }: { color: string }) {
  const recStyleKey = `badgeRec${capitalize(color)}` as keyof IBadgeStyle;
  const recStyle = badgeStyles[recStyleKey];
  return <View style={[styles.rectangleContainer, recStyle]} />;
}

export default function Badge({
  title,
  size = 'medium',
  color = 'grey',
  rightIcon,
  leftIcon,
  customContainerStyle,
  customTextStyle,
}: IBadgeProps) {
  const capitalizedColor = useMemo(() => capitalize(color), [color]);

  const getIcon = (iconType: string) =>
    iconType === 'circle' ? (
      <Circle color={color} />
    ) : iconType === 'rectangle' ? (
      <Rectangle color={color} />
    ) : null;

  const { containerStyle, textStyle } = useMemo(
    () => ({
      containerStyle: badgeStyles[`badge${capitalizedColor}` as keyof IBadgeStyle] as ViewStyle,
      textStyle: badgeTextStyles[`badgeText${capitalizedColor}` as keyof IBadgeStyle] as TextStyle,
    }),
    [capitalizedColor],
  );

  const sizeStyles = useMemo(
    () => ({
      badgeSizeStyle:
        {
          small: styles.smallBadge,
          medium: styles.mediumBadge,
        }[size] || styles.mediumBadge,
      badgeSizeTextStyle:
        {
          small: styles.smallBadgeText,
          medium: styles.mediumBadgeText,
        }[size] || styles.mediumBadgeText,
    }),
    [size],
  );

  return (
    <View
      style={[styles.container, sizeStyles.badgeSizeStyle, containerStyle, customContainerStyle]}
    >
      {leftIcon && getIcon(leftIcon)}
      <Text style={[styles.text, sizeStyles.badgeSizeTextStyle, textStyle, customTextStyle]}>
        {title}
      </Text>
      {rightIcon && getIcon(rightIcon)}
    </View>
  );
}
