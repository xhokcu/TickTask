import { View, Text } from 'react-native';
import { styles } from './CustomToast.styles';
import { ICustomToastProps } from './CustomToast.types';
import Toast from 'react-native-toast-message';
import IconButton from '@/components/IconButton/IconButton.index';
import { Cancel } from '@/svg';

export default function CustomToast({ text1, text2, icon }: ICustomToastProps) {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <View style={styles.iconTextContainer}>
        {icon}
        <View style={styles.textContainer}>
          {text1 && <Text style={styles.title}>{text1}</Text>}
          {text2 && <Text style={styles.description}>{text2}</Text>}
        </View>
      </View>
      <IconButton
        icon={<Cancel />}
        onPress={() => {
          Toast.hide();
        }}
      />
    </View>
  );
}
