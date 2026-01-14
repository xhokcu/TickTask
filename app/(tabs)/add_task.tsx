/* eslint-disable import/no-unresolved */
import { StyleSheet, View, Text, Keyboard } from 'react-native';
import TextInput from '@/components/TextInput/TextInput.index';
import { theme } from '@/theme/Theme';
import Button from '@/components/Button/Button.index';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '@/firebase';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddTaskSchema, AddTaskSchemaType } from '@/helpers/validationSchemas/taskSchema';
import ChipList from '@/components/ChipList/ChipList.index';
import { IBadgeColors } from '@/components/Badge/Badge.types';
import { useDispatch } from 'react-redux';
import { useUserUid } from '@/hooks/useUserId';
import { addTask } from '@/store/task/taskSlice';
import { ToastAlert } from '@/components/ToastAlert/ToastAlert.index';

export interface ILocation {
  latitude: number;
  longitude: number;
}

export default function AddTask() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<AddTaskSchemaType>({
    mode: 'onChange',
    resolver: yupResolver(useAddTaskSchema()),
  });

  const dispatch = useDispatch();
  // const userData = useSelector((state: RootState) => state.user.user);
  const userId = useUserUid();

  const [location] = useState<ILocation | null>(null);
  // const [isLocationModalOpen, setIsLocationModalOpen] = useState<boolean>(false);
  const [priority, setPriority] = useState<string | null>(null);

  const priorities = [
    {
      id: 1,
      title: 'Low',
      color: 'blue' as IBadgeColors,
    },
    {
      id: 2,
      title: 'Medium',
      color: 'yellow' as IBadgeColors,
    },
    {
      id: 3,
      title: 'High',
      color: 'red' as IBadgeColors,
    },
  ];

  const handleAddTask = async (data: AddTaskSchemaType) => {
    if (!userId) return;

    const taskData = {
      title: data.title,
      description: data.description,
      priority,
      // location, // eğer location seçilmişse
      createdAt: Date.now(),
    };

    try {
      const docRef = await addDoc(collection(db, 'users', userId, 'tasks'), taskData);
      dispatch(addTask({ id: docRef.id, ...taskData }));
      Keyboard.dismiss();
      reset();
      setPriority(null);
      ToastAlert({
        type: 'success',
        title: 'Task added successfully!',
      });
    } catch {
      // console.error('Error adding task:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput control={control} name="title" label="Title*" placeholder="Enter task title." />
        <TextInput
          control={control}
          name="description"
          label="Description"
          placeholder="Enter task description*."
        />
        <ChipList
          label={'Priority'}
          listData={priorities}
          onSelect={(item) => {
            setPriority(item.title);
          }}
        />
        {location && (
          <Text>
            Selected: {location?.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
          </Text>
        )}
        {/* <Button
          size="small"
          type="outlined"
          title={location ? 'Update Location' : 'Select Location'}
          onPress={() => setIsLocationModalOpen(true)}
          leftIcon={<Location width={16} height={20} color={colorScheme.light.blue[300]} />}
        /> */}
      </View>
      <Button title="Add" onPress={handleSubmit(handleAddTask)} disabled={!isValid || !priority} />
      {/* <SelectLocationModal
        visible={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        onSelect={setLocation}
      /> */}
    </View>
  );
}

const { spacing, colorScheme } = theme;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: spacing[24],
    justifyContent: 'space-between',
    backgroundColor: colorScheme.light.background,
  },
  form: {
    gap: spacing[24],
  },
  mapContainer: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: 'red',
  },
});
