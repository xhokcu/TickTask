import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface IIconButtonProps {
  icon: ReactNode;
  onPress: () => void;
  customContainerStyle?: ViewStyle;
}
