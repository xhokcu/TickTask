import { ViewStyle, TextStyle, StyleProp } from 'react-native';

export type IBadgeColors =
  | 'blue'
  | 'red'
  | 'green'
  | 'purple'
  | 'pink'
  | 'teal'
  | 'yellow'
  | 'orange'
  | 'grey';

export type IIconTypes = 'circle' | 'rectangle';

export type ISizeTypes = 'small' | 'medium';

export interface IBadgeProps {
  title: string | number;
  color: IBadgeColors;
  size: ISizeTypes;
  rightIcon?: IIconTypes;
  leftIcon?: IIconTypes;
  customContainerStyle?: StyleProp<ViewStyle>;
  customTextStyle?: StyleProp<TextStyle>;
}

export interface IBadgeStyle {
  [key: string]: ViewStyle | TextStyle;
}
