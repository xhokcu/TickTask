// React
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// Firebase
import { db } from '@/firebase';
import { collection, query, getDocs } from 'firebase/firestore';
// Components
import { FlashList } from '@shopify/flash-list';
// Theme
import { theme } from '@/theme/Theme';
// Libraries
import moment from 'moment';
// Async Storage
import { getItem } from '@/helpers/asyncStorage/asyncStorage';

export default function Home() {
  const [user, setUser] = useState<any>('');
  const [taskList, setTaskList] = useState<any>([]);

  useEffect(() => {
    const getItemData = async () => {
      try {
        const data = await getItem('user');
        return data;
      } catch {}
    };
    const fetchData = async () => {
      const data = await getItemData();
      setUser(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getDoc = async () => {
      try {
        const queryRef = query(collection(db, 'users', user.uid, 'tasks'));
        const data = await getDocs(queryRef);
        const taskList = data.docs.map((doc) => doc.data());
        setTaskList(taskList);
      } catch {}
    };
    getDoc();
  }, [user]);

  const today = moment().format('DD MMMM, YYYY');

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text style={styles.heading}>Hi, {user?.firstName}!</Text>
        <View style={styles.progressCardContainer}>
          <View>
            <Text style={styles.dateText}>{today}</Text>
            <Text style={styles.progressText}>Today's progress</Text>
          </View>
          <Text style={styles.percentageText}>%85</Text>
        </View>
        <View style={styles.listContainer}>
          <FlashList
            estimatedItemSize={20}
            data={taskList}
            extraData={taskList}
            renderItem={({ item }: { item: any }) => <Text>{item.title}</Text>}
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
