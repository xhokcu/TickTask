import { Controller } from 'react-hook-form';
import { Text, TextInput as TextInputRN, TouchableOpacity, View } from 'react-native';
import { ITextInput, ICoreTextInput } from './TextInput.types';
import { styles } from './TextInput.styles';
import { theme } from '@/theme/Theme';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@/svg';

const { colorScheme } = theme;

export function CoreTextInput({
  placeholder,
  label,
  value,
  setValue,
  errorMessage,
  isPassword = false,
  customContainerStyle,
  customInputStyle,
  defaultValue,
}: ICoreTextInput) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container, customContainerStyle]}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <View style={[styles.input, errorMessage && styles.errorInput, customInputStyle]}>
        <TextInputRN
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={setValue}
          defaultValue={defaultValue}
          value={value}
          placeholderTextColor={colorScheme.light.gray[900]}
          secureTextEntry={isPassword && !isPasswordVisible}
        />
        {isPassword && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <Visibility color={colorScheme.light.gray[300]} />
            ) : (
              <VisibilityOff color={colorScheme.light.gray[300]} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
}

export default function TextInput({ name, control, ...props }: ITextInput) {
  if (control) {
    return (
      <Controller
        name={name as string}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CoreTextInput
            {...props}
            setValue={onChange}
            value={value}
            errorMessage={error?.message}
          />
        )}
      />
    );
  }

  return <CoreTextInput {...props} />;
}
