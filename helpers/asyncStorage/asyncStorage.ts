import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem(key: string) {
  const item = await AsyncStorage.getItem(key);
  const parsedItem = JSON.parse(item as string);
  return parsedItem;
}

export async function setItem(key: string, value: any) {
  const stringItem = JSON.stringify(value);
  await AsyncStorage.setItem(key, stringItem);
}

export async function removeItem(key: string) {
  await AsyncStorage.removeItem(key);
}
