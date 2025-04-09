import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';

export const fetchUser = async (uid: string) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
