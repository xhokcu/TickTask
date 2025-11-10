import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/type/IUser';

interface IUserState {
  user: IUser;
  isAuthenticated: boolean;
}

const initialUserState = {
  uid: null,
  email: null,
  firstName: null,
  lastName: null,
  displayName: null,
};

const initialState: IUserState = {
  user: initialUserState,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    updateUser: (state, action: PayloadAction<Partial<IUser>>) => {
      state.user = { ...state.user, ...action.payload };
    },
    logout: (state) => {
      state.user = initialState.user;
      state.isAuthenticated = false;
    },
  },
});
export const { setUser, updateUser, logout } = userSlice.actions;
export default userSlice.reducer;
