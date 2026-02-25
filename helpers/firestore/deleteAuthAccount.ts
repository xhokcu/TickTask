import { deleteUser } from 'firebase/auth';
import { auth } from '@/firebase';

export const deleteAuthAccount = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error('No authenticated user');

  await deleteUser(user);
};
