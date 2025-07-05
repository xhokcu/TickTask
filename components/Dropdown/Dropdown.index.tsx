import { Text, TouchableOpacity, View } from 'react-native';
import { IDropdownMenuProps, IDropdownItemProps, IDropdownProps } from './Dropdown.types';
import { styles } from './Dropdown.styles';
import { theme } from '@/theme/Theme';
import { useState } from 'react';
import { ArrowDown } from '@/svg';

const { colorScheme } = theme;

const DropdownItem = ({ item, onSelect }: IDropdownItemProps) => {
  const { title } = item;
  return (
    <TouchableOpacity style={styles.dropdownItem} onPress={onSelect}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const DropdownMenu = ({ data, onSelect }: IDropdownMenuProps) => {
  return (
    <View style={styles.dropdowMenu}>
      {data?.map((item, index) => (
        <DropdownItem
          key={`${index}_${item.id}_${item.title}_`}
          item={item}
          onSelect={() => onSelect(item.id)}
        />
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
  data,
}: IDropdownProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleMenu = () => {
    setIsFocused(!isFocused);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, customContainerStyle]}>
        {label && <Text style={styles.labelText}>{label}</Text>}
        <TouchableOpacity
          activeOpacity={1}
          onPress={handleMenu}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[
            styles.input,
            errorMessage && styles.errorInput,
            customInputStyle,
            isFocused && styles.focusedContainer,
          ]}
        >
          <Text style={styles.textInput}>{value ? value : placeholder}</Text>
          <ArrowDown color={colorScheme.light.gray[500]} />
        </TouchableOpacity>
      </View>
      {isFocused && (
        <DropdownMenu
          data={data}
          onSelect={(id: number) => {
            setValue(id);
            setIsFocused(false);
          }}
        />
      )}
    </View>
  );
}
