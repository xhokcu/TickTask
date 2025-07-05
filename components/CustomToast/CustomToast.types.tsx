import { ReactNode } from 'react';
import { BaseToastProps } from 'react-native-toast-message';

export interface ICustomToastProps extends BaseToastProps {
  icon: ReactNode;
}
