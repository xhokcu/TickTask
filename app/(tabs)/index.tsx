// React
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// Firebase
import { db } from '@/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
// Components
import { FlashList } from '@shopify/flash-list';
// Theme
import { theme } from '@/theme/Theme';
// Libraries
import moment from 'moment';
// Async Storage
import { useUserUid } from '@/hooks/useUserId';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { TaskItem } from '@/components/TaskItem/TaskItem.index';
import { setTasks } from '@/store/task/taskSlice';
import { deleteTask } from '@/store/task/taskSlice';

export default function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const userData = useSelector((state: RootState) => state.user.user);
  const id = useUserUid();

  useEffect(() => {
    const fetchTasks = async () => {
      if (!id) return;
      const tasksRef = collection(db, 'users', id, 'tasks');
      const snapshot = await getDocs(tasksRef);
      const data = snapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          id: doc.id,
          title: docData.title ?? '',
          priority: docData.priority ?? '',
          createdAt: docData.createdAt ?? '',
          ...docData,
        };
      });
      dispatch(setTasks(data));
    };

    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, dispatch]);

  const today = moment().format('DD MMMM, YYYY');

  const handleTaskDelete = async (taskId: string) => {
    if (!id) return;
    try {
      dispatch(deleteTask(taskId));
      await deleteDoc(doc(db, 'users', id, 'tasks', taskId));
    } catch {
      // console.error('Error deleting task:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text style={styles.heading}>Hi, {userData?.firstName}!</Text>
        <View style={styles.progressCardContainer}>
          <View>
            <Text style={styles.dateText}>{today}</Text>
            <Text style={styles.progressText}>Today's progress</Text>
          </View>
          <Text style={styles.percentageText}>%85</Text>
        </View>
        <View style={styles.listContainer}>
          <FlashList
            keyExtractor={(item) => item.id}
            data={tasks}
            extraData={tasks}
            renderItem={({ item }) => (
              <TaskItem item={item} handleDelete={() => handleTaskDelete(item.id)} />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const { colorScheme, fonts, fontSizes, spacing, borderRadius, shadow } = theme;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: spacing[24],
    backgroundColor: colorScheme.light.background,
    gap: spacing[24],
  },
  heading: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.heading.medium,
    color: colorScheme.light.gray[900],
  },
  progressCardContainer: {
    backgroundColor: colorScheme.light.blue[600],
    padding: spacing[24],
    borderRadius: borderRadius[12],
    gap: spacing[24],
    ...shadow.small,
  },
  dateText: {
    fontFamily: fonts.regular,
    color: colorScheme.light.white,
    fontSize: fontSizes.body.large,
  },
  progressText: {
    fontFamily: fonts.medium,
    color: colorScheme.light.white,
    fontSize: fontSizes.heading.small,
  },
  percentageText: {
    fontFamily: fonts.medium,
    color: colorScheme.light.white,
    fontSize: fontSizes.heading.large,
  },
  listContainer: {
    width: '100%',
    flex: 1,
  },
});
