import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout, setUser } from './user.slice';
import { AppDispatch } from '@/store';
import { IUser } from '@/type/IUser';

export const loginUser = (userData: IUser) => async (dispatch: AppDispatch) => {
  await AsyncStorage.setItem('userData', JSON.stringify(userData));
  dispatch(setUser(userData));
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
  await AsyncStorage.removeItem('userData');
  dispatch(logout());
};
