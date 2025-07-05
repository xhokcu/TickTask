import { View, Text } from 'react-native';
import TextInput from '@/components/TextInput/TextInput.index';
import { styles } from './EditPassword.styles';
import Button from '@/components/Button/Button.index';

export default function EditPassword({ user }: any) {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.descriptionText}>
          Update your password to keep your account secure.
        </Text>
        <TextInput label="Password" placeholder="helin" />
      </View>
      <Button
        title="Save"
        size="medium"
        type="filled"
        onPress={() => null}
        // disabled={!password}
      />
    </View>
  );
}
