import Toast from 'react-native-toast-message';
import { IToastMessageProps } from './ToastAlert.types';

export const ToastAlert = ({
  type,
  title,
  description,
  position = 'top',
  visibilityTime,
}: IToastMessageProps) => {
  return Toast.show({
    type,
    text1: title,
    text2: description,
    autoHide: true,
    visibilityTime,
    position,
  });
};
