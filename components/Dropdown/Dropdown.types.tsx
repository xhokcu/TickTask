import { ViewStyle } from 'react-native';

export interface ITextInput {
  control?: any;
  placeholder: string;
  label: string;
  value?: string;
  setValue?: (val: string) => void;
  errorMessage?: string;
  name?: string;
  isPassword?: boolean;
  customContainerStyle?: ViewStyle;
  customInputStyle?: ViewStyle;
}

export interface IDropdownProps {
  placeholder: string;
  label: string;
  value?: string;
  setValue: (id: number) => void;
  errorMessage?: string;
  isPassword?: boolean;
  customContainerStyle?: ViewStyle;
  customInputStyle?: ViewStyle;
  data: any[];
}
export interface IDropdownMenuProps {
  data: any[];
  onSelect: (id: number) => void;
}

export interface IDropdownItem {
  id: number;
  title: string;
}
export interface IDropdownItemProps {
  item: IDropdownItem;
  onSelect: () => void;
}
