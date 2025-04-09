/* eslint-disable import/no-unresolved */
import { StyleSheet, View } from 'react-native';
import TextInput from '@/components/TextInput/TextInput.index';
import { theme } from '@/theme/Theme';
import Button from '@/components/Button/Button.index';
import { addDoc, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '@/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dropdown from '@/components/Dropdown/Dropdown.index';

export default function AddTask() {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [userId, setUserId] = useState<any>('');

  useEffect(() => {
    const getItemData = async () => {
      try {
        const data = await AsyncStorage.getItem('user');
        return data;
      } catch {}
    };
    const fetchData = async () => {
      const data = await getItemData();
      setUserId(data);
    };
    fetchData();
  }, []);

  const handleAddTask = async () => {
    if (!userId) {
      return;
    }
    const taskData = {
      title,
      description: desc,
    };
    try {
      await addDoc(collection(db, 'users', userId, 'tasks'), taskData);
    } catch {}
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput label="Title*" placeholder="Enter task title." setValue={setTitle} />
        <TextInput label="Description" placeholder="Enter tast description." setValue={setDesc} />
        <Dropdown label="Priority" placeholder="Select priority" />
        {/* time, date, reminder or notif? ,  */}
      </View>
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
}

const { spacing, colorScheme } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing[24],
    justifyContent: 'space-between',
    backgroundColor: colorScheme.light.background,
  },
  form: {
    gap: spacing[24],
  },
});
