import { doc, deleteDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

export const deleteUserData = async (uid: string) => {
  // delete user document
  await deleteDoc(doc(db, 'users', uid));

  // delete sub collections like tasks
  const q = query(collection(db, 'tasks'), where('userId', '==', uid));

  const snapshot = await getDocs(q);
  await Promise.all(snapshot.docs.map((d) => deleteDoc(d.ref)));
};
