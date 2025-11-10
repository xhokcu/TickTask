import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useUserUid = (): string | null => {
  return useSelector((state: RootState) => state.user.user.uid);
};
