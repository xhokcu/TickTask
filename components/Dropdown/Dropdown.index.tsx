import { Text, TextInput as TextInputRN, TouchableOpacity, View } from 'react-native';
import { ICoreTextInput } from './Dropdown.types';
import { styles } from './Dropdown.styles';
import { theme } from '@/theme/Theme';
import { useState } from 'react';
import { ArrowDown } from '@/svg';

const { colorScheme } = theme;

const priorities = [
  {
    id: 1,
    title: 'High',
  },
  {
    id: 2,
    title: 'Medium',
  },
  {
    id: 3,
    title: 'Low',
  },
];

const DropdownItem = ({ item }: any) => {
  const { title } = item;
  return (
    <TouchableOpacity style={styles.dropdownItem}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const DropdownMenu = () => {
  return (
    <View style={styles.dropdowMenu}>
      {priorities.map((item) => (
        <DropdownItem item={item} />
      ))}
    </View>
  );
};

export default function Dropdown({
  placeholder,
  label,
  value,
  setValue,
  errorMessage,
  customContainerStyle,
  customInputStyle,
}: ICoreTextInput) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.inputContainer, customContainerStyle]}
        onPress={handleMenu}
      >
        {label && <Text style={styles.labelText}>{label}</Text>}
        <View style={[styles.input, errorMessage && styles.errorInput, customInputStyle]}>
          <TextInputRN
            style={styles.textInput}
            placeholder={placeholder}
            onChangeText={setValue}
            value={value}
            placeholderTextColor={colorScheme.light.gray[900]}
            editable={false}
          />
          <ArrowDown color={colorScheme.light.gray[500]} />
        </View>
      </TouchableOpacity>
      {isMenuOpen && <DropdownMenu />}
    </View>
  );
}
