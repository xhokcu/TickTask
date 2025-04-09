import { TouchableOpacity } from 'react-native';
import { IIconButtonProps } from './IconButton.types';
import { styles } from './IconButton.styles';

export default function IconButton({ icon, onPress, customContainerStyle }: IIconButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, customContainerStyle]}>
      {icon}
    </TouchableOpacity>
  );
}
