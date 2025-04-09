import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface IButtonProps {
  onPress: () => void;
  title: string;
  type?: 'filled' | 'outlined' | 'text' | 'error';
  size?: 'small' | 'medium' | 'large';
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  customButtonStyle?: ViewStyle;
}
