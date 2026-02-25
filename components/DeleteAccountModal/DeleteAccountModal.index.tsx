import { Modal, View, Text } from 'react-native';
import { ISDeleteAccountModalProps } from './DeleteAccountModal.types';
import { styles } from './DeleteAccountModal.styles';
import Button from '../Button/Button.index';

export default function DeleteAccountModal({
  visible,
  onClose,
  onSelect,
}: ISDeleteAccountModalProps) {
  const handleSubmit = () => {
    onSelect();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal transparent={true} animationType="fade" visible={visible} onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.header}>Delete Account</Text>
            <Text>This action is permanent and cannot be undone.</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              size="small"
              title="Cancel"
              type="outlined"
              onPress={handleCancel}
              customButtonStyle={styles.fullWidthButton}
            />
            <Button
              size="small"
              title="Delete"
              onPress={handleSubmit}
              customButtonStyle={{ ...styles.fullWidthButton, ...styles.redButton }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
